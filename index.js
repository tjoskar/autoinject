'use strict';

exports.__esModule = true;

var _distSrcAutoInject = require('./dist/src/autoinject');
var _distSrcInject = require('./dist/src/inject');
var _distSrcIoc = require('./dist/src/ioc');

exports.autoInject = _distSrcAutoInject.autoInject;
exports.autoInstantiate = _distSrcAutoInject.autoInstantiate;
exports.inject = _distSrcInject.inject;
exports.dependencyInjection = _distSrcIoc.dependencyInjection;
