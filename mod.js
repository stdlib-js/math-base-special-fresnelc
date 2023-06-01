// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,n=Object.prototype,t=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===t.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,e)||i.call(r,e)?(c=r.__proto__,r.__proto__=n,delete r[e],r[e]=f.value,r.__proto__=c):r[e]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,e,f.get),v&&a&&a.call(r,e,f.set),r};function c(r,e,n){f(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var b=l&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,a;if(null==r)return y.call(r);n=r[p],a=p,e=null!=(o=r)&&v.call(o,a);try{r[p]=void 0}catch(e){return y.call(r)}return t=y.call(r),e?r[p]=n:delete r[p],t}:function(r){return y.call(r)},s="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var A,_="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(s&&n instanceof Uint32Array||"[object Uint32Array]"===b(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var U,g="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,e,n;if("function"!=typeof h)return!1;try{e=new h([1,3.14,-3.14,NaN]),n=e,r=(m&&n instanceof Float64Array||"[object Float64Array]"===b(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?g:function(){throw new Error("not implemented")};var N=U,j="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var O,S="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,256,257]),n=e,r=(j&&n instanceof Uint8Array||"[object Uint8Array]"===b(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null;var T,G="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,e,n;if("function"!=typeof H)return!1;try{e=new H(e=[1,3.14,-3.14,65536,65537]),n=e,r=(F&&n instanceof Uint16Array||"[object Uint16Array]"===b(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L={uint16:T,uint8:E};(P=new L.uint16(1))[0]=4660;var V=52===new L.uint8(P.buffer)[0],W=!0===V?1:0,k=new N(1),M=new d(k.buffer);function x(r){return k[0]=r,M[W]}var Y,C,q=!0===V?0:1,z=new N(1),B=new d(z.buffer);!0===V?(Y=1,C=0):(Y=0,C=1);var D={HIGH:Y,LOW:C},J=new N(1),K=new d(J.buffer),Q=D.HIGH,R=D.LOW;function X(r,e){return K[Q]=r,K[R]=e,J[0]}var Z=Math.floor,$=Number.POSITIVE_INFINITY,rr=Number.NEGATIVE_INFINITY;function er(r){return r!=r}function nr(r){return r===$||r===rr}var tr,or;!0===V?(tr=1,or=0):(tr=0,or=1);var ar={HIGH:tr,LOW:or},ur=new N(1),ir=new d(ur.buffer),fr=ar.HIGH,cr=ar.LOW;function lr(r,e,n,t){return ur[0]=r,e[t]=ir[fr],e[t+n]=ir[cr],e}function yr(r){return lr(r,[0,0],1,0)}c(yr,"assign",lr);var vr=[0,0];function pr(r){return Math.abs(r)}function br(r,e,n,t){return er(r)||nr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&pr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}c((function(r){return br(r,[0,0],1,0)}),"assign",br);var sr=[0,0],wr=[0,0];function Ar(r,e){var n,t,o,a,u,i;return 0===e||0===r||er(r)||nr(r)?r:(br(r,sr,1,0),e+=sr[1],e+=function(r){var e=x(r);return(e=(2146435072&e)>>>20)-1023|0}(r=sr[0]),e<-1074?(o=0,a=r,yr.assign(o,vr,1,0),u=vr[0],u&=2147483647,i=x(a),X(u|=i&=2147483648,vr[1])):e>1023?r<0?rr:$:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,yr.assign(r,wr,1,0),n=wr[0],n&=2148532223,t*X(n|=e+1023<<20,wr[1])))}function _r(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var dr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=5.960464477539063e-8,Ur=_r(20),gr=_r(20),Nr=_r(20),jr=_r(20);function Ir(r,e,n,t,o,a,u,i,f){var c,l,y,v,p,b,s,w,A;for(v=a,A=t[n],w=n,p=0;w>0;p++)l=hr*A|0,jr[p]=A-16777216*l|0,A=t[w-1]+l,w-=1;if(A=Ar(A,o),A-=8*Z(.125*A),A-=s=0|A,y=0,o>0?(s+=p=jr[n-1]>>24-o,jr[n-1]-=p<<24-o,y=jr[n-1]>>23-o):0===o?y=jr[n-1]>>23:A>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<n;p++)w=jr[p],0===c?0!==w&&(c=1,jr[p]=16777216-w):jr[p]=16777215-w;if(o>0)switch(o){case 1:jr[n-1]&=8388607;break;case 2:jr[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Ar(1,o)))}if(0===A){for(w=0,p=n-1;p>=a;p--)w|=jr[p];if(0===w){for(b=1;0===jr[a-b];b++);for(p=n+1;p<=n+b;p++){for(f[i+p]=dr[u+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];t[p]=l}return Ir(r,e,n+=b,t,o,a,u,i,f)}}if(0===A)for(n-=1,o-=24;0===jr[n];)n-=1,o-=24;else(A=Ar(A,-o))>=16777216?(l=hr*A|0,jr[n]=A-16777216*l|0,o+=24,jr[n+=1]=l):jr[n]=0|A;for(l=Ar(1,o),p=n;p>=0;p--)t[p]=l*jr[p],l*=hr;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=mr[b]*t[p+b];Nr[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Nr[p];for(e[0]=0===y?l:-l,l=Nr[0]-l,p=1;p<=n;p++)l+=Nr[p];return e[1]=0===y?l:-l,7&s}function Or(r,e,n,t){var o,a,u,i,f,c,l;for(4,(a=(n-3)/24|0)<0&&(a=0),i=n-24*(a+1),c=a-(u=t-1),l=u+4,f=0;f<=l;f++)Ur[f]=c<0?0:dr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*Ur[u+(f-c)];gr[f]=o}return 4,Ir(r,e,4,gr,i,4,a,u,Ur)}var Sr=Math.round;function Er(r,e,n){var t,o,a,u,i;return a=r-1.5707963267341256*(t=Sr(.6366197723675814*r)),u=6077100506506192e-26*t,i=e>>20|0,n[0]=a-u,i-(x(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=a)-(a=o-(u=6077100506303966e-26*t))-u),n[0]=a-u,i-(x(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=a)-(a=o-(u=20222662487111665e-37*t))-u),n[0]=a-u)),n[1]=a-n[0]-u,t}var Fr=1.5707963267341256,Hr=6077100506506192e-26,Tr=2*Hr,Gr=4*Hr,Pr=[0,0,0],Lr=[0,0];function Vr(r,e){var n,t,o,a,u,i,f;if((o=2147483647&x(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Er(r,o,e):o<=1073928572?r>0?(f=r-Fr,e[0]=f-Hr,e[1]=f-e[0]-Hr,1):(f=r+Fr,e[0]=f+Hr,e[1]=f-e[0]+Hr,-1):r>0?(f=r-2*Fr,e[0]=f-Tr,e[1]=f-e[0]-Tr,2):(f=r+2*Fr,e[0]=f+Tr,e[1]=f-e[0]+Tr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Er(r,o,e):r>0?(f=r-3*Fr,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*Fr,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===o?Er(r,o,e):r>0?(f=r-4*Fr,e[0]=f-Gr,e[1]=f-e[0]-Gr,4):(f=r+4*Fr,e[0]=f+Gr,e[1]=f-e[0]+Gr,-4);if(o<1094263291)return Er(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return z[0]=r,B[q]}(r),f=X(o-((t=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Pr[u]=0|f,f=16777216*(f-Pr[u]);for(Pr[2]=f,a=3;0===Pr[a-1];)a-=1;return i=Or(Pr,Lr,t,a),r<0?(e[0]=-Lr[0],e[1]=-Lr[1],-i):(e[0]=Lr[0],e[1]=Lr[1],i)}var Wr=-.16666666666666632;function kr(r,e,n,t,o){var a,u,i,f,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(f=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),i=c*r,n[o]=0===e?r+i*(Wr+c*u):r-(c*(.5*e-i*u)-e-i*Wr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=f*f*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),f=1-(a=.5*c),n[o+t]=f+(1-f-a+(c*u-r*e)),n}var Mr=[0,0];function xr(r,e,n,t){var o,a;if(o=x(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(e[t]=r,e[t+n]=0),kr(r,0,e,n,t);if(o>=2146435072)return e[t]=NaN,e[t+n]=NaN,e;switch(a=Vr(r,Mr),kr(Mr[0],Mr[1],e,n,t),3&a){case 1:return o=e[t+n],e[t+n]=-e[t],e[t]=o,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return o=-e[t+n],e[t+n]=e[t],e[t]=o,e;default:return e}}c((function(r){return xr(r,[0,0],1,0)}),"assign",xr);var Yr=3.141592653589793;var Cr=[0,0];function qr(r){var e,n,t,o,a,u,i;return(e=(n=pr(r))*n)<2.5625?t=n*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),n=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(e=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),n=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),e/n)}(u=e*e):n>36974?t=.5:(i=1/((u=Yr*(e=n*n))*u),u=1/u,o=1-i*function(r){var e,n;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(e=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),n=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(e=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),n=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),e/n)}(i),a=u*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),n=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(e=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),n=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),e/n)}(i),xr(u=1.5707963267948966*e,Cr,1,0),t=.5+(o*Cr[0]-a*Cr[1])/(u=Yr*n)),r<0&&(t=-t),t}export{qr as default};
//# sourceMappingURL=mod.js.map
