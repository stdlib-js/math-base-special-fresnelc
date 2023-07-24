// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,t=n.toString,o=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var c,l,y,p;if("object"!=typeof e||null===e||"[object Array]"===t.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=a.value,e.__proto__=c):e[r]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(e,r,a.get),p&&i&&i.call(e,r,a.set),e};function c(e,r,n){a(e,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",b=y&&"symbol"==typeof Symbol.toStringTag?function(e){var r,n,t,o,i;if(null==e)return p.call(e);n=e[s],i=s,r=null!=(o=e)&&v.call(o,i);try{e[s]=void 0}catch(r){return p.call(e)}return t=p.call(e),r?e[s]=n:delete e[s],t}:function(e){return p.call(e)},d="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,A="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var e,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,e=(d&&n instanceof Uint32Array||"[object Uint32Array]"===b(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?A:function(){throw new Error("not implemented")};var _,m=l,h="function"==typeof Float64Array,U="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;_=function(){var e,r,n;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),n=r,e=(h&&n instanceof Float64Array||"[object Float64Array]"===b(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?g:function(){throw new Error("not implemented")};var j,N=_,I="function"==typeof Uint8Array,O="function"==typeof Uint8Array?Uint8Array:null,S="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var e,r,n;if("function"!=typeof O)return!1;try{r=new O(r=[1,3.14,-3.14,256,257]),n=r,e=(I&&n instanceof Uint8Array||"[object Uint8Array]"===b(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?S:function(){throw new Error("not implemented")};var E,F=j,T="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;E=function(){var e,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,65536,65537]),n=r,e=(T&&n instanceof Uint16Array||"[object Uint16Array]"===b(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")};var P,L={uint16:E,uint8:F};(P=new L.uint16(1))[0]=4660;var V=52===new L.uint8(P.buffer)[0],W=!0===V?1:0,k=new N(1),x=new m(k.buffer);function M(e){return k[0]=e,x[W]}var Y,C,q=!0===V?0:1,z=new N(1),B=new m(z.buffer);!0===V?(Y=1,C=0):(Y=0,C=1);var D={HIGH:Y,LOW:C},J=new N(1),K=new m(J.buffer),Q=D.HIGH,R=D.LOW;function X(e,r){return K[Q]=e,K[R]=r,J[0]}var Z,$,ee=Math.floor,re=Number.POSITIVE_INFINITY,ne=Number.NEGATIVE_INFINITY;function te(e){return e!=e}function oe(e){return e===re||e===ne}!0===V?(Z=1,$=0):(Z=0,$=1);var ie={HIGH:Z,LOW:$},ue=new N(1),fe=new m(ue.buffer),ae=ie.HIGH,ce=ie.LOW;function le(e,r,n,t){return ue[0]=e,r[t]=fe[ae],r[t+n]=fe[ce],r}function ye(e){return le(e,[0,0],1,0)}c(ye,"assign",le);var pe=[0,0];function ve(e){return Math.abs(e)}function se(e,r,n,t){return te(e)||oe(e)?(r[t]=e,r[t+n]=0,r):0!==e&&ve(e)<22250738585072014e-324?(r[t]=4503599627370496*e,r[t+n]=-52,r):(r[t]=e,r[t+n]=0,r)}c((function(e){return se(e,[0,0],1,0)}),"assign",se);var be=[0,0],de=[0,0];function we(e,r){var n,t,o,i,u,f;return 0===r||0===e||te(e)||oe(e)?e:(se(e,be,1,0),r+=be[1],r+=function(e){var r=M(e);return(r=(2146435072&r)>>>20)-1023|0}(e=be[0]),r<-1074?(o=0,i=e,ye.assign(o,pe,1,0),u=pe[0],u&=2147483647,f=M(i),X(u|=f&=2147483648,pe[1])):r>1023?e<0?ne:re:(r<=-1023?(r+=52,t=2220446049250313e-31):t=1,ye.assign(e,de,1,0),n=de[0],n&=2148532223,t*X(n|=r+1023<<20,de[1])))}function Ae(e){return function(e,r){var n,t;for(n=[],t=0;t<r;t++)n.push(e);return n}(0,e)}var _e=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],me=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,Ue=5.960464477539063e-8,ge=Ae(20),je=Ae(20),Ne=Ae(20),Ie=Ae(20);function Oe(e,r,n,t,o,i,u,f,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=t[n],d=n,v=0;d>0;v++)l=Ue*w|0,Ie[v]=w-he*l|0,w=t[d-1]+l,d-=1;if(w=we(w,o),w-=8*ee(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Ie[n-1]>>24-o,Ie[n-1]-=v<<24-o,y=Ie[n-1]>>23-o):0===o?y=Ie[n-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<n;v++)d=Ie[v],0===c?0!==d&&(c=1,Ie[v]=16777216-d):Ie[v]=16777215-d;if(o>0)switch(o){case 1:Ie[n-1]&=8388607;break;case 2:Ie[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=we(1,o)))}if(0===w){for(d=0,v=n-1;v>=i;v--)d|=Ie[v];if(0===d){for(s=1;0===Ie[i-s];s++);for(v=n+1;v<=n+s;v++){for(a[f+v]=_e[u+v],l=0,d=0;d<=f;d++)l+=e[d]*a[f+(v-d)];t[v]=l}return Oe(e,r,n+=s,t,o,i,u,f,a)}}if(0===w)for(n-=1,o-=24;0===Ie[n];)n-=1,o-=24;else(w=we(w,-o))>=he?(l=Ue*w|0,Ie[n]=w-he*l|0,o+=24,Ie[n+=1]=l):Ie[n]=0|w;for(l=we(1,o),v=n;v>=0;v--)t[v]=l*Ie[v],l*=Ue;for(v=n;v>=0;v--){for(l=0,s=0;s<=p&&s<=n-v;s++)l+=me[s]*t[v+s];Ne[n-v]=l}for(l=0,v=n;v>=0;v--)l+=Ne[v];for(r[0]=0===y?l:-l,l=Ne[0]-l,v=1;v<=n;v++)l+=Ne[v];return r[1]=0===y?l:-l,7&b}function Se(e,r,n,t){var o,i,u,f,a,c,l;for((i=(n-3)/24|0)<0&&(i=0),f=n-24*(i+1),c=i-(u=t-1),l=u+4,a=0;a<=l;a++)ge[a]=c<0?0:_e[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=e[c]*ge[u+(a-c)];je[a]=o}return Oe(e,r,4,je,f,4,i,u,ge)}var Ee=Math.round;function Fe(e,r,n){var t,o,i,u,f;return i=e-1.5707963267341256*(t=Ee(.6366197723675814*e)),u=6077100506506192e-26*t,f=r>>20|0,n[0]=i-u,f-(M(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=i)-(i=o-(u=6077100506303966e-26*t))-u),n[0]=i-u,f-(M(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=i)-(i=o-(u=20222662487111665e-37*t))-u),n[0]=i-u)),n[1]=i-n[0]-u,t}var Te=1.5707963267341256,He=6077100506506192e-26,Ge=2*He,Pe=3*He,Le=4*He,Ve=[0,0,0],We=[0,0];function ke(e,r){var n,t,o,i,u,f,a;if((o=2147483647&M(e)|0)<=1072243195)return r[0]=e,r[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fe(e,o,r):o<=1073928572?e>0?(a=e-Te,r[0]=a-He,r[1]=a-r[0]-He,1):(a=e+Te,r[0]=a+He,r[1]=a-r[0]+He,-1):e>0?(a=e-2*Te,r[0]=a-Ge,r[1]=a-r[0]-Ge,2):(a=e+2*Te,r[0]=a+Ge,r[1]=a-r[0]+Ge,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fe(e,o,r):e>0?(a=e-3*Te,r[0]=a-Pe,r[1]=a-r[0]-Pe,3):(a=e+3*Te,r[0]=a+Pe,r[1]=a-r[0]+Pe,-3):1075388923===o?Fe(e,o,r):e>0?(a=e-4*Te,r[0]=a-Le,r[1]=a-r[0]-Le,4):(a=e+4*Te,r[0]=a+Le,r[1]=a-r[0]+Le,-4);if(o<1094263291)return Fe(e,o,r);if(o>=2146435072)return r[0]=NaN,r[1]=NaN,0;for(n=function(e){return z[0]=e,B[q]}(e),a=X(o-((t=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Ve[u]=0|a,a=16777216*(a-Ve[u]);for(Ve[2]=a,i=3;0===Ve[i-1];)i-=1;return f=Se(Ve,We,t,i),e<0?(r[0]=-We[0],r[1]=-We[1],-f):(r[0]=We[0],r[1]=We[1],f)}var xe=-.16666666666666632;function Me(e,r,n,t,o){var i,u,f,a,c;return u=.00833333333332249+(c=e*e)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*e,n[o]=0===r?e+f*(xe+c*u):e-(c*(.5*r-f*u)-r-f*xe),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(i=.5*c),n[o+t]=a+(1-a-i+(c*u-e*r)),n}var Ye=[0,0];function Ce(e,r,n,t){var o,i;if(o=M(e),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|e)&&(r[t]=e,r[t+n]=0),Me(e,0,r,n,t);if(o>=2146435072)return r[t]=NaN,r[t+n]=NaN,r;switch(i=ke(e,Ye),Me(Ye[0],Ye[1],r,n,t),3&i){case 1:return o=r[t+n],r[t+n]=-r[t],r[t]=o,r;case 2:return r[t]*=-1,r[t+n]*=-1,r;case 3:return o=-r[t+n],r[t+n]=r[t],r[t]=o,r;default:return r}}c((function(e){return Ce(e,[0,0],1,0)}),"assign",Ce);var qe=3.141592653589793,ze=[0,0];return function(e){var r,n,t,o,i,u,f;return(r=(n=ve(e))*n)<2.5625?t=n*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=1+e*(e*(.018884331939670384+e*(e*(9504280628298596e-21+e*(0*e-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),n=1+e*(.04121420907221998+e*(.0008680295429417843+e*(12226278902417902e-21+e*(1.2500186247959882e-7+e*(9.154392157746574e-10+399982968972496e-26*e)))))):(r=0+(e=1/e)*(e*(9504280628298596e-21+e*(e*(.018884331939670384+e*(1*e-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),n=399982968972496e-26+e*(9.154392157746574e-10+e*(1.2500186247959882e-7+e*(12226278902417902e-21+e*(.0008680295429417843+e*(.04121420907221998+1*e)))))),r/n)}(u=r*r):n>36974?t=.5:(f=1/((u=qe*(r=n*n))*u),u=1/u,o=1-f*function(e){var r,n;return 0===e?2.999999999999634:((e<0?-e:e)<=1?(r=3.763297112699879e-20+e*(13428327623306275e-32+e*(17201074326816183e-29+e*(1.0230451416490724e-10+e*(3.055689837902576e-8+e*(46361374928786735e-22+e*(.000345017939782574+e*(.011522095507358577+e*(.1434079197807589+e*(.4215435550436775+0*e))))))))),n=1.2544323709001127e-20+e*(45200143407412973e-33+e*(5887545336215784e-29+e*(36014002958937136e-27+e*(1.1269922476399903e-8+e*(18462756734893055e-22+e*(.00015593440916415301+e*(.0064405152650885865+e*(.11688892585919138+e*(.7515863983533789+1*e)))))))))):(r=0+(e=1/e)*(.4215435550436775+e*(.1434079197807589+e*(.011522095507358577+e*(.000345017939782574+e*(46361374928786735e-22+e*(3.055689837902576e-8+e*(1.0230451416490724e-10+e*(17201074326816183e-29+e*(13428327623306275e-32+3.763297112699879e-20*e))))))))),n=1+e*(.7515863983533789+e*(.11688892585919138+e*(.0064405152650885865+e*(.00015593440916415301+e*(18462756734893055e-22+e*(1.1269922476399903e-8+e*(36014002958937136e-27+e*(5887545336215784e-29+e*(45200143407412973e-33+1.2544323709001127e-20*e)))))))))),r/n)}(f),i=u*function(e){var r,n;return 0===e?1:((e<0?-e:e)<=1?(r=18695871016278324e-38+e*(8363544356306774e-34+e*(1375554606332618e-30+e*(10826804113902088e-28+e*(4.4534441586175015e-10+e*(9.828524436884223e-8+e*(11513882611188428e-21+e*(.0006840793809153931+e*(.018764858409257526+e*(.1971028335255234+e*(.5044420736433832+0*e)))))))))),n=18695871016278324e-38+e*(8391588162831187e-34+e*(13879653125957886e-31+e*(11027321506624028e-28+e*(4.6068072814652043e-10+e*(1.0431458965757199e-7+e*(12754507566772912e-21+e*(.0008146791071843061+e*(.02536037414203388+e*(.33774898912002+e*(1.4749575992512833+1*e))))))))))):(r=0+(e=1/e)*(.5044420736433832+e*(.1971028335255234+e*(.018764858409257526+e*(.0006840793809153931+e*(11513882611188428e-21+e*(9.828524436884223e-8+e*(4.4534441586175015e-10+e*(10826804113902088e-28+e*(1375554606332618e-30+e*(8363544356306774e-34+18695871016278324e-38*e)))))))))),n=1+e*(1.4749575992512833+e*(.33774898912002+e*(.02536037414203388+e*(.0008146791071843061+e*(12754507566772912e-21+e*(1.0431458965757199e-7+e*(4.6068072814652043e-10+e*(11027321506624028e-28+e*(13879653125957886e-31+e*(8391588162831187e-34+18695871016278324e-38*e))))))))))),r/n)}(f),Ce(u=1.5707963267948966*r,ze,1,0),t=.5+(o*ze[0]-i*ze[1])/(u=qe*n)),e<0&&(t=-t),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).fresnelc=r();
//# sourceMappingURL=index.js.map
