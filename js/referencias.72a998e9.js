(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["referencias","chunk-515a8379"],{"0095":function(t,n,e){"use strict";e("95c5")},1276:function(t,n,e){"use strict";var r=e("d784"),i=e("44e7"),a=e("825a"),c=e("1d80"),l=e("4840"),o=e("8aa5"),s=e("50c4"),u=e("14c3"),f=e("9263"),d=e("d039"),p=[].push,g=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(t,n,e){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var r=String(c(this)),a=void 0===e?v:e>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return n.call(r,t,a);var l,o,s,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,d+"g");while(l=f.call(h,r)){if(o=h.lastIndex,o>g&&(u.push(r.slice(g,l.index)),l.length>1&&l.index<r.length&&p.apply(u,l.slice(1)),s=l[0].length,g=o,u.length>=a))break;h.lastIndex===l.index&&h.lastIndex++}return g===r.length?!s&&h.test("")||u.push(""):u.push(r.slice(g)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var i=c(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,e):r.call(String(i),n,e)},function(t,i){var c=e(r,t,this,i,r!==n);if(c.done)return c.value;var f=a(t),d=String(this),p=l(f,RegExp),x=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(h?"y":"g"),E=new p(h?f:"^(?:"+f.source+")",b),m=void 0===i?v:i>>>0;if(0===m)return[];if(0===d.length)return null===u(E,d)?[d]:[];var _=0,y=0,R=[];while(y<d.length){E.lastIndex=h?y:0;var C,I=u(E,h?d:d.slice(y));if(null===I||(C=g(s(E.lastIndex+(h?0:y)),d.length))===_)y=o(d,y,x);else{if(R.push(d.slice(_,y)),R.length===m)return R;for(var w=1;w<=I.length-1;w++)if(R.push(I[w]),R.length===m)return R;y=_=C}}return R.push(d.slice(_)),R}]}),!h)},"13aa":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid banner-interno"},[e("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),e("div",{staticClass:"container"},[e("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?e("div",{staticClass:"banner-interno__titulo__icono me-3"},[e("i",{class:t.icono})]):t._e(),e("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},i=[],a={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},c=a,l=(e("0095"),e("2877")),o=Object(l["a"])(c,r,i,!1,null,null,null);n["default"]=o.exports},"14c3":function(t,n,e){var r=e("c6b6"),i=e("9263");t.exports=function(t,n){var e=t.exec;if("function"===typeof e){var a=e.call(t,n);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},"3cb4":function(t,n,e){"use strict";e("ddc8")},"44e7":function(t,n,e){var r=e("861d"),i=e("c6b6"),a=e("b622"),c=a("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[c])?!!n:"RegExp"==i(t))}},"4e82":function(t,n,e){"use strict";var r=e("23e7"),i=e("1c0b"),a=e("7b0b"),c=e("d039"),l=e("a640"),o=[],s=o.sort,u=c((function(){o.sort(void 0)})),f=c((function(){o.sort(null)})),d=l("sort"),p=u||!f||!d;r({target:"Array",proto:!0,forced:p},{sort:function(t){return void 0===t?s.call(a(this)):s.call(a(this),i(t))}})},"64ef":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"curso-main-container referencias"},[e("BannerInterno",{attrs:{icono:"fas fa-book",titulo:"Referencias bibliográficas"}}),e("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return e("div",{key:n.link,staticClass:"referencias__item"},[e("span",{domProps:{innerHTML:t._s(n.referencia)}}),n.link?e("a",{staticClass:"ms-1",attrs:{href:n.link,target:"_blank"}},[e("span",{domProps:{innerHTML:t._s(n.link)}}),e("i",{staticClass:"ms-1 fas fa-external-link-alt"})]):t._e(),e("hr",{staticClass:"my-3"})])})),0)],1)},i=[],a=e("2909"),c=(e("4e82"),e("ac1f"),e("1276"),e("13aa")),l=e("ecc5"),o={name:"Referencias",components:{BannerInterno:c["default"]},mixins:[l["a"]],computed:{referenciasData:function(){return this.$config.referencias},orderedData:function(){var t=this,n=Object(a["a"])(this.referenciasData).sort((function(n,e){var r=t.quitarAcentos(n.referencia.split(" ")[0].toLowerCase()),i=t.quitarAcentos(e.referencia.split(" ")[0].toLowerCase());return r<i?-1:r>i?1:0}));return n}}},s=o,u=(e("3cb4"),e("2877")),f=Object(u["a"])(s,r,i,!1,null,null,null);n["default"]=f.exports},"8aa5":function(t,n,e){"use strict";var r=e("6547").charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},9263:function(t,n,e){"use strict";var r=e("ad6d"),i=e("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,o=function(){var t=/a/,n=/b*/g;return a.call(t,"a"),a.call(n,"a"),0!==t.lastIndex||0!==n.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=o||u||s;f&&(l=function(t){var n,e,i,l,f=this,d=s&&f.sticky,p=r.call(f),g=f.source,v=0,h=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),e=new RegExp("^(?:"+g+")",p)),u&&(e=new RegExp("^"+g+"$(?!\\s)",p)),o&&(n=f.lastIndex),i=a.call(d?e:f,h),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=f.lastIndex,f.lastIndex+=i[0].length):f.lastIndex=0:o&&i&&(f.lastIndex=f.global?i.index+i[0].length:n),u&&i&&i.length>1&&c.call(i[0],e,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),t.exports=l},"95c5":function(t,n,e){},"9f7f":function(t,n,e){"use strict";var r=e("d039");function i(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},ac1f:function(t,n,e){"use strict";var r=e("23e7"),i=e("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},d784:function(t,n,e){"use strict";e("ac1f");var r=e("6eeb"),i=e("d039"),a=e("b622"),c=e("9263"),l=e("9112"),o=a("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,f){var g=a(t),v=!i((function(){var n={};return n[g]=function(){return 7},7!=""[t](n)})),h=v&&!i((function(){var n=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[o]=function(){return e},e.flags="",e[g]=/./[g]),e.exec=function(){return n=!0,null},e[g](""),!n}));if(!v||!h||"replace"===t&&(!s||!u||d)||"split"===t&&!p){var x=/./[g],b=e(g,""[t],(function(t,n,e,r,i){return n.exec===c?v&&!i?{done:!0,value:x.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),E=b[0],m=b[1];r(String.prototype,t,E),r(RegExp.prototype,g,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}f&&l(RegExp.prototype[g],"sham",!0)}},ddc8:function(t,n,e){}}]);
//# sourceMappingURL=referencias.72a998e9.js.map