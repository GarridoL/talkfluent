webpackJsonp([30],{389:function(n,t,i){i(756);var o=i(151)(i(627),i(875),null,null);n.exports=o.exports},451:function(n,t,i){n.exports=i.p+"static/img/logo_talk.9dfb9d8.png"},472:function(n,t,i){n.exports=i.p+"static/img/logo_habla.2348e9c.png"},627:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(28),r=i(42),e=i(27);t.default={mounted:function(){this.email=this.$route.params.email},data:function(){return{email:this.$route.params.email,user:r.a.user,tokenData:r.a.tokenData,config:e.default,flag:!1}},methods:{redirect:function(n){o.a.push(n)}}}},680:function(n,t,i){t=n.exports=i(367)(),t.push([n.i,".login-container,body{background:#00bff3}.login-container{margin-top:75px}.login-company-name{width:100%;text-align:center;float:left}.login-company-name img{width:60%;margin-left:20%;margin-right:20%}.login-input-holder{width:100%;float:left;margin-top:10px;background:#fff;margin-bottom:75px}.login-input-holder h3{width:100%;float:left;font-size:24px;text-align:center;padding-top:25px;padding-bottom:10px;border-bottom:1px solid #fff;color:#00bff3}.login-input-holder .login-fields{width:80%;float:left;margin:25px 10%}.login-message-holder{min-height:30px;font-size:12px;float:left;overflow:hidden}.login-fields .links{float:left;width:100%;text-align:center;color:#00bff3}.login-fields .links label:hover{cursor:pointer}.login-spacer{margin-bottom:10px}.btn-login,.form-control-login{height:45px!important}.btn-warning{color:#fff!important}@media (max-width:991px){.hide-this{display:none}.login-container{box-shadow:0 0 0 0 #fff!important;margin-top:75px!important}.form-check,.login-company-name{text-align:center!important;width:100%!important}.login-input-holder{width:100%!important;margin-left:0!important}}","",{version:3,sources:["C:/xampp/htdocs/talkfluent/src/modules/home/Verification.vue"],names:[],mappings:"AAIA,sBAFE,kBAAoB,CAKrB,AAHD,iBACE,eAAiB,CAElB,AACD,oBACE,WAAY,AACZ,kBAAmB,AACnB,UAAY,CACb,AACD,wBACE,UAAW,AACX,gBAAiB,AACjB,gBAAkB,CACnB,AACD,oBACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,uBACE,WAAY,AACZ,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,iBAAkB,AAClB,oBAAqB,AACrB,6BAA8B,AAC9B,aAAe,CAChB,AACD,kCACE,UAAW,AACX,WAAY,AACZ,eAA0B,CAC3B,AACD,sBACE,gBAAiB,AACjB,eAAgB,AAChB,WAAY,AACZ,eAAiB,CAClB,AACD,qBACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,aAAe,CAChB,AACD,iCACE,cAAgB,CACjB,AACD,cACE,kBAAoB,CACrB,AAYD,+BACE,qBAAwB,CACzB,AACD,aACE,oBAAuB,CACxB,AAuBD,yBACA,WACI,YAAc,CACjB,AACD,iBACI,kCAAoC,AACpC,yBAA4B,CAC/B,AACD,gCACI,4BAA8B,AAC9B,oBAAuB,CAC1B,AACD,oBACI,qBAAuB,AACvB,uBAA0B,CAC7B,CACA",file:"Verification.vue",sourcesContent:["\nbody{\r\n  background: #00bff3;\n}\n.login-container{\r\n  margin-top: 75px;\r\n  background: #00bff3;\n}\n.login-company-name{\r\n  width: 100%;\r\n  text-align: center;\r\n  float: left;\n}\n.login-company-name img{\r\n  width: 60%;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\n}\n.login-input-holder{\r\n  width: 100%;\r\n  float: left;\r\n  margin-top: 10px;\r\n  background: #fff;\r\n  margin-bottom: 75px;\n}\n.login-input-holder h3{\r\n  width: 100%;\r\n  float: left;\r\n  font-size: 24px;\r\n  text-align: center;\r\n  padding-top: 25px;\r\n  padding-bottom: 10px;\r\n  border-bottom: solid 1px #fff;\r\n  color: #00bff3;\n}\n.login-input-holder .login-fields{\r\n  width: 80%;\r\n  float: left;\r\n  margin: 25px 10% 25px 10%;\n}\n.login-message-holder{\r\n  min-height: 30px;\r\n  font-size: 12px;\r\n  float: left;\r\n  overflow: hidden;\n}\n.login-fields .links{\r\n  float: left;\r\n  width: 100%;\r\n  text-align: center;\r\n  color: #00bff3;\n}\n.login-fields .links label:hover{\r\n  cursor: pointer;\n}\n.login-spacer{\r\n  margin-bottom: 10px;\n}\n.form-control-login{\r\n  height: 45px !important;\n}\r\n\r\n\r\n\r\n/*----------------------------------------\r\n\r\n            Buttons\r\n\r\n------------------------------------------*/\n.btn-login{\r\n  height: 45px !important;\n}\n.btn-warning{\r\n  color: #fff !important;\n}\r\n\r\n\r\n/*---------------------------------------------------------\r\n\r\n                  RESPONSIVE HANDLER\r\n\r\n-----------------------------------------------------------*/\r\n\r\n/*-------------- Large Screens for Desktop --------------*/\n@media (min-width: 1200px){\n}\r\n\r\n\r\n/*-------------- Medium Screen for Tablets  --------------*/\n@media screen (min-width: 992px), screen and (max-width: 1199px){\n}\r\n\r\n/*-------------- Small Screen for Mobile Phones  --------------*/\n@media screen (min-width: 768px), screen and (max-width: 991px){\n}\r\n\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.hide-this{\r\n    display: none;\n}\n.login-container{\r\n    box-shadow: 0 0 0 0 #fff !important;\r\n    margin-top: 75px !important;\n}\n.login-company-name, .form-check{\r\n    text-align: center !important; \r\n    width: 100% !important;\n}\n.login-input-holder{\r\n    width: 100% !important;\r\n    margin-left: 0 !important;\n}\n}\r\n"],sourceRoot:""}])},756:function(n,t,i){var o=i(680);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);i(368)("06ce7bd2",o,!0)},875:function(n,t,i){n.exports={render:function(){var n=this,t=n.$createElement,o=n._self._c||t;return n.tokenData.verifyingToken||n.tokenData.token?n._e():o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-6 col-lg-4 mx-auto login-container"},[o("span",{staticClass:"login-company-name"},[0===n.config.SITE_FLAG?o("img",{attrs:{src:i(451)}}):n._e(),n._v(" "),1===n.config.SITE_FLAG?o("img",{attrs:{src:i(451)}}):n._e(),n._v(" "),2===n.config.SITE_FLAG?o("img",{attrs:{src:i(472)}}):n._e()]),n._v(" "),o("div",{staticClass:"login-input-holder"},[o("h3",[n._v("\n          Email Verification Sent!\n        ")]),n._v(" "),o("div",{staticClass:"login-fields"},[o("div",{staticClass:"input-group login-spacer text-center login-spacer"},[o("label",[n._v("\n              We've sent an email to your email address at "),o("b",[n._v(" "+n._s(n.email)+" ")]),n._v(" for verification purposes only. This may take few minutes.\n            ")])]),n._v(" "),o("button",{staticClass:"btn btn-danger btn-block btn-login login-spacer",on:{click:function(t){return n.redirect("/")}}},[n._v("Back to Login")])])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=30.6fb8f552594f6c08b8ac.js.map