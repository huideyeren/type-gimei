'use strict';

let pkg = require('./package');
let fs = require('fs-extra');
let mkdirp = require('mkdirp');
let klawSync = require('klaw-sync');
let path = require('path');

const ROOT = 'dist/';
const CJS_ROOT = ROOT + 'cjs/';
const ESM5_ROOT = ROOT + 'esm5/';
const ESM2015_ROOT = ROOT + 'esm2015/';
const TYPE_ROOT = ROOT + 'typings/';
const PKG_ROOT = ROOT + 'package/';
const CJS_PKG = PKG_ROOT + '';
const ESM5_PKG = PKG_ROOT + '_esm5/';
const ESM2015_PKG = PKG_ROOT + '_esm2015/';
const SRC_ROOT_PKG = PKG_ROOT + 'src/';
const TYPE_PKG = PKG_ROOT;

function copySources(rootDir, packageDir, ignoreMissing) {
  if (!fs.existsSync(rootDir)) {
    if (ignoreMissing) {
      return;
    } else {
      throw 'Source root dir does not exist!';
    }
  }
  fs.copySync(rootDir, packageDir);
  fs.copySync('./README.md', packageDir + 'README.md');
}

// dist/package, dist/package/src
// npmで配布時のpathに解決する
function cleanSourceMapRoot(mapRoot, sourcesRoot) {
  klawSync(mapRoot, {filter: (item) => item.path.endsWith('.js.map')}).
      map(f => f.path).
      forEach(fName => {
        const sourceMap = fs.readJsonSync(fName);
        sourceMap.sources = sourceMap.sources.map(s => {
          const sRel = path.relative(path.parse(fName).dir,
              path.resolve(path.join(sourcesRoot, s)),
          );
          return sRel;
        });
        delete sourceMap.sourceRoot;
        fs.writeJsonSync(fName, sourceMap);
      });
}

delete pkg.scripts;

// dist/package
fs.removeSync(PKG_ROOT);

let rootPackageJson = Object.assign({}, pkg, {
  name: 'type-gimei',
  main: './index.js',
  typings: './index.d.ts',
  module: './_esm5/index.js',
  es2015: './_esm2015/index.js',
});

// dist/package
mkdirp.sync(PKG_ROOT);

// src/ -> dist/package/src
copySources('src/', SRC_ROOT_PKG);

// dist/cjs/ -> dist/package/
copySources(CJS_ROOT, CJS_PKG);

// dist/package -> dist/package/src
// for CJS
cleanSourceMapRoot(PKG_ROOT, SRC_ROOT_PKG);

// dist/typings -> dist/package
fs.copySync(TYPE_ROOT, TYPE_PKG);

// dist/esm5 -> dist/package/_esm5
copySources(ESM5_ROOT, ESM5_PKG, true);
cleanSourceMapRoot(ESM5_PKG, SRC_ROOT_PKG);

// dist/esm2015 -> dist/package/_esm2015
copySources(ESM2015_ROOT, ESM2015_PKG, true);
cleanSourceMapRoot(ESM2015_PKG, SRC_ROOT_PKG);

fs.writeJsonSync(PKG_ROOT + 'package.json', rootPackageJson, {spaces: 2});

