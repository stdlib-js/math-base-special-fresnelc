// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,t=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",f=e&&"symbol"==typeof Symbol.toStringTag?function(r){var e,f,u,i,a;if(null==r)return n.call(r);f=r[o],a=o,e=null!=(i=r)&&t.call(i,a);try{r[o]=void 0}catch(e){return n.call(r)}return u=n.call(r),e?r[o]=f:delete r[o],u}:function(r){return n.call(r)},u="function"==typeof Uint32Array,i="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,e,n;if("function"!=typeof i)return!1;try{e=new i(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,y=r,l="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,p="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,NaN]),n=e,r=(l&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A,s=c,b="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,d="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===f(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,U=A,m="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;h=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N(e=[1,3.14,-3.14,65536,65537]),n=e,r=(m&&n instanceof Uint16Array||"[object Uint16Array]"===f(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F={uint16:h,uint8:U};(g=new F.uint16(1))[0]=4660;var S=52===new F.uint8(g.buffer)[0],H=!0===S?1:0,O=new s(1),T=new y(O.buffer);function j(r){return O[0]=r,T[H]}var E,G,L=!0===S?0:1,W=new s(1),M=new y(W.buffer);!0===S?(E=1,G=0):(E=0,G=1);var x={HIGH:E,LOW:G},P=new s(1),V=new y(P.buffer),Y=x.HIGH,_=x.LOW;function k(r,e){return V[Y]=r,V[_]=e,P[0]}var q,z,B=Math.floor,C=Number.POSITIVE_INFINITY,D=Number.NEGATIVE_INFINITY;function J(r){return r!=r}function K(r){return r===C||r===D}!0===S?(q=1,z=0):(q=0,z=1);var Q={HIGH:q,LOW:z},R=new s(1),X=new y(R.buffer),Z=Q.HIGH,$=Q.LOW;function rr(r,e){return R[0]=e,r[0]=X[Z],r[1]=X[$],r}function er(r,e){return 1===arguments.length?rr([0,0],r):rr(r,e)}var nr=[0,0];function tr(r){return Math.abs(r)}function or(r,e){return J(e)||K(e)?(r[0]=e,r[1]=0,r):0!==e&&tr(e)<22250738585072014e-324?(r[0]=4503599627370496*e,r[1]=-52,r):(r[0]=e,r[1]=0,r)}var fr=[0,0],ur=[0,0];function ir(r,e){var n,t,o,f,u;return 0===e||0===r||J(r)||K(r)?r:(function(r,e){1===arguments.length?or([0,0],r):or(r,e)}(fr,r),e+=fr[1],e+=function(r){var e=j(r);return(e=(2146435072&e)>>>20)-1023|0}(r=fr[0]),e<-1074?(o=r,er(nr,0),f=nr[0],f&=2147483647,u=j(o),k(f|=u&=2147483648,nr[1])):e>1023?r<0?D:C:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,er(ur,r),n=ur[0],n&=2148532223,t*k(n|=e+1023<<20,ur[1])))}function ar(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],lr=16777216,vr=5.960464477539063e-8,pr=ar(20),Ar=ar(20),sr=ar(20),br=ar(20);function wr(r,e,n,t,o,f,u,i,a){var c,y,l,v,p,A,s,b,w;for(v=f,w=t[n],b=n,p=0;b>0;p++)y=vr*w|0,br[p]=w-lr*y|0,w=t[b-1]+y,b-=1;if(w=ir(w,o),w-=8*B(.125*w),w-=s=0|w,l=0,o>0?(s+=p=br[n-1]>>24-o,br[n-1]-=p<<24-o,l=br[n-1]>>23-o):0===o?l=br[n-1]>>23:w>=.5&&(l=2),l>0){for(s+=1,c=0,p=0;p<n;p++)b=br[p],0===c?0!==b&&(c=1,br[p]=16777216-b):br[p]=16777215-b;if(o>0)switch(o){case 1:br[n-1]&=8388607;break;case 2:br[n-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=ir(1,o)))}if(0===w){for(b=0,p=n-1;p>=f;p--)b|=br[p];if(0===b){for(A=1;0===br[f-A];A++);for(p=n+1;p<=n+A;p++){for(a[i+p]=cr[u+p],y=0,b=0;b<=i;b++)y+=r[b]*a[i+(p-b)];t[p]=y}return wr(r,e,n+=A,t,o,f,u,i,a)}}if(0===w)for(n-=1,o-=24;0===br[n];)n-=1,o-=24;else(w=ir(w,-o))>=lr?(y=vr*w|0,br[n]=w-lr*y|0,o+=24,br[n+=1]=y):br[n]=0|w;for(y=ir(1,o),p=n;p>=0;p--)t[p]=y*br[p],y*=vr;for(p=n;p>=0;p--){for(y=0,A=0;A<=v&&A<=n-p;A++)y+=yr[A]*t[p+A];sr[n-p]=y}for(y=0,p=n;p>=0;p--)y+=sr[p];for(e[0]=0===l?y:-y,y=sr[0]-y,p=1;p<=n;p++)y+=sr[p];return e[1]=0===l?y:-y,7&s}function dr(r,e,n,t){var o,f,u,i,a,c,y;for((f=(n-3)/24|0)<0&&(f=0),i=n-24*(f+1),c=f-(u=t-1),y=u+4,a=0;a<=y;a++)pr[a]=c<0?0:cr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*pr[u+(a-c)];Ar[a]=o}return wr(r,e,4,Ar,i,4,f,u,pr)}var hr=Math.round;function Ur(r,e,n){var t,o,f,u,i;return f=r-1.5707963267341256*(t=hr(.6366197723675814*r)),u=6077100506506192e-26*t,i=e>>20|0,n[0]=f-u,i-(j(n[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((o=f)-(f=o-(u=6077100506303966e-26*t))-u),n[0]=f-u,i-(j(n[0])>>20&2047)>49&&(u=84784276603689e-45*t-((o=f)-(f=o-(u=20222662487111665e-37*t))-u),n[0]=f-u)),n[1]=f-n[0]-u,t}var mr=1.5707963267341256,Nr=6077100506506192e-26,Ir=2*Nr,gr=3*Nr,Fr=4*Nr,Sr=[0,0,0],Hr=[0,0];function Or(r,e){var n,t,o,f,u,i,a;if((o=2147483647&j(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ur(r,o,e):o<=1073928572?r>0?(a=r-mr,e[0]=a-Nr,e[1]=a-e[0]-Nr,1):(a=r+mr,e[0]=a+Nr,e[1]=a-e[0]+Nr,-1):r>0?(a=r-2*mr,e[0]=a-Ir,e[1]=a-e[0]-Ir,2):(a=r+2*mr,e[0]=a+Ir,e[1]=a-e[0]+Ir,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ur(r,o,e):r>0?(a=r-3*mr,e[0]=a-gr,e[1]=a-e[0]-gr,3):(a=r+3*mr,e[0]=a+gr,e[1]=a-e[0]+gr,-3):1075388923===o?Ur(r,o,e):r>0?(a=r-4*mr,e[0]=a-Fr,e[1]=a-e[0]-Fr,4):(a=r+4*mr,e[0]=a+Fr,e[1]=a-e[0]+Fr,-4);if(o<1094263291)return Ur(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return W[0]=r,M[L]}(r),a=k(o-((t=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Sr[u]=0|a,a=16777216*(a-Sr[u]);for(Sr[2]=a,f=3;0===Sr[f-1];)f-=1;return i=dr(Sr,Hr,t,f),r<0?(e[0]=-Hr[0],e[1]=-Hr[1],-i):(e[0]=Hr[0],e[1]=Hr[1],i)}var Tr=-.16666666666666632;function jr(r,e,n){var t,o,f,u,i;return o=.00833333333332249+(i=e*e)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),f=i*e,r[0]=0===n?e+f*(Tr+i*o):e-(i*(.5*n-f*o)-n-f*Tr),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(t=.5*i),r[1]=u+(1-u-t+(i*o-e*n)),r}var Er=[0,0];function Gr(r,e){var n,t;if(n=j(e),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|e)&&(r[0]=e,r[1]=0),jr(r,e,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(t=Or(e,Er),jr(r,Er[0],Er[1]),3&t){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}}var Lr=3.141592653589793,Wr=[0,0];return function(r){var e,n,t,o,f,u,i;return(e=(n=tr(r))*n)<2.5625?t=n*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),n=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(e=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),n=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),e/n)}(u=e*e):n>36974?t=.5:(i=1/((u=Lr*(e=n*n))*u),u=1/u,o=1-i*function(r){var e,n;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(e=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),n=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(e=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),n=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),e/n)}(i),f=u*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),n=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(e=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),n=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),e/n)}(i),function(r,e){1===arguments.length?Gr([0,0],r):Gr(r,e)}(Wr,u=1.5707963267948966*e),t=.5+(o*Wr[0]-f*Wr[1])/(u=Lr*n)),r<0&&(t=-t),t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fresnelc=e();
//# sourceMappingURL=index.js.map
