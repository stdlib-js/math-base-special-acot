// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.POSITIVE_INFINITY,n=1.5707963267948966,t=Number.NEGATIVE_INFINITY,r=6123233995736766e-32;return function(u){return function(u){var o,f,i,c;return function(e){return e!=e}(u)||0===u?u:u===e?n:u===t?-n:(u<0&&(f=!0,u=-u),o=0,u>2.414213562373095?(i=n,o=1,u=-1/u):u<=.66?i=0:(i=.7853981633974483,o=2,u=(u-1)/(u+1)),c=(c=u*u)*function(e){return 0===e?-64.85021904942025:e*(e*(e*(-.8750608600031904*e-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(c)/function(e){return 0===e?194.5506571482614:194.5506571482614+e*(485.3903996359137+e*(432.88106049129027+e*(165.02700983169885+e*(24.858464901423062+1*e))))}(c),c=u*c+u,2===o?c+=.5*r:1===o&&(c+=r),i+=c,f?-i:i)}(1/u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).acot=n();
//# sourceMappingURL=browser.js.map