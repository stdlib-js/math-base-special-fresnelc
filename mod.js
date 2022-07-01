// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return r&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,t=e;var o=function(r){return t.call(r)},u=Object.prototype.hasOwnProperty;var f=function(r,n){return null!=r&&u.call(r,n)},a="function"==typeof Symbol?Symbol.toStringTag:"",i=f,c=a,v=e;var y=o,l=function(r){var n,e,t;if(null==r)return v.call(r);e=r[c],n=i(r,c);try{r[c]=void 0}catch(n){return v.call(r)}return t=v.call(r),n?r[c]=e:delete r[c],t},p=n()?l:y,A=p,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,U=function(r){return w&&r instanceof Uint32Array||"[object Uint32Array]"===A(r)},h=b;var s=function(){var r,n;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),r=U(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var m="function"==typeof Uint32Array?Uint32Array:void 0,N=function(){throw new Error("not implemented")},d=s()?m:N,I=p,F="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,g=function(r){return F&&r instanceof Float64Array||"[object Float64Array]"===I(r)},H=S;var O=function(){var r,n;if("function"!=typeof H)return!1;try{n=new H([1,3.14,-3.14,NaN]),r=g(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var E="function"==typeof Float64Array?Float64Array:void 0,j=function(){throw new Error("not implemented")},T=O()?E:j,G=p,L="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null,M=function(r){return L&&r instanceof Uint8Array||"[object Uint8Array]"===G(r)},P=W;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=M(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,x=p,q="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null,B=function(r){return q&&r instanceof Uint16Array||"[object Uint16Array]"===x(r)},C=z;var D=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),r=B(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J,K="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:D()?K:Q,uint8:k};(J=new R.uint16(1))[0]=4660;var X=52===new R.uint8(J.buffer)[0],Z=d,$=!0===X?1:0,rr=new T(1),nr=new Z(rr.buffer);var er=function(r){return rr[0]=r,nr[$]},tr=d,or=!0===X?0:1,ur=new T(1),fr=new tr(ur.buffer);var ar,ir,cr=function(r){return ur[0]=r,fr[or]};!0===X?(ar=1,ir=0):(ar=0,ir=1);var vr=d,yr={HIGH:ar,LOW:ir},lr=new T(1),pr=new vr(lr.buffer),Ar=yr.HIGH,wr=yr.LOW;var br=function(r,n){return pr[Ar]=r,pr[wr]=n,lr[0]},Ur=br,hr=Math.floor,sr=Number.POSITIVE_INFINITY,mr=Number.NEGATIVE_INFINITY;var Nr=function(r){return r!=r},dr=sr,Ir=mr;var Fr,Sr,gr=function(r){return r===dr||r===Ir};!0===X?(Fr=1,Sr=0):(Fr=0,Sr=1);var Hr=d,Or={HIGH:Fr,LOW:Sr},Er=new T(1),jr=new Hr(Er.buffer),Tr=Or.HIGH,Gr=Or.LOW;var Lr=function(r,n){return Er[0]=n,r[0]=jr[Tr],r[1]=jr[Gr],r};var Wr=function(r,n){return 1===arguments.length?Lr([0,0],r):Lr(r,n)},Mr=Wr,Pr=er,Vr=Ur,Yr=[0,0];var _r=function(r){return Math.abs(r)},kr=gr,xr=Nr,qr=_r;var zr=function(r,n){return xr(n)||kr(n)?(r[0]=n,r[1]=0,r):0!==n&&qr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Br=er;var Cr=function(r){var n=Br(r);return(n=(2146435072&n)>>>20)-1023|0},Dr=sr,Jr=mr,Kr=Nr,Qr=gr,Rr=function(r,n){var e,t;return Mr(Yr,r),e=Yr[0],e&=2147483647,t=Pr(n),Vr(e|=t&=2147483648,Yr[1])},Xr=function(r,n){return 1===arguments.length?zr([0,0],r):zr(r,n)},Zr=Cr,$r=Wr,rn=Ur,nn=[0,0],en=[0,0];var tn=function(r,n){var e,t;return 0===n||0===r||Kr(r)||Qr(r)?r:(Xr(nn,r),n+=nn[1],(n+=Zr(r=nn[0]))<-1074?Rr(0,r):n>1023?r<0?Jr:Dr:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,$r(en,r),e=en[0],e&=2148532223,t*rn(e|=n+1023<<20,en[1])))};var on=function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e};var un=hr,fn=tn,an=function(r){return on(0,r)},cn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=5.960464477539063e-8,ln=an(20),pn=an(20),An=an(20),wn=an(20);function bn(r,n,e,t,o,u,f,a,i){var c,v,y,l,p,A,w,b,U;for(l=u,U=t[e],b=e,p=0;b>0;p++)v=yn*U|0,wn[p]=U-16777216*v|0,U=t[b-1]+v,b-=1;if(U=fn(U,o),U-=8*un(.125*U),U-=w=0|U,y=0,o>0?(w+=p=wn[e-1]>>24-o,wn[e-1]-=p<<24-o,y=wn[e-1]>>23-o):0===o?y=wn[e-1]>>23:U>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<e;p++)b=wn[p],0===c?0!==b&&(c=1,wn[p]=16777216-b):wn[p]=16777215-b;if(o>0)switch(o){case 1:wn[e-1]&=8388607;break;case 2:wn[e-1]&=4194303}2===y&&(U=1-U,0!==c&&(U-=fn(1,o)))}if(0===U){for(b=0,p=e-1;p>=u;p--)b|=wn[p];if(0===b){for(A=1;0===wn[u-A];A++);for(p=e+1;p<=e+A;p++){for(i[a+p]=cn[f+p],v=0,b=0;b<=a;b++)v+=r[b]*i[a+(p-b)];t[p]=v}return bn(r,n,e+=A,t,o,u,f,a,i)}}if(0===U)for(e-=1,o-=24;0===wn[e];)e-=1,o-=24;else(U=fn(U,-o))>=16777216?(v=yn*U|0,wn[e]=U-16777216*v|0,o+=24,wn[e+=1]=v):wn[e]=0|U;for(v=fn(1,o),p=e;p>=0;p--)t[p]=v*wn[p],v*=yn;for(p=e;p>=0;p--){for(v=0,A=0;A<=l&&A<=e-p;A++)v+=vn[A]*t[p+A];An[e-p]=v}for(v=0,p=e;p>=0;p--)v+=An[p];for(n[0]=0===y?v:-v,v=An[0]-v,p=1;p<=e;p++)v+=An[p];return n[1]=0===y?v:-v,7&w}var Un=function(r,n,e,t){var o,u,f,a,i,c,v;for(4,(u=(e-3)/24|0)<0&&(u=0),a=e-24*(u+1),c=u-(f=t-1),v=f+4,i=0;i<=v;i++)ln[i]=c<0?0:cn[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=f;c++)o+=r[c]*ln[f+(i-c)];pn[i]=o}return 4,bn(r,n,4,pn,a,4,u,f,ln)},hn=Math.round,sn=er;var mn=er,Nn=cr,dn=Ur,In=Un,Fn=function(r,n,e){var t,o,u,f,a;return u=r-1.5707963267341256*(t=hn(.6366197723675814*r)),f=6077100506506192e-26*t,a=n>>20|0,e[0]=u-f,a-(sn(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((o=u)-(u=o-(f=6077100506303966e-26*t))-f),e[0]=u-f,a-(sn(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((o=u)-(u=o-(f=20222662487111665e-37*t))-f),e[0]=u-f)),e[1]=u-e[0]-f,t},Sn=1.5707963267341256,gn=6077100506506192e-26,Hn=2*gn,On=4*gn,En=[0,0,0],jn=[0,0];var Tn=function(r,n){var e,t,o,u,f,a,i;if((o=2147483647&mn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fn(r,o,n):o<=1073928572?r>0?(i=r-Sn,n[0]=i-gn,n[1]=i-n[0]-gn,1):(i=r+Sn,n[0]=i+gn,n[1]=i-n[0]+gn,-1):r>0?(i=r-2*Sn,n[0]=i-Hn,n[1]=i-n[0]-Hn,2):(i=r+2*Sn,n[0]=i+Hn,n[1]=i-n[0]+Hn,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fn(r,o,n):r>0?(i=r-3*Sn,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*Sn,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Fn(r,o,n):r>0?(i=r-4*Sn,n[0]=i-On,n[1]=i-n[0]-On,4):(i=r+4*Sn,n[0]=i+On,n[1]=i-n[0]+On,-4);if(o<1094263291)return Fn(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=Nn(r),i=dn(o-((t=(o>>20)-1046)<<20|0),e),f=0;f<2;f++)En[f]=0|i,i=16777216*(i-En[f]);for(En[2]=i,u=3;0===En[u-1];)u-=1;return a=In(En,jn,t,u),r<0?(n[0]=-jn[0],n[1]=-jn[1],-a):(n[0]=jn[0],n[1]=jn[1],a)},Gn=-.16666666666666632;var Ln=er,Wn=Tn,Mn=function(r,n,e){var t,o,u,f,a;return o=.00833333333332249+(a=n*n)*(27557313707070068e-22*a-.0001984126982985795)+a*(f=a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),u=a*n,r[0]=0===e?n+u*(Gn+a*o):n-(a*(.5*e-u*o)-e-u*Gn),o=a*(.0416666666666666+a*(2480158728947673e-20*a-.001388888888887411)),o+=f*f*(a*(2.087572321298175e-9+-11359647557788195e-27*a)-2.7557314351390663e-7),f=1-(t=.5*a),r[1]=f+(1-f-t+(a*o-n*e)),r},Pn=[0,0];var Vn=function(r,n){var e,t;if(e=Ln(n),(e&=2147483647)<=1072243195)return e<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Mn(r,n,0);if(e>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(t=Wn(n,Pn),Mn(r,Pn[0],Pn[1]),3&t){case 1:return e=r[1],r[1]=-r[0],r[0]=e,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return e=-r[1],r[1]=r[0],r[0]=e,r;default:return r}};var Yn=function(r,n){return 1===arguments.length?Vn([0,0],r):Vn(r,n)},_n=3.141592653589793;var kn=[0,0];function xn(r){var n,e,t,o,u,f,a;return(n=(e=_r(r))*e)<2.5625?t=e*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(r*(.018884331939670384+r*(r*(9504280628298596e-21+r*(0*r-4.9884311457357354e-8))-.0006451914356839651))-.20552590095501388),e=1+r*(.04121420907221998+r*(.0008680295429417843+r*(12226278902417902e-21+r*(1.2500186247959882e-7+r*(9.154392157746574e-10+399982968972496e-26*r)))))):(n=0+(r=1/r)*(r*(9504280628298596e-21+r*(r*(.018884331939670384+r*(1*r-.20552590095501388))-.0006451914356839651))-4.9884311457357354e-8),e=399982968972496e-26+r*(9.154392157746574e-10+r*(1.2500186247959882e-7+r*(12226278902417902e-21+r*(.0008680295429417843+r*(.04121420907221998+1*r)))))),n/e)}(f=n*n):e>36974?t=.5:(a=1/((f=_n*(n=e*e))*f),f=1/f,o=1-a*function(r){var n,e;return 0===r?2.999999999999634:((r<0?-r:r)<=1?(n=3.763297112699879e-20+r*(13428327623306275e-32+r*(17201074326816183e-29+r*(1.0230451416490724e-10+r*(3.055689837902576e-8+r*(46361374928786735e-22+r*(.000345017939782574+r*(.011522095507358577+r*(.1434079197807589+r*(.4215435550436775+0*r))))))))),e=1.2544323709001127e-20+r*(45200143407412973e-33+r*(5887545336215784e-29+r*(36014002958937136e-27+r*(1.1269922476399903e-8+r*(18462756734893055e-22+r*(.00015593440916415301+r*(.0064405152650885865+r*(.11688892585919138+r*(.7515863983533789+1*r)))))))))):(n=0+(r=1/r)*(.4215435550436775+r*(.1434079197807589+r*(.011522095507358577+r*(.000345017939782574+r*(46361374928786735e-22+r*(3.055689837902576e-8+r*(1.0230451416490724e-10+r*(17201074326816183e-29+r*(13428327623306275e-32+3.763297112699879e-20*r))))))))),e=1+r*(.7515863983533789+r*(.11688892585919138+r*(.0064405152650885865+r*(.00015593440916415301+r*(18462756734893055e-22+r*(1.1269922476399903e-8+r*(36014002958937136e-27+r*(5887545336215784e-29+r*(45200143407412973e-33+1.2544323709001127e-20*r)))))))))),n/e)}(a),u=f*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=18695871016278324e-38+r*(8363544356306774e-34+r*(1375554606332618e-30+r*(10826804113902088e-28+r*(4.4534441586175015e-10+r*(9.828524436884223e-8+r*(11513882611188428e-21+r*(.0006840793809153931+r*(.018764858409257526+r*(.1971028335255234+r*(.5044420736433832+0*r)))))))))),e=18695871016278324e-38+r*(8391588162831187e-34+r*(13879653125957886e-31+r*(11027321506624028e-28+r*(4.6068072814652043e-10+r*(1.0431458965757199e-7+r*(12754507566772912e-21+r*(.0008146791071843061+r*(.02536037414203388+r*(.33774898912002+r*(1.4749575992512833+1*r))))))))))):(n=0+(r=1/r)*(.5044420736433832+r*(.1971028335255234+r*(.018764858409257526+r*(.0006840793809153931+r*(11513882611188428e-21+r*(9.828524436884223e-8+r*(4.4534441586175015e-10+r*(10826804113902088e-28+r*(1375554606332618e-30+r*(8363544356306774e-34+18695871016278324e-38*r)))))))))),e=1+r*(1.4749575992512833+r*(.33774898912002+r*(.02536037414203388+r*(.0008146791071843061+r*(12754507566772912e-21+r*(1.0431458965757199e-7+r*(4.6068072814652043e-10+r*(11027321506624028e-28+r*(13879653125957886e-31+r*(8391588162831187e-34+18695871016278324e-38*r))))))))))),n/e)}(a),Yn(kn,f=1.5707963267948966*n),t=.5+(o*kn[0]-u*kn[1])/(f=_n*e)),r<0&&(t=-t),t}export{xn as default};
//# sourceMappingURL=mod.js.map
