(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8a7823a"],{ab14:function(e,t,s){"use strict";t["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const s={};return 0===t?s.next=e[t+1]:(t+1===e.length||(s.next=e[t+1]),s.back=e[t-1]),s}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const s=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...s}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},b7c8:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"linea-tiempo-e"},[e._l(e.elements,(function(t,i){return s("div",{key:"linea-tiempo-e-key-"+t.id,staticClass:"linea-tiempo-e__item"},[s("div",{staticClass:"linea-tiempo-e__item__header"},[s("h3",{staticClass:"mb-1"},[e._v(e._s(t.titulo))]),t.hasOwnProperty("subtitulo")?s("p",{staticClass:"mb-0"},[e._v(e._s(t.subtitulo))]):e._e()]),s("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],staticClass:"linea-tiempo-e__item__body"})])})),s("div",{staticClass:"hidden-slot"},[e._t("default")],2)],2)},a=[],n=s("ab14"),r={name:"LineaTiempoE",mixins:[n["a"]]},d=r,l=s("2877"),o=Object(l["a"])(d,i,a,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-e8a7823a.8d73d85e.js.map