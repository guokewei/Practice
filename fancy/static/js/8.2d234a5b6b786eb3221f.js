webpackJsonp([8],{RtdA:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("3nlj"),o=t("Hj6f"),r=t("9rMa"),i=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},n={data:function(){return{havePage:!1,mainarea:!1,slidename:"slide-go"}},components:{Headersec:a.a,Nopage:o.a},computed:i({},Object(r.b)(["this.$store.state.address","this.$store.state.chooseaddress","this.$store.state.ischoose","this.$store.state.comname"])),mounted:function(){this.mainarea=!0,0===this.$store.state.address.length?this.havePage=!1:this.havePage=!0,"addressadd"===this.$store.state.comname?this.slidename="slide-back":this.slidename="slide-go",this.setComname("address")},methods:i({onAddAddress:function(){this.$router.push("./addaddress")},onChooseAddress:function(e){1==this.$store.state.ischoose&&(this.setChooseaddress(e),this.$router.push("./orderwait"),this.setIschoose(2))}},Object(r.c)({setChooseaddress:"SET_CHOOSEADDRESS",setIschoose:"SET_ISCHOOSE",setComname:"SET_COMNAME"}))},d={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"page"},[t("headersec",{attrs:{tabname:"我的地址"}}),e._v(" "),t("transition",{attrs:{name:e.slidename}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.mainarea,expression:"mainarea"}],staticClass:"container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.havePage,expression:"!havePage"}]},[t("nopage")],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.havePage,expression:"havePage"}]},e._l(this.$store.state.address,function(s){return t("div",{staticClass:"address-item",on:{click:function(t){e.onChooseAddress(s)}}},[t("p",[e._v(e._s(s))])])}))])]),e._v(" "),t("div",{staticClass:"pageBottom",on:{click:e.onAddAddress}},[t("span",{staticClass:"tabbar-label"},[e._v("新增地址")])])],1)},staticRenderFns:[]};var c=t("X4nt")(n,d,!1,function(e){t("WAqe")},"data-v-f1409988",null);s.default=c.exports},WAqe:function(e,s){}});