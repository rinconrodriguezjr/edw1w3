(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,a){"use strict";a("95c5")},"13aa":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid banner-interno"},[a("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?a("div",{staticClass:"banner-interno__titulo__icono me-3"},[a("i",{class:t.icono})]):t._e(),a("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},n=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=s,i=(a("0095"),a("2877")),c=Object(i["a"])(o,r,n,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,a){var r=a("da84"),n=a("fdbc"),s=a("17c2"),o=a("9112");for(var i in n){var c=r[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var r=a("b727").forEach,n=a("a640"),s=n("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"curso-main-container creditos-vista"},[a("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(e,r){return a("div",{staticClass:"creditos__item",class:r!=Object.keys(t.creditosData).length-1?"mb-4":""},[a("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[e]))]),a("table",[a("tbody",t._l(t.creditosData[e],(function(r,n){return a("tr",{key:e+n},[a("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(r.nombre))}}),a("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(r.cargo))}}),a("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(r.centro))}})])})),0)])])})),0),t._m(0),a("Footer",{attrs:{"all-round":""}})],1)],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-4 mb-md-5"},[r("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:a("ef52")}}),r("p",[t._v("Fotografías y vectores tomados de "),r("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),r("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),r("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),r("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:a("e1f5")}}),r("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),r("br"),r("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],s=(a("159b"),a("13aa")),o=a("e9c6"),i={name:"Creditos",components:{BannerInterno:s["default"],Footer:o["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,a){e+=(a?"<br/>":"")+t})):e+=t,e}}},c=i,l=(a("5d8e"),a("2877")),d=Object(l["a"])(c,r,n,!1,null,null,null);e["default"]=d.exports},"5d8e":function(t,e,a){"use strict";a("f728")},"95c5":function(t,e,a){},a640:function(t,e,a){"use strict";var r=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&r((function(){a.call(null,e||function(){throw 1},1)}))}},e1f5:function(t,e,a){t.exports=a.p+"img/creditos-cc.8b385472.svg"},ef52:function(t,e,a){t.exports=a.p+"img/creditos-img.5f8a2d3f.svg"},f728:function(t,e,a){}}]);
//# sourceMappingURL=creditos.4ca577c5.js.map