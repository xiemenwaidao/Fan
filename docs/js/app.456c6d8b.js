(function(t){function i(i){for(var e,n,a=i[0],h=i[1],u=i[2],c=0,p=[];c<a.length;c++)n=a[c],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(e in h)Object.prototype.hasOwnProperty.call(h,e)&&(t[e]=h[e]);l&&l(i);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,i=0;i<r.length;i++){for(var s=r[i],e=!0,a=1;a<s.length;a++){var h=s[a];0!==o[h]&&(e=!1)}e&&(r.splice(i--,1),t=n(n.s=s[0]))}return t}var e={},o={app:0},r=[];function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,i,s){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)n.d(s,e,function(i){return t[i]}.bind(null,e));return s},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],h=a.push.bind(a);a.push=i,a=a.slice();for(var u=0;u<a.length;u++)i(a[u]);var l=h;r.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"034f":function(t,i,s){"use strict";s("85ec")},"56d7":function(t,i,s){"use strict";s.r(i);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("Fan")],1)},r=[],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"webgl"}},[s("div",{staticClass:"nav"},[s("ul",[s("li",{on:{click:function(i){return t.cEvent(2)}}},[t._v("Normal")]),s("li",{on:{click:function(i){return t.cEvent(3)}}},[t._v("Ota")])])]),s("canvas",{ref:"canvas",attrs:{id:"webgl_canvas"}}),s("img",{staticStyle:{display:"none"},attrs:{id:"ota-img",src:"img/otaku_otagei.png"}})])},a=[],h=s("d4ec"),u=s("bee2"),l=s("5a89"),c=function(){function t(){Object(h["a"])(this,t),this.scene=null,this.camera=null,this.spotLight=null,this.renderer=null,this.size={windowW:null,windowH:null},this.clock=null,this.time={total:null,delta:null},this.stats=null}return Object(u["a"])(t,[{key:"init",value:function(t){this.setSize(),this.scene=new l["h"],this.camera=new l["f"](45,this.size.windowW/this.size.windowH,.1,1e3),this.camera.position.set(0,5,-400),this.camera.lookAt(this.scene.position),this.renderer=new l["l"]({canvas:t}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(0),this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.size.windowW,this.size.windowH),this.clock=new l["b"],this.clock.start()}},{key:"setSize",value:function(){this.size={windowW:window.innerWidth,windowH:window.innerHeight}}},{key:"resize",value:function(){this.setSize(),this.camera.aspect=this.size.windowW/this.size.windowH,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.size.windowW,this.size.windowH)}},{key:"render",value:function(){this.time.delta=this.clock.getDelta(),this.time.total+=this.time.delta,this.renderer.render(this.scene,this.camera)}}]),t}(),p=new c,d="attribute vec4 color;\r\n// attribute vec4 otaColor1;\r\n// attribute vec4 otaColor2;\r\n// attribute vec4 otaColor3;\r\n// attribute vec4 otaColor4;\r\n// attribute vec4 otaColor5;\r\nvarying vec4 vColor;\r\nvarying vec3 pos;\r\n\r\nuniform float radius1;\r\n\r\nuniform float time;\r\nvarying float t;\r\n\r\nvoid main() {\r\n  // vColor = otaColor1 * radius1.r + otaColor2 * radius1.g + otaColor3 * radius1.b + otaColor4 * radius1.a + otaColor1 * radius2.a;\r\n  vColor = vec4(color.r, color.g, color.b, color.a);\r\n  t = time;\r\n  pos = vec3(position.x * clamp(tan(sin(t * 0.1) * 5.0), -5.0, 5.0), position.y * cos(t * 0.3), abs(position.y * 0.05));\r\n  // pos = vec3(position.x * sin(tan(t * 0.1) * 5.0), position.y * cos(t * 0.3), abs(position.y * 0.05));\r\n  gl_PointSize = 3.0; // 2.5 3.3\r\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.x, pos.y, pos.z, 1.0);\r\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r\n}",m="precision mediump float;\r\nvarying vec4 vColor;\r\nvarying vec3 pos;\r\nvarying float t;\r\nuniform float radius1;\r\n\r\nvoid main() {\r\n  float sTime = sin(pos.y * 0.1 + radius1);\r\n  float cTime = cos(pos.y * 0.2 + t);\r\n  float tTime = tan(pos.z * 0.2 + t);\r\n  gl_FragColor = vec4(sTime, tTime, cTime, 1.0);\r\n  // gl_FragColor = vec4(vColor.r * sin(pos.x + t), vColor.g * cos(pos.y + t), vColor.b * sin(t), vColor.a);\r\n  // gl_FragColor = vec4(vColor);\r\n}",g=function(){function t(){Object(h["a"])(this,t),this.url="/img/otaku_otagei.png",this.positions=[],this.colors=[],this.texture=null,this.imgCtx=null,this.imgWidth=150,this.imgHeight=117,this.imgData=null,this.uniforms=null,this.loadOK=!1,this.color1=[],this.color2=[],this.color3=[],this.color4=[],this.color5=[]}return Object(u["a"])(t,[{key:"init",value:function(){var t=document.createElement("canvas");t.width=this.imgWidth,t.height=this.imgHeight,this.imgCtx=t.getContext("2d"),this.imgCtx.drawImage(this.texture,0,0),this.imgData=this.imgCtx.getImageData(0,0,this.imgWidth,this.imgHeight).data;for(var i=0;i<this.imgHeight;i++)for(var s=0;s<this.imgWidth;s++){var e=4*(i*this.imgWidth+s),o=4*(i*this.imgWidth+s)+1,r=4*(i*this.imgWidth+s)+2,n=4*(i*this.imgWidth+s)+3;this.colors.push(this.imgData[e]),this.colors.push(this.imgData[o]),this.colors.push(this.imgData[r]),this.colors.push(this.imgData[n]);var a=s-this.imgWidth/2,h=-i+this.imgHeight/2,u=0;this.positions.push(a),this.positions.push(h),this.positions.push(u)}}},{key:"loadTexture",value:function(){this.texture=document.getElementById("ota-img"),this.loadOK=!0,this.init()}},{key:"setMesh",value:function(){this.geometry=new l["a"],this.positionAttrib=new l["d"](this.positions,3),this.colorAttrib=new l["j"](this.colors,4),this.colorAttrib.normalized=!0,this.geometry.setAttribute("position",this.positionAttrib),this.geometry.setAttribute("color",this.colorAttrib),this.uniforms={time:{value:p.time.total}},this.material=new l["i"]({uniforms:this.uniforms,vertexShader:d,fragmentShader:m,side:l["c"]}),this.mesh=new l["g"](this.geometry,this.material),p.scene.add(this.mesh)}},{key:"update",value:function(){this.uniforms.time.value=.001*p.clock.oldTime}},{key:"fenbieColors",value:function(t,i,s,e,o){0<=t&&t<30&&(this.color1.push(this.imgData[i]),this.color1.push(this.imgData[s]),this.color1.push(this.imgData[e]),this.color1.push(this.imgData[o])),30<=t&&t<60&&(this.color2.push(this.imgData[i]),this.color2.push(this.imgData[s]),this.color2.push(this.imgData[e]),this.color2.push(this.imgData[o])),60<=t&&t<90&&(this.color3.push(this.imgData[i]),this.color3.push(this.imgData[s]),this.color3.push(this.imgData[e]),this.color3.push(this.imgData[o])),90<=t&&t<120&&(this.color4.push(this.imgData[i]),this.color4.push(this.imgData[s]),this.color4.push(this.imgData[e]),this.color4.push(this.imgData[o])),120<=t&&t<150&&(this.color5.push(this.imgData[i]),this.color5.push(this.imgData[s]),this.color5.push(this.imgData[e]),this.color5.push(this.imgData[o]))}}]),t}(),f=function(){function t(){Object(h["a"])(this,t),this.geometry=null,this.material=null,this.positions=[],this.colors=[],this.otaPosi=[],this.otaCol=[],this.sizeX=30,this.sizeY=117,this.parentGroup=new l["e"],this.group1=new l["e"],this.group2=new l["e"],this.group3=new l["e"],this.uniforms=null,this.check=2,this.type=null,this.radius=new l["k"](0,0,0,0),this.updateOk=!1}return Object(u["a"])(t,[{key:"init",value:function(){this.setData(),this.ota=new g,this.ota.loadTexture(),this.otaPosi=this.ota.positions,this.otaCol=this.ota.colors,this.setMeshObj()}},{key:"setData",value:function(){this.size=this.sizeX*this.sizeY;for(var t=0;t<this.size;t++){var i=t%this.sizeX-this.sizeX/2,s=Math.floor(t/this.sizeX)-this.sizeY/2,e=0;this.positions.push(i),this.positions.push(s),this.positions.push(e),this.colors.push(255*Math.random()),this.colors.push(255*Math.random()),this.colors.push(255*Math.random()),this.colors.push(255)}}},{key:"update",value:function(){switch(this.check){case 1:break;case 2:this.group1.rotation.z+=Math.PI/12,this.group2.rotation.z+=Math.PI/12,this.group3.rotation.z+=Math.PI/12,this.parentGroup.rotation.y=Math.sin(p.clock.oldTime/1e3)*Math.PI/3;break;case 3:this.group1.rotation.z+=Math.PI/10,this.group2.rotation.z+=Math.PI/12,this.group3.rotation.z+=Math.PI/14,this.parentGroup.rotation.y=Math.sin(p.clock.oldTime/1e3)*Math.PI/3;break;default:break}this.uniforms.time.value=p.time.total,this.uniforms.time.value=.001*p.clock.oldTime,this.uniforms.radius1.value=this.group1.rotation.z%Math.PI}},{key:"clickEvent",value:function(t){this.check=t,console.log(this.group1.rotation.z%Math.PI),2===this.check&&(this.group1.rotation.z=0,this.group2.rotation.z=2*Math.PI/3*1,this.group3.rotation.z=2*Math.PI/3*2)}},{key:"setMeshObj",value:function(){this.geometry=new l["a"],this.posAttrib=new l["d"](this.positions,3),this.colAttrib=new l["j"](this.colors,4),this.colAttrib.normalized=!0,this.geometry.setAttribute("position",this.posAttrib),this.geometry.setAttribute("color",this.colAttrib),this.uniforms={time:{value:p.time.total},radius1:{value:0}},this.material=new l["i"]({uniforms:this.uniforms,vertexShader:d,fragmentShader:m,side:l["c"]});for(var t=0;t<3;t++)switch(this.points=new l["g"](this.geometry,this.material),this.points.position.set(0,55,-50),t){case 0:this.group1.add(this.points);break;case 1:this.group2.add(this.points),this.group2.rotation.z=2*Math.PI/3*1;break;case 2:this.group3.add(this.points),this.group3.rotation.z=2*Math.PI/3*2;break;default:break}this.parentGroup.add(this.group1),this.parentGroup.add(this.group2),this.parentGroup.add(this.group3),p.scene.add(this.parentGroup)}},{key:"judgeRadius",value:function(){var t=this.group1.rotation.z%Math.PI,i=5*Math.PI/6;0<=t&&t<1/i&&(this.uniforms.radius1.value=new l["k"](1,0,0,0),this.uniforms.radius2.value=new l["k"](0,0,0,0)),1/i<=t&&t<2/i&&(this.uniforms.radius1.value=new l["k"](0,1,0,0),this.uniforms.radius2.value=new l["k"](0,0,0,0)),2/i<=t&&t<3/i&&(this.uniforms.radius1.value=new l["k"](0,0,1,0),this.uniforms.radius2.value=new l["k"](0,0,0,0)),3/i<=t&&t<4/i&&(this.uniforms.radius1.value=new l["k"](0,0,0,1),this.uniforms.radius2.value=new l["k"](0,0,0,0)),4/i<=t&&t<i&&(this.uniforms.radius1.value=new l["k"](0,0,0,0),this.uniforms.radius2.value=new l["k"](1,0,0,0))}}]),t}(),v=s("ef20"),w=function(){function t(){Object(h["a"])(this,t),this.stats=null}return Object(u["a"])(t,[{key:"init",value:function(){this.stats=new v["a"],document.body.appendChild(this.stats.dom)}},{key:"updateBegin",value:function(){this.stats.begin()}},{key:"updateEnd",value:function(){this.stats.end()}}]),t}(),b=function(){function t(i){Object(h["a"])(this,t),this.props=i,this.stats=new w,this.init()}return Object(u["a"])(t,[{key:"init",value:function(){var t=this,i=document.getElementById("ota-img");i.originSrc=i.src,i.src="",i.addEventListener("load",(function(){p.init(t.props.$canvas),t.propeller=new f,t.propeller.init(),window.addEventListener("resize",t.resize.bind(t)),t.stats.init(),t.loop()})),i.src=i.originSrc}},{key:"resize",value:function(){p.resize()}},{key:"loop",value:function(){this.stats.updateBegin(),this.render(),this.stats.updateEnd(),requestAnimationFrame(this.loop.bind(this))}},{key:"render",value:function(){p.render(),this.propeller.update()}},{key:"clickEvent",value:function(t){this.propeller.clickEvent(t)}}]),t}(),y={data:function(){return{}},mounted:function(){this.MyGL||(this.MyGL=new b({$canvas:this.$refs.canvas}))},methods:{cEvent:function(t){this.MyGL.clickEvent(t)}}},k=y,z=(s("c0b1"),s("2877")),M=Object(z["a"])(k,n,a,!1,null,"48e63272",null),C=M.exports,x={name:"App",components:{Fan:C}},P=x,D=(s("034f"),Object(z["a"])(P,o,r,!1,null,null,null)),j=D.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,i,s){},b2d7:function(t,i,s){},c0b1:function(t,i,s){"use strict";s("b2d7")}});
//# sourceMappingURL=app.456c6d8b.js.map