'use strict';

let pkg = require('./package');
let fs = require('fs-extra');

const ROOT = 'dist/';
const PKG_ROOT = ROOT + 'package/';

delete pkg.scripts;
fs.removeSync(PKG_ROOT);