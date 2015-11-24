'use strict';

exports.__esModule = true;

var _distSrcAutoInject = require('./dist/autoinject');
var _distSrcInject = require('./dist/inject');
var _distSrcIoc = require('./dist/ioc');

exports.autoInject = _distSrcAutoInject.autoInject;
exports.autoInstantiate = _distSrcAutoInject.autoInstantiate;
exports.inject = _distSrcInject.inject;
exports.dependencyInjection = _distSrcIoc.dependencyInjection;
