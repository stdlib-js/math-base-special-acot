// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.POSITIVE_INFINITY,n=1.5707963267948966,u=.7853981633974483,t=Number.NEGATIVE_INFINITY;var e=6123233995736766e-32,I=2.414213562373095;function N(N){return function(N){var f,o,a,c;return function(r){return r!=r}(N)||0===N?N:N===r?n:N===t?-n:(N<0&&(o=!0,N=-N),f=0,N>I?(a=n,f=1,N=-1/N):N<=.66?a=0:(a=u,f=2,N=(N-1)/(N+1)),c=(c=N*N)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(c)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(c),c=N*c+N,2===f?c+=.5*e:1===f&&(c+=e),a+=c,o?-a:a)}(1/N)}export{N as default};
//# sourceMappingURL=mod.js.map
