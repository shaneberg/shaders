!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";var n=r(3),i=r(5),o=r(6),a=r(7);function s(e,t,r){var n=e;return i(t)?(r=t,"string"==typeof e&&(n={uri:e})):n=a(t,{uri:e}),n.callback=r,n}function u(e,t,r){return l(t=s(e,t,r))}function l(e){if(void 0===e.callback)throw new Error("callback argument missing");var t=!1,r=function(r,n,i){t||(t=!0,e.callback(r,n,i))};function n(){var e=void 0;if(e=h.response?h.response:h.responseText||function(e){try{if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;if(""===e.responseType&&!t)return e.responseXML}catch(e){}return null}(h),p)try{e=JSON.parse(e)}catch(e){}return e}function i(e){return clearTimeout(f),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,r(e,E)}function a(){if(!l){var t;clearTimeout(f),t=e.useXDR&&void 0===h.status?200:1223===h.status?204:h.status;var i=E,a=null;return 0!==t?(i={body:n(),statusCode:t,method:d,headers:{},url:c,rawRequest:h},h.getAllResponseHeaders&&(i.headers=o(h.getAllResponseHeaders()))):a=new Error("Internal XMLHttpRequest Error"),r(a,i,i.body)}}var s,l,h=e.xhr||null;h||(h=e.cors||e.useXDR?new u.XDomainRequest:new u.XMLHttpRequest);var f,c=h.url=e.uri||e.url,d=h.method=e.method||"GET",g=e.body||e.data,v=h.headers=e.headers||{},m=!!e.sync,p=!1,E={body:void 0,headers:{},statusCode:0,method:d,url:c,rawRequest:h};if("json"in e&&!1!==e.json&&(p=!0,v.accept||v.Accept||(v.Accept="application/json"),"GET"!==d&&"HEAD"!==d&&(v["content-type"]||v["Content-Type"]||(v["Content-Type"]="application/json"),g=JSON.stringify(!0===e.json?g:e.json))),h.onreadystatechange=function(){4===h.readyState&&setTimeout(a,0)},h.onload=a,h.onerror=i,h.onprogress=function(){},h.onabort=function(){l=!0},h.ontimeout=i,h.open(d,c,!m,e.username,e.password),m||(h.withCredentials=!!e.withCredentials),!m&&e.timeout>0&&(f=setTimeout((function(){if(!l){l=!0,h.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",i(e)}}),e.timeout)),h.setRequestHeader)for(s in v)v.hasOwnProperty(s)&&h.setRequestHeader(s,v[s]);else if(e.headers&&!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(h.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(h),h.send(g||null),h}e.exports=u,e.exports.default=u,u.XMLHttpRequest=n.XMLHttpRequest||function(){},u.XDomainRequest="withCredentials"in new u.XMLHttpRequest?u.XMLHttpRequest:n.XDomainRequest,function(e,t){for(var r=0;r<e.length;r++)t(e[r])}(["get","put","post","patch","head","delete"],(function(e){u["delete"===e?"del":e]=function(t,r,n){return(r=s(t,r,n)).method=e.toUpperCase(),l(r)}}))},function(e,t,r){"use strict";var n=h(r(2)),i=h(r(8)),o=h(r(9)),a=h(r(10)),s=h(r(11)),u=h(r(12)),l=h(r(13));function h(e){return e&&e.__esModule?e:{default:e}}var f=[{name:"Frame",program:h(r(14)).default},{name:"Polar HSB",program:l.default},{name:"HSB",program:u.default},{name:"Austrian Flag",program:s.default},{name:"Color Mix",program:a.default},{name:"Dev Pink",program:i.default},{name:"Sine Wave",program:o.default}],c=0,d=document.getElementById("glsl-canvas");d.width=window.innerWidth-24,d.height=window.innerHeight-24;var g=new n.default(d);g.load(f[0].program);var v=function(){c=(c+1)%f.length,g.load(f[c].program)};document.addEventListener("touchend",v),document.addEventListener("click",v)},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){var r,n;function i(r,n){try{var a=t[r](n),s=a.value;s instanceof e?Promise.resolve(s.value).then((function(e){i("next",e)}),(function(e){i("throw",e)})):o(a.done?"return":"normal",a.value)}catch(e){o("throw",e)}}function o(e,t){switch(e){case"return":r.resolve({value:t,done:!0});break;case"throw":r.reject(t);break;default:r.resolve({value:t,done:!1})}(r=r.next)?i(r.key,r.arg):n=null}this._invoke=function(e,t){return new Promise((function(o,a){var s={key:e,arg:t,resolve:o,reject:a,next:null};n?n=n.next=s:(r=n=s,i(e,t))}))},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},l="";function h(e,t,r){function n(t,n){var i,o;"function"==typeof r?r(t):(i=n,(o=e.parentNode)&&(o.innerHTML='\n<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>\n<td align="center">\n<div style="display: table-cell; vertical-align: middle;">\n<div style="">'+i+"</div>\n</div>\n</td></tr></table>\n"))}if(!window.WebGLRenderingContext)return n(1,'\n\tThis page requires a browser that supports WebGL.<br/>\n\t<a href="http://get.webgl.org">Click here to upgrade your browser.</a>\n'),null;var i=function(e,t){for(var r=["webgl","experimental-webgl"],n=null,i=0;i<r.length;++i)try{n=e.getContext(r[i],t)}catch(e){if(n)break}return n}(e,t);return i?i.getExtension("OES_standard_derivatives"):n(2,'\n\tIt does not appear your computer can support WebGL.<br/>\n\t<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>\n'),i}function f(e,t,r,n){var i=e.gl,o=i.createShader(r);return i.shaderSource(o,t),i.compileShader(o),i.getShaderParameter(o,i.COMPILE_STATUS)?o:(l=i.getShaderInfoLog(o),console.error("*** Error compiling shader "+o+":"+l),e.trigger("error",{shader:o,source:t,type:r,error:l,offset:n||0}),i.deleteShader(o),null)}function c(e,t,r,n){for(var i=e.gl,o=i.createProgram(),a=0;a<t.length;++a)i.attachShader(o,t[a]);if(r)for(var s=0;s<r.length;++s)i.bindAttribLocation(o,n?n[s]:s,r[s]);return i.linkProgram(o),i.getProgramParameter(o,i.LINK_STATUS)?o:(l=i.getProgramInfoLog(o),console.log("Error in program linking:"+l),i.deleteProgram(o),null)}function d(e){return 0==(e&e-1)}function g(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function v(e,t){return!(!e||!t)&&e.toString()!==t.toString()}function m(e){var t=new Set;return Object.assign(e,{on:function(e,r){var n={};n[e]=r,t.add(n)},off:function(e,r){if(r){var n={};n[e]=r,t.delete(n)}else{var i=!0,o=!1,a=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=s.value,h=!0,f=!1,c=void 0;try{for(var d,g=Object.keys(l)[Symbol.iterator]();!(h=(d=g.next()).done);h=!0){if(d.value===e)return void t.delete(l)}}catch(e){f=!0,c=e}finally{try{!h&&g.return&&g.return()}finally{if(f)throw c}}}}catch(e){o=!0,a=e}finally{try{!i&&u.return&&u.return()}finally{if(o)throw a}}}},listSubscriptions:function(){var e=!0,r=!1,n=void 0;try{for(var i,o=t[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;console.log(a)}}catch(e){r=!0,n=e}finally{try{!e&&o.return&&o.return()}finally{if(r)throw n}}},subscribe:function(e){t.add(e)},unsubscribe:function(e){t.delete(e)},unsubscribeAll:function(){t.clear()},trigger:function(e){for(var r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o=!0,a=!1,s=void 0;try{for(var l,h=t[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var f=l.value;"function"==typeof f[e]&&f[e].apply(f,u(n))}}catch(e){a=!0,s=e}finally{try{!o&&h.return&&h.return()}finally{if(a)throw s}}}})}var p=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a(this,e),m(this),this.gl=t,this.texture=t.createTexture(),this.texture&&(this.valid=!0),this.bind(),this.name=r,this.source=null,this.sourceType=null,this.loading=null,this.setData(1,1,new Uint8Array([0,0,0,255]),{filtering:"linear"}),this.setFiltering(n.filtering),this.load(n)}return s(e,[{key:"destroy",value:function(){this.valid&&(this.gl.deleteTexture(this.texture),this.texture=null,delete this.data,this.data=null,this.valid=!1)}},{key:"bind",value:function(t){this.valid&&("number"==typeof t&&e.activeUnit!==t&&(this.gl.activeTexture(this.gl.TEXTURE0+t),e.activeUnit=t),e.activeTexture!==this.texture&&(this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),e.activeTexture=this.texture))}},{key:"load",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=null,"string"==typeof e.url?void 0!==this.url&&e.url===this.url||this.setUrl(e.url,e):e.element?this.setElement(e.element,e):e.data&&e.width&&e.height&&this.setData(e.width,e.height,e.data,e)}},{key:"setUrl",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.valid)return this.url=e,this.source=this.url,this.sourceType="url",this.loading=new Promise((function(n,i){var o=e.split(".").pop().toLowerCase(),a="ogv"===o||"webm"===o||"mp4"===o,s=void 0;a?((s=document.createElement("video")).autoplay=!0,r.filtering="nearest"):s=new Image,s.onload=function(){try{t.setElement(s,r)}catch(e){console.log("Texture '"+t.name+"': failed to load url: '"+t.source+"'",e,r)}n(t)},s.onerror=function(e){console.log("Texture '"+t.name+"': failed to load url: '"+t.source+"'",e,r),n(t)},g()&&"data:"===t.source.slice(0,5)||(s.crossOrigin="anonymous"),s.src=t.source,a&&t.setElement(s,r)})),this.loading}},{key:"setData",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.width=e,this.height=t,this.source=r,this.sourceType="data",this.update(n),this.setFiltering(n),this.loading=Promise.resolve(this),this.loading}},{key:"setElement",value:function(e,t){var r=this,n=e;if("string"==typeof e&&(e=document.querySelector(e)),e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof HTMLVideoElement)this.source=e,this.sourceType="element",e instanceof HTMLVideoElement?(e.addEventListener("canplaythrough",(function(){r.intervalID=setInterval((function(){r.update(t)}),15)}),!0),e.addEventListener("ended",(function(){e.currentTime=0,e.play()}),!0)):this.update(t),this.setFiltering(t);else{var i="the 'element' parameter (`element: "+JSON.stringify(n)+"`) must be a CSS ";i+="selector string, or a <canvas>, <image> or <video> object",console.log("Texture '"+this.name+"': "+i,t)}return this.loading=Promise.resolve(this),this.loading}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.valid&&(this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1!==e.UNPACK_FLIP_Y_WEBGL),this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.UNPACK_PREMULTIPLY_ALPHA_WEBGL||!1),"element"===this.sourceType&&(this.source instanceof HTMLCanvasElement||this.source instanceof HTMLVideoElement||this.source instanceof HTMLImageElement&&this.source.complete)?(this.source instanceof HTMLVideoElement?(this.width=this.source.videoWidth,this.height=this.source.videoHeight):(this.width=this.source.width,this.height=this.source.height),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source)):"data"===this.sourceType&&this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.width,this.height,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.trigger("loaded",this))}},{key:"setFiltering",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.valid){this.powerOf2=d(this.width)&&d(this.height);var t=this.powerOf2?"mipmap":"linear";this.filtering=e.filtering||t;var r=this.gl;this.bind(),this.powerOf2?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.TEXTURE_WRAP_S||e.repeat&&r.REPEAT||r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.TEXTURE_WRAP_T||e.repeat&&r.REPEAT||r.CLAMP_TO_EDGE),"mipmap"===this.filtering?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.generateMipmap(r.TEXTURE_2D)):"linear"===this.filtering?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)):"nearest"===this.filtering&&(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST))):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),"mipmap"===this.filtering&&(this.filtering="linear"),"nearest"===this.filtering?(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST)):(r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)))}}}]),e}();p.getMaxTextureSize=function(e){return e.getParameter(e.MAX_TEXTURE_SIZE)},p.activeUnit=-1;var E=function(){function e(t,r,n){var o=this;a(this,e),m(this),r=r||{},n=n||{},this.width=t.clientWidth,this.height=t.clientHeight,this.canvas=t,this.gl=void 0,this.program=void 0,this.textures={},this.buffers={},this.uniforms={},this.vbo={},this.isValid=!1,this.BUFFER_COUNT=0,this.vertexString=r.vertexString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\n\nvarying vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position, 0.0, 1.0);\n    v_texcoord = a_texcoord;\n}\n",this.fragmentString=r.fragmentString||"\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec2 v_texcoord;\n\nvoid main(){\n    gl_FragColor = vec4(0.0);\n}\n";var s=h(t,r,n.onError);if(s){if(this.gl=s,this.timeLoad=this.timePrev=performance.now(),this.timeDelta=0,this.forceRender=!0,this.paused=!1,this.realToCSSPixels=window.devicePixelRatio||1,t.style.backgroundColor=r.backgroundColor||"rgba(1,1,1,0)",t.hasAttribute("data-fragment"))this.fragmentString=t.getAttribute("data-fragment");else if(t.hasAttribute("data-fragment-url")){var u=t.getAttribute("data-fragment-url");i.a.get(u,(function(e,t,r){o.load(r,o.vertexString)}))}if(t.hasAttribute("data-vertex"))this.vertexString=t.getAttribute("data-vertex");else if(t.hasAttribute("data-vertex-url")){var l=t.getAttribute("data-vertex-url");i.a.get(l,(function(e,t,r){o.load(o.fragmentString,r)}))}if(this.load(),this.program){var f=s.getAttribLocation(this.program,"a_texcoord");this.vbo.texCoords=s.createBuffer(),this.gl.bindBuffer(s.ARRAY_BUFFER,this.vbo.texCoords),this.gl.bufferData(s.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),s.STATIC_DRAW),this.gl.enableVertexAttribArray(f),this.gl.vertexAttribPointer(f,2,s.FLOAT,!1,0,0);var c=s.getAttribLocation(this.program,"a_position");if(this.vbo.vertices=s.createBuffer(),this.gl.bindBuffer(s.ARRAY_BUFFER,this.vbo.vertices),this.gl.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),s.STATIC_DRAW),this.gl.enableVertexAttribArray(c),this.gl.vertexAttribPointer(c,2,s.FLOAT,!1,0,0),t.hasAttribute("data-textures")){var d=t.getAttribute("data-textures").split(",");for(var g in d)this.setUniform("u_tex"+g,d[g])}var v={x:0,y:0};document.addEventListener("mousemove",(function(e){v.x=e.clientX||e.pageX,v.y=e.clientY||e.pageY}),!1);var p=this;return this.setMouse({x:0,y:0}),function e(){p.nMouse>1&&p.setMouse(v),p.resize()&&(p.forceRender=!0),p.render(),window.requestAnimationFrame(e)}(),this}}}return s(e,[{key:"destroy",value:function(){for(var e in this.animated=!1,this.isValid=!1,this.textures)e.destroy&&e.destroy();for(var t in this.textures={},this.attribs)this.gl.deleteBuffer(this.attribs[t]);for(var r in this.gl.useProgram(null),this.gl.deleteProgram(this.program),this.buffers){var n=this.buffers[r];this.gl.deleteProgram(n.program)}this.program=null,this.gl=null}},{key:"load",value:function(e,t){if(t&&(this.vertexString=t),e&&(this.fragmentString=e),this.animated=!1,this.nDelta=(this.fragmentString.match(/u_delta/g)||[]).length,this.nTime=(this.fragmentString.match(/u_time/g)||[]).length,this.nDate=(this.fragmentString.match(/u_date/g)||[]).length,this.nMouse=(this.fragmentString.match(/u_mouse/g)||[]).length,this.animated=this.nDate>1||this.nTime>1||this.nMouse>1,this.fragmentString.search(/sampler2D/g))for(var r=this.fragmentString.split("\n"),n=0;n<r.length;n++){var i=r[n].match(/uniform\s*sampler2D\s*([\w]*);\s*\/\/\s*([\w|\:\/\/|\.|\-|\_]*)/i);if(i){var o=i[2].split(".").pop().toLowerCase();i[1]&&i[2]&&("jpg"===o||"jpeg"===o||"png"===o||"ogv"===o||"webm"===o||"mp4"===o)&&this.setUniform(i[1],i[2])}if(r[n].match(/\s*void\s*main\s*/g))break}var a=f(this,this.vertexString,this.gl.VERTEX_SHADER),s=f(this,this.fragmentString,this.gl.FRAGMENT_SHADER);s?this.isValid=!0:(s=f(this,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",this.gl.FRAGMENT_SHADER),this.isValid=!1);var u=c(this,[a,s]);this.gl.useProgram(u),this.gl.deleteShader(a),this.gl.deleteShader(s),this.program=u,this.change=!0,this.BUFFER_COUNT=0;var l=this.getBuffers(this.fragmentString);Object.keys(l).length&&this.loadPrograms(l),this.buffers=l,this.texureIndex=this.BUFFER_COUNT,this.trigger("load",{}),this.forceRender=!0,this.render()}},{key:"test",value:function(e,t,r){var n=this.vertexString,i=this.fragmentString,o=this.paused,a=this.gl.getExtension("EXT_disjoint_timer_query"),s=a.createQueryEXT(),u=this.isValid;(t||r)&&(this.load(t,r),u=this.isValid,this.forceRender=!0,this.render()),this.paused=!0,a.beginQueryEXT(a.TIME_ELAPSED_EXT,s),this.forceRender=!0,this.render(),a.endQueryEXT(a.TIME_ELAPSED_EXT);var l=this;!function h(){l.forceRender=!0,l.render();var f=a.getQueryObjectEXT(s,a.QUERY_RESULT_AVAILABLE_EXT),c=l.gl.getParameter(a.GPU_DISJOINT_EXT);if(f&&!c){var d={wasValid:u,frag:t||l.fragmentString,vert:r||l.vertexString,timeElapsedMs:a.getQueryObjectEXT(s,a.QUERY_RESULT_EXT)/1e6};l.paused=o,(t||r)&&l.load(i,n),e(d)}else window.requestAnimationFrame(h)}()}},{key:"loadTexture",value:function(e,t,r){var n=this;r||(r={}),"string"==typeof t?r.url=t:"object"===(void 0===t?"undefined":o(t))&&t.data&&t.width&&t.height?(r.data=t.data,r.width=t.width,r.height=t.height):"object"===(void 0===t?"undefined":o(t))&&(r.element=t),this.textures[e]?this.textures[e]&&(this.textures[e].load(r),this.textures[e].on("loaded",(function(e){n.forceRender=!0}))):(this.textures[e]=new p(this.gl,e,r),this.textures[e].on("loaded",(function(e){n.forceRender=!0})))}},{key:"refreshUniforms",value:function(){this.uniforms={}}},{key:"setUniform",value:function(e){for(var t={},r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];t[e]=n,this.setUniforms(t)}},{key:"setUniforms",value:function(e){var t=function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];for(var i in t){var a=t[i],s=void 0;if(r&&(i=r+"."+i),"number"==typeof a)n.push({type:"float",method:"1f",name:i,value:a});else if(Array.isArray(a)){if("number"==typeof a[0])1===a.length?n.push({type:"float",method:"1f",name:i,value:a}):a.length>=2&&a.length<=4?n.push({type:"vec"+a.length,method:a.length+"fv",name:i,value:a}):a.length>4&&n.push({type:"float[]",method:"1fv",name:i+"[0]",value:a});else if("string"==typeof a[0])n.push({type:"sampler2D",method:"1i",name:i,value:a});else if(Array.isArray(a[0])&&"number"==typeof a[0][0]){if(a[0].length>=2&&a[0].length<=4)for(s=0;s<a.length;s++)n.push({type:"vec"+a[0].length,method:a[s].length+"fv",name:i+"["+s+"]",value:a[s]})}else if("object"===o(a[0]))for(s=0;s<a.length;s++)n.push.apply(n,u(e(a[s],i+"["+s+"]")))}else"boolean"==typeof a?n.push({type:"bool",method:"1i",name:i,value:a}):"string"==typeof a?n.push({type:"sampler2D",method:"1i",name:i,value:a}):"object"===(void 0===a?"undefined":o(a))&&n.push.apply(n,u(e(a,i)))}return n}(e);for(var r in t)"sampler2D"===t[r].type?this.loadTexture(t[r].name,t[r].value[0]):this.uniform(t[r].method,t[r].type,t[r].name,t[r].value);this.forceRender=!0}},{key:"setMouse",value:function(e){var t=this.canvas.getBoundingClientRect();if(e&&e.x&&e.x>=t.left&&e.x<=t.right&&e.y&&e.y>=t.top&&e.y<=t.bottom){var r=(e.x-t.left)*this.realToCSSPixels,n=this.canvas.height-(e.y-t.top)*this.realToCSSPixels;this.uniform("2f","vec2","u_mouse",r,n)}}},{key:"uniform",value:function(e,t,r){this.uniforms[r]=this.uniforms[r]||{};for(var n=this.uniforms[r],i=arguments.length,o=Array(i>3?i-3:0),a=3;a<i;a++)o[a-3]=arguments[a];var s=v(n.value,o);if(s||this.change||!n.location||!n.value)for(var u in n.name=r,n.type=t,n.value=o,n.method="uniform"+e,this.gl.useProgram(this.program),n.location=this.gl.getUniformLocation(this.program,r),this.gl[n.method].apply(this.gl,[n.location].concat(n.value)),this.buffers){var l=this.buffers[u];this.gl.useProgram(l.program);var h=this.gl.getUniformLocation(l.program,r);this.gl[n.method].apply(this.gl,[h].concat(n.value))}}},{key:"uniformTexture",value:function(e,t,r){if(void 0===this.textures[e])this.loadTexture(e,t,r);else{for(var n in this.uniform("1i","sampler2D",e,this.texureIndex),this.buffers){var i=this.buffers[n];this.gl.useProgram(i.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture)}this.gl.useProgram(this.program),this.gl.activeTexture(this.gl.TEXTURE0+this.texureIndex),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[e].texture),this.uniform("2f","vec2",e+"Resolution",this.textures[e].width,this.textures[e].height)}}},{key:"resize",value:function(){if(this.width!==this.canvas.clientWidth||this.height!==this.canvas.clientHeight){this.realToCSSPixels=window.devicePixelRatio||1;var e=Math.floor(this.gl.canvas.clientWidth*this.realToCSSPixels),t=Math.floor(this.gl.canvas.clientHeight*this.realToCSSPixels);return this.gl.canvas.width===e&&this.gl.canvas.height===t||(this.gl.canvas.width=e,this.gl.canvas.height=t,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height)),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.resizeSwappableBuffers(),!0}return!1}},{key:"render",value:function(){var e;if(this.visible=(e=this.canvas).getBoundingClientRect().top+e.height>0&&e.getBoundingClientRect().top<(window.innerHeight||document.documentElement.clientHeight),this.forceRender||this.change||this.animated&&this.visible&&!this.paused){var t=new Date,r=performance.now();for(var n in this.timeDelta=(r-this.timePrev)/1e3,this.timePrev=r,this.nDelta>1&&this.uniform("1f","float","u_delta",this.timeDelta),this.nTime>1&&this.uniform("1f","float","u_time",(r-this.timeLoad)/1e3),this.nDate&&this.uniform("4f","float","u_date",t.getFullYear(),t.getMonth(),t.getDate(),3600*t.getHours()+60*t.getMinutes()+t.getSeconds()+.001*t.getMilliseconds()),this.uniform("2f","vec2","u_resolution",this.canvas.width,this.canvas.height),this.buffers){var i=this.buffers[n];this.uniform("1i","sampler2D",i.name,i.bundle.input.index)}for(var o in this.texureIndex=this.BUFFER_COUNT,this.textures)this.uniformTexture(o),this.texureIndex++;this.renderPrograms(),this.trigger("render",{}),this.change=!1,this.forceRender=!1}}},{key:"pause",value:function(){this.paused=!0}},{key:"play",value:function(){this.paused=!1}},{key:"renderPrograms",value:function(){var e=this.gl,t=e.canvas.width,r=e.canvas.height;for(var n in e.viewport(0,0,t,r),this.buffers){var i=this.buffers[n];i.bundle.render(t,r,i.program,i.name),e.bindFramebuffer(e.FRAMEBUFFER,null)}e.useProgram(this.program),e.drawArrays(e.TRIANGLES,0,6)}},{key:"getBuffers",value:function(e){var t={};return e&&e.replace(/(?:^\s*)((?:#if|#elif)(?:\s*)(defined\s*\(\s*BUFFER_)(\d+)(?:\s*\))|(?:#ifdef)(?:\s*BUFFER_)(\d+)(?:\s*))/gm,(function(){var r=arguments[3]||arguments[4];t["u_buffer"+r]={fragment:"#define BUFFER_"+r+"\n"+e}})),t}},{key:"loadPrograms",value:function(e){var t=this.gl,r=f(this,this.vertexString,t.VERTEX_SHADER);for(var n in e){var i=e[n],o=f(this,i.fragment,t.FRAGMENT_SHADER,1);o?this.isValid=!0:(o=f(this,"void main(){\n\tgl_FragColor = vec4(1.0);\n}",t.FRAGMENT_SHADER),this.isValid=!1);var a=c(this,[r,o]);i.name=n,i.program=a,i.bundle=this.createSwappableBuffer(this.canvas.width,this.canvas.height,a),t.deleteShader(o)}t.deleteShader(r)}},{key:"createSwappableBuffer",value:function(e,t,r){var n=this.createBuffer(e,t,r),i=this.createBuffer(e,t,r),o=this.gl;return{input:n,output:i,swap:function(){var e=n;n=i,i=e,this.input=n,this.output=i},render:function(e,t,r,n){o.useProgram(r),o.viewport(0,0,e,t),o.bindFramebuffer(o.FRAMEBUFFER,this.input.buffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,this.output.texture,0),o.drawArrays(o.TRIANGLES,0,6),this.swap()},resize:function(e,t,r,n){o.useProgram(r),o.viewport(0,0,e,t),this.input.resize(e,t),this.output.resize(e,t)}}}},{key:"createBuffer",value:function(e,t,r){var n=this.gl,i=this.BUFFER_COUNT;this.BUFFER_COUNT+=2,n.getExtension("OES_texture_float");var o=n.createTexture();n.activeTexture(n.TEXTURE0+i),n.bindTexture(n.TEXTURE_2D,o),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);var a=n.createFramebuffer();return{index:i,texture:o,buffer:a,W:e,H:t,resize:function(e,t){n.bindFramebuffer(n.FRAMEBUFFER,a);var r=Math.min(e,this.W),s=Math.min(t,this.H),u=new Float32Array(r*s*4);n.readPixels(0,0,r,s,n.RGBA,n.FLOAT,u),n.bindFramebuffer(n.FRAMEBUFFER,null);var l=i+1,h=n.createTexture();n.activeTexture(n.TEXTURE0+l),n.bindTexture(n.TEXTURE_2D,h),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,e,t,0,n.RGBA,n.FLOAT,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texSubImage2D(n.TEXTURE_2D,0,0,0,r,s,n.RGBA,n.FLOAT,u);var f=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(o),n.activeTexture(n.TEXTURE0+i),n.bindTexture(n.TEXTURE_2D,h),i=this.index=i,o=this.texture=h,a=this.buffer=f,this.W=e,this.H=t}}}},{key:"resizeSwappableBuffers",value:function(){var e=this.gl,t=e.canvas.width,r=e.canvas.height;for(var n in e.viewport(0,0,t,r),this.buffers){var i=this.buffers[n];i.bundle.resize(t,r,i.program,i.name)}e.useProgram(this.program)}},{key:"version",value:function(){return"0.1.7"}}]),e}();window.addEventListener("load",(function(){!function(){var e=document.getElementsByClassName("glslCanvas");if(e.length>0){window.glslCanvases=[];for(var t=0;t<e.length;t++){var r=new E(e[t]);r.isValid&&window.glslCanvases.push(r)}}}()})),t.default=E},function(e,t,r){(function(t){var r;r="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=r}).call(this,r(4))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){var t=r.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)};var r=Object.prototype.toString},function(e,t){var r=function(e){return e.replace(/^\s+|\s+$/g,"")};e.exports=function(e){if(!e)return{};for(var t,n={},i=r(e).split("\n"),o=0;o<i.length;o++){var a=i[o],s=a.indexOf(":"),u=r(a.slice(0,s)).toLowerCase(),l=r(a.slice(s+1));void 0===n[u]?n[u]=l:(t=n[u],"[object Array]"===Object.prototype.toString.call(t)?n[u].push(l):n[u]=[n[u],l])}return n}},function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var i in n)r.call(n,i)&&(e[i]=n[i])}return e};var r=Object.prototype.hasOwnProperty},function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_time;       // Time in seconds since load\n\nuniform vec3 colorA;\nuniform vec3 colorB;\n\nvoid main() {\n    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n}\n"},function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define PI 3.14159265359\n\nuniform float u_time;       // Time in seconds since load\nuniform vec2 u_resolution;\n\nfloat plot(vec2 st, float t){\n    return smoothstep(t-0.02, t, st.y) - smoothstep(t, t+0.02, st.y);\n}\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    float y = 0.7 + 0.5 * sin(PI * st.x + u_time);\n    vec3 color = vec3(y);\n    float t = plot(st, y);\n    color = (1.0-t)*color+t*vec3(0.0,1.0,0.0);\n    gl_FragColor = vec4(color, 1.0);\n}\n\n"},function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_time;       // Time in seconds since load\nuniform vec2 u_resolution;  // Coordinates being rendered\n\nvoid main() {\n\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    vec3 shadeColor = vec3(0.2, 0.2, 0.7);\n    vec3 pctHorizontal = vec3(st.x);\n\n    vec3 color = vec3(cos(u_time), sin(u_time * 0.5), cos(u_time * 2.0));\n    vec3 shaded = mix(color, shadeColor, pctHorizontal);\n\n    gl_FragColor = vec4(shaded.rgb, 1.0);\n}\n"},function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;  // Coordinates being rendered\n\nvoid main() {\n\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n\n    vec3 red = vec3(1.0, 0.0, 0.0);\n    vec3 white = vec3(1.0, 1.0, 1.0);\n\n    float pct = step(0.3333, st.y) - step(0.6667, st.y);\n\n    vec3 color = mix(red, white, pct);\n\n    gl_FragColor = vec4(color.rgb, 1.0);\n}\n"},function(e,t){e.exports="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_time;       // Time in seconds since load\nuniform vec2 u_resolution;  // Coordinates being rendered\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nvoid main(){\n    vec2 st = gl_FragCoord.xy/u_resolution;\n\n    float adjustedX = st.x + (u_time * 0.15);\n    float adjustedY = st.y + (u_time * 0.10);\n    // We map x (0.0 - 1.0) to the hue (0.0 - 1.0)\n    // And the y (0.0 - 1.0) to the brightness\n    vec3 color = hsb2rgb(vec3(adjustedX,1.0,adjustedY));\n\n    gl_FragColor = vec4(color,1.0);\n}\n"},function(e,t){e.exports="// https://thebookofshaders.com/06/\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_time;       // Time in seconds since load\nuniform vec2 u_resolution;  // Coordinates being rendered\n\n#define TWO_PI 6.28318530718\n\n//  Function from Iñigo Quiles\n//  https://www.shadertoy.com/view/MsS3Wc\nvec3 hsb2rgb( in vec3 c ){\n    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0, 0.0, 1.0 );\n    rgb = rgb*rgb*(3.0-2.0*rgb);\n    return c.z * mix(vec3(1.0), rgb, c.y);\n}\n\nvoid main(){\n    vec2 st = gl_FragCoord.xy/u_resolution;\n\n    // Use polar coordinates instead of cartesian\n    vec2 toCenter = vec2(0.5)-st;\n    float angle = atan(toCenter.y * u_time * 0.05,toCenter.x);\n    float radius = length(toCenter)*2.0;\n\n    // Map the angle (-PI to PI) to the Hue (from 0 to 1)\n    // and the Saturation to the radius\n    vec3 color = hsb2rgb(vec3((angle/TWO_PI)+0.5,radius,1.0));\n\n    gl_FragColor = vec4(color,1.0);\n}\n"},function(e,t){e.exports="// https://thebookofshaders.com/07/\n#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float u_time;       // Time in seconds since load\nuniform vec2 u_resolution;  // Coordinates being rendered\n\n\nvoid main(){\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    vec3 color = vec3(0.3, 0.1, 0.1);\n    vec3 frame = vec3(0.5); // gray\n\n    vec2 bl = step(vec2(0.01),st);\n    vec2 tr = step(vec2(0.01),1.0-st);\n    float pct = bl.x * bl.y * tr.x * tr.y; // when this is non-zero, the current pixel belongs to the frame.\n\n    // mix in the target color if we are within the frame (pct <= 0)\n    color = mix(frame, color, pct);\n\n    gl_FragColor = vec4(color,1.0);\n}\n"}]);