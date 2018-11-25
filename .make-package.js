'use strict';

let pkg = require('./package');
let fs = require('fs-extra');

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

delete pkg.scripts;
fs.removeSync(PKG_ROOT);

let rootPackageJson = Object.assign({}, pkg, {
  name: 'type-gimei',
  main: './index.js',
  typings: './index.d.ts',
  module: './_esm5/index.js',
  es2015: './esm2015/index.js',
});

console.log(pkg);
console.log(rootPackageJson);

