window.Modernizr=function(t,e,n){function i(t){p.cssText=t}function s(t,e){return typeof t===e}var o,a,r,c="2.6.2",l={},d=!0,u=e.documentElement,h="modernizr",f=e.createElement(h),p=f.style,g={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},_={},b=[],y=b.slice,x=function(t,n,i,s){var o,a,r,c,l=e.createElement("div"),d=e.body,f=d||e.createElement("body");if(parseInt(i,10))for(;i--;)r=e.createElement("div"),r.id=s?s[i]:h+(i+1),l.appendChild(r);return o=["&#173;",'<style id="s',h,'">',t,"</style>"].join(""),l.id=h,(d?l:f).innerHTML+=o,f.appendChild(l),d||(f.style.background="",f.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(f)),a=n(l,t),d?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),u.style.overflow=c),!!a},w=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return x("@media "+e+" { #"+h+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},C={}.hasOwnProperty;r=s(C,"undefined")||s(C.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(t,e){return C.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=y.call(arguments,1),i=function(){if(this instanceof i){var s=function(){};s.prototype=e.prototype;var o=new s,a=e.apply(o,n.concat(y.call(arguments)));return Object(a)===a?a:o}return e.apply(t,n.concat(y.call(arguments)))};return i}),_.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},_.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect},_.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==v.svg},_.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(g.call(e.createElementNS(v.svg,"clipPath")))};for(var F in _)r(_,F)&&(a=F.toLowerCase(),l[a]=_[F](),b.push((l[a]?"":"no-")+a));return l.addTest=function(t,e){if("object"==typeof t)for(var i in t)r(t,i)&&l.addTest(i,t[i]);else{if(t=t.toLowerCase(),l[t]!==n)return l;e="function"==typeof e?e():e,"undefined"!=typeof d&&d&&(u.className+=" "+(e?"":"no-")+t),l[t]=e}return l},i(""),f=o=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function s(t){var e=m[t[p]];return e||(e={},g++,t[p]=g,m[g]=e),e}function o(t,n,i){if(n||(n=e),d)return n.createElement(t);i||(i=s(n));var o;return o=i.cache[t]?i.cache[t].cloneNode():f.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),o.canHaveChildren&&!h.test(t)?i.frag.appendChild(o):o}function a(t,n){if(t||(t=e),d)return t.createDocumentFragment();n=n||s(t);for(var o=n.frag.cloneNode(),a=0,r=i(),c=r.length;c>a;a++)o.createElement(r[a]);return o}function r(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function c(t){t||(t=e);var i=s(t);return v.shivCSS&&!l&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),d||r(t,i),t}var l,d,u=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",l="hidden"in t,d=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){l=!0,d=!0}}();var v={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:u.shivCSS!==!1,supportsUnknownElements:d,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};t.html5=v,c(e)}(this,e),l._version=c,l._prefixes=m,l.mq=w,l.testStyles=x,u.className=u.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(d?" js "+b.join(" "):""),l}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==m.call(t)}function s(t){return"string"==typeof t}function o(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function r(){var t=v.shift();_=1,t?t.t?p(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),r()):_=0}function c(t,n,i,s,o,c,l){function d(e){if(!f&&a(u.readyState)&&(b.r=f=1,!_&&r(),u.onload=u.onreadystatechange=null,e)){"img"!=t&&p(function(){x.removeChild(u)},50);for(var i in T[n])T[n].hasOwnProperty(i)&&T[n][i].onload()}}var l=l||h.errorTimeout,u=e.createElement(t),f=0,m=0,b={t:i,s:n,e:o,a:c,x:l};1===T[n]&&(m=1,T[n]=[]),"object"==t?u.data=n:(u.src=n,u.type=t),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,m)},v.splice(s,0,b),"img"!=t&&(m||2===T[n]?(x.insertBefore(u,y?null:g),p(d,l)):T[n].push(u))}function l(t,e,n,i,o){return _=0,e=e||"j",s(t)?c("c"==e?C:w,t,e,this.i++,n,i,o):(v.splice(this.i++,0,t),1==v.length&&r()),this}function d(){var t=h;return t.loader={load:l,i:0},t}var u,h,f=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],_=0,b="MozAppearance"in f.style,y=b&&!!e.createRange().compareNode,x=y?f:g.parentNode,f=t.opera&&"[object Opera]"==m.call(t.opera),f=!!e.attachEvent&&!f,w=b?"object":f?"script":"img",C=f?"script":w,F=Array.isArray||function(t){return"[object Array]"==m.call(t)},k=[],T={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,n,i,t=t.split("!"),s=k.length,o=t.pop(),a=t.length,o={url:o,origUrl:o,prefixes:t};for(n=0;a>n;n++)i=t[n].split("="),(e=E[i.shift()])&&(o=e(o,i));for(n=0;s>n;n++)o=k[n](o);return o}function a(t,s,o,a,r){var c=e(t),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(s&&(s=i(s)?s:s[t]||s[a]||s[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,s,o,a,r):(T[c.url]?c.noexec=!0:T[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(s)||i(l))&&o.load(function(){d(),s&&s(c.origUrl,r,a),l&&l(c.origUrl,r,a),T[c.url]=2})))}function r(t,e){function n(t,n){if(t){if(s(t))n||(u=function(){var t=[].slice.call(arguments);h.apply(this,t),f()}),a(t,u,e,0,l);else if(Object(t)===t)for(c in r=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--r&&(i(u)?u=function(){var t=[].slice.call(arguments);h.apply(this,t),f()}:u[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),f()}}(h[c])),a(t[c],u,e,c,l))}else!n&&f()}var r,c,l=!!t.test,d=t.load||t.both,u=t.callback||o,h=u,f=t.complete||o;n(l?t.yep:t.nope,!!d),d&&n(d)}var c,l,u=this.yepnope.loader;if(s(t))a(t,0,u,0);else if(F(t))for(c=0;c<t.length;c++)l=t[c],s(l)?a(l,0,u,0):F(l)?h(l):Object(l)===l&&r(l,u);else Object(t)===t&&r(t,u)},h.addPrefix=function(t,e){E[t]=e},h.addFilter=function(t){k.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",u=function(){e.removeEventListener("DOMContentLoaded",u,0),e.readyState="complete"},0)),t.yepnope=d(),t.yepnope.executeStack=r,t.yepnope.injectJs=function(t,n,i,s,c,l){var d,u,f=e.createElement("script"),s=s||h.errorTimeout;f.src=t;for(u in i)f.setAttribute(u,i[u]);n=l?r:n||o,f.onreadystatechange=f.onload=function(){!d&&a(f.readyState)&&(d=1,n(),f.onload=f.onreadystatechange=null)},p(function(){d||(d=1,n(1))},s),c?f.onload():g.parentNode.insertBefore(f,g)},t.yepnope.injectCss=function(t,n,i,s,a,c){var l,s=e.createElement("link"),n=c?r:n||o;s.href=t,s.rel="stylesheet",s.type="text/css";for(l in i)s.setAttribute(l,i[l]);a||(g.parentNode.insertBefore(s,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});