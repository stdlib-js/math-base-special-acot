// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.POSITIVE_INFINITY,n=1.5707963267948966,t=.7853981633974483,r=Number.NEGATIVE_INFINITY,u=6123233995736766e-32,o=2.414213562373095;return function(f){return function(f){var i,c,d,I;return function(e){return e!=e}(f)||0===f?f:f===e?n:f===r?-n:(f<0&&(c=!0,f=-f),i=0,f>o?(d=n,i=1,f=-1/f):f<=.66?d=0:(d=t,i=2,f=(f-1)/(f+1)),I=(I=f*f)*function(e){return 0===e?-64.85021904942025:e*(e*(e*(-.8750608600031904*e-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(I)/function(e){return 0===e?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+1*e))))}(I),I=f*I+f,2===i?I+=.5*u:1===i&&(I+=u),d+=I,c?-d:d)}(1/f)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).acot=n();
//# sourceMappingURL=browser.js.map
