(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{174:function(e,t,n){e.exports=n(261)},179:function(e,t,n){},216:function(e,t){},261:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(179),n(53)),u=n.n(i),s=n(22),l=n(42),m=n(54),d=n.n(m),f=n(288),p=n(297),b=n(20),g=n(108),E=n(90),_=n.n(E);function h(e,t){return Object(g.a)(Object(g.a)({},e),t)}function v(e,t){return{type:e,payload:t}}var O=function(){var e=_()();return _()(e).unix()},j=function(e){return v("SIGN_IN_USERNAME_SUCCESS",e)},S=function(e){return v("GET_USER_LOCAL_STORAGE_SUCCESS",e)},x=n(145),y=function(e){return e.authReducer.user},C=function(e){return e.authReducer.loading},w=function(e){return e.authReducer.error},N=Object(x.a)(y,(function(e){return null!==e})),A=n(29),L=n(286),R=n(91),k=n.n(R);function U(){var e=Object(l.a)(["\nbackground-color: ",";\ncolor: ",";\nheight: 100%;\nwidth: auto;\nfont-size: 18px;\npadding: 0;\nheight: 100%;\nwidth: 160px;\nborder: 0;\nfont-weight: 700;\noutline: 0;\nborder-radius: 5em;\nbox-sizing: border-box;\ncursor: pointer;"]);return U=function(){return e},e}function T(){var e=Object(l.a)(["\nfont-weight: 700;\nfont-size: 18px;\nborder: 0;\noutline: 0;\nborder-radius: 5em;\nbox-sizing: border-box;\nheight: 100%;\nwidth: 100%;\npadding: 0 0.714em;\nbackground-color: ",";\ncolor: ",";"]);return T=function(){return e},e}function I(){var e=Object(l.a)(["\nwidth: 400px;\nheight: 65px;\nposition: relative;\npadding: 0.625em;\nbox-sizing: border-box;\nfont-weight: 700;\nbox-sizing: border-box;\nbox-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.3);\ndisplay: flex;\njustify-content: center;\nborder-radius: 6.25em;\nbackground-color: ",";\ntransition: 300ms;\n"]);return I=function(){return e},e}var M=A.c.div(I(),(function(e){return e.theme.loginLabel})),F=A.c.input(T(),(function(e){return e.theme.formInput}),(function(e){return e.theme.text})),G=A.c.button(U(),(function(e){return e.theme.formButton.background}),(function(e){return e.theme.formButton.color})),z=function(e){var t=e.submit,n=e.fileError,o=Object(r.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)(null),m=Object(s.a)(l,2),d=m[0],f=m[1],p=Object(r.useState)(!1),b=Object(s.a)(p,2),g=b[0],E=b[1];Object(r.useEffect)((function(){d&&(E(!0),setTimeout((function(){E(!1)}),1e3))}),[d]);var _="Upload Profile Picture";return g&&(_="Uploading File..."),d&&!g&&(_="Success!"),a.a.createElement("form",{className:k.a.Form,onSubmit:function(e){return function(e){e.preventDefault();var n=new FormData;d&&n.append("file",d),n.append("username",i),t(n)}(e)},encType:"multipart/form-data"},a.a.createElement(M,null,a.a.createElement(F,{onChange:function(e){return u(e.target.value.trim())},type:"text",placeholder:"Username"}),a.a.createElement(G,{disabled:""===i,type:"submit"},"Let's Go!")),a.a.createElement("input",{accept:"image/*",className:k.a.Input,id:"contained-button-file",type:"file",onChange:function(e){var t=e.currentTarget.files?e.currentTarget.files[0]:null;t&&(!function(e){var t=e.name.split(".")[1].toLowerCase();return!(!["jpg","jpeg","png"].includes(t)||e.size>=2e6)}(t)?n():f(t))}}),a.a.createElement("label",{htmlFor:"contained-button-file"},a.a.createElement(L.a,{className:k.a.UploadButton,variant:"contained",color:"primary",component:"span"},_)))};function B(){var e=Object(l.a)(["\nborder-radius: 6.25em;\nbackground-color: ",";\nwidth: 200px;\nheight: 65px;\noutline: 0;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 20px;\nfont-weight: 700;\n"]);return B=function(){return e},e}var D,J=A.c.label(B(),(function(e){return e.theme.loginLabel})),P=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(b.c)(C),i=Object(b.b)(),u=function(e){return i(function(e){return v("SIGN_IN_USERNAME",e)}(e))};return a.a.createElement("div",{className:d.a.Login},a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(p.a,{key:n?"Form":"Button",addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:{enter:d.a.FadeEnter,enterActive:d.a.FadeEnterActive,exit:d.a.FadeExit,exitActive:d.a.FadeExitActive}},n?a.a.createElement(z,{fileError:function(){return i(v("FILE_VALIDATION_ERROR"))},submit:function(e){return t=e,o(!1),void u(t);var t}}):a.a.createElement(J,{onClick:function(){return!c&&o(!0)}},c?"Connecting...":"Start Chatting!"))))},W=n(36),K=n.n(W),H=n(160),q=n.n(H),V=n(158),$=n.n(V),X=n(157),Y=n.n(X),Z=n(89),Q=n(152),ee=n.n(Q),te="https://api-chat-server.herokuapp.com/";!function(e){e.InitMessages="InitMessages",e.NewMessage="NewMessage",e.Disconnect="disconnect"}(D||(D={}));var ne=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)({}),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(b.c)(y),m=Object(r.useRef)(),d=Object(r.useCallback)((function(){var e;null===(e=m.current)||void 0===e||e.emit(D.InitMessages,null===l||void 0===l?void 0:l._id)}),[l]);Object(r.useEffect)((function(){return l&&(m.current=ee()(te),m.current.on(D.NewMessage,(function(e){a((function(t){return[].concat(Object(Z.a)(t),[e])}))})),m.current.on(D.InitMessages,(function(e,t){u(t),a(e.reverse())})),m.current.on(D.Disconnect,(function(e){"string"!==typeof e&&u(e)})),d()),function(){var e;null===(e=m.current)||void 0===e||e.disconnect()}}),[l,d]);return{messages:n,sendMessage:function(e){var t;null===(t=m.current)||void 0===t||t.emit(D.NewMessage,{user:l,body:e,createdAt:O()})},user:l,currentlyOnlineUsers:i}},re=n(37),ae=n.n(re),oe=n(290),ce=n(302),ie=n(7),ue=n(289),se=Object(ie.a)((function(e){return Object(ue.a)({badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})}))(oe.a),le=function(e){var t=e.message,n=e.userId,r=e.currentlyOnlineUsers,o=n===t.user._id?ae.a.Sent:ae.a.Received,c=function(e){var t=new Date(1e3*e);return _()(t).fromNow()}(t.createdAt),i=Object.keys(r).includes(t.user._id?t.user._id:"");return a.a.createElement("div",{className:"".concat(ae.a.MessageContainer," ").concat(o)},a.a.createElement("div",{className:ae.a.MessageTop},i?a.a.createElement(se,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},a.a.createElement(ce.a,{alt:t.user.username,src:t.user.avatar})):a.a.createElement(ce.a,{alt:t.user.username,src:t.user.avatar}),a.a.createElement("p",{className:ae.a.Timestamp},c)),a.a.createElement("div",{className:"".concat(ae.a.MessageBody," ").concat(o)},n!==t.user._id&&a.a.createElement("p",{className:ae.a.Username},t.user.username),a.a.createElement("p",null,t.body)))},me=a.a.memo((function(e){var t=e.messages,n=e.userId,r=e.currentlyOnlineUsers,o=t.map((function(e,t){return a.a.createElement(le,{key:"".concat(e._id).concat(t),message:e,userId:n,currentlyOnlineUsers:r})}));return a.a.createElement("div",{className:ae.a.List},o)})),de=n(104),fe=n(303),pe=n(293),be=n(153),ge=n.n(be),Ee=n(155),_e=n.n(Ee),he=n(105),ve=n.n(he),Oe=n(154),je=n.n(Oe),Se=function(e){var t=e.show,n=e.handleClose,r=e.logout;return a.a.createElement(fe.a,{style:{textAlign:"center"},open:t,onClose:n},a.a.createElement(ge.a,null,"Are you sure?"),a.a.createElement(pe.a,null,a.a.createElement(je.a,null,"If you log out all your data will be lost!")),a.a.createElement(_e.a,null,a.a.createElement(ve.a,{onClick:r,color:"primary"},"Confirm"),a.a.createElement(ve.a,{onClick:n,color:"primary"},"Cancel")))},xe=n(296),ye=n(300),Ce=n(159),we=n.n(Ce),Ne=n(295),Ae=n(298),Le=function(e){var t=e.theme,n=e.toggleTheme,o=ne(),c=o.messages,i=o.sendMessage,u=o.user,l=o.currentlyOnlineUsers,m=Object(r.useState)(!1),d=Object(s.a)(m,2),f=d[0],p=d[1],g=a.a.useState(null),E=Object(s.a)(g,2),_=E[0],h=E[1],O=Object(r.useRef)(null),j=Object(r.useState)(""),S=Object(s.a)(j,2),x=S[0],y=S[1],C=Object(b.b)(),w=function(){return h(null)};Object(r.useEffect)((function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[c]);var N=function(e){e.preventDefault(),""!==x.trim()&&i(x),y("")},A=function(){return p(!1)},L=Object.keys(l).length;return a.a.createElement("div",{className:K.a.ChatRoom},a.a.createElement("header",{className:K.a.Header},a.a.createElement("h2",null,L," Online"),a.a.createElement("div",{className:K.a.ThemeToggle},"light"===t?a.a.createElement(Ae.a,{title:"Toggle Dark Theme"},a.a.createElement(Y.a,{onClick:n})):a.a.createElement(Ae.a,{title:"Toggle Light Theme"},a.a.createElement($.a,{onClick:n}))),a.a.createElement(Ne.a,{className:K.a.Menu,color:"inherit",onClick:function(e){return h(e.currentTarget)}},a.a.createElement(we.a,null)),a.a.createElement(xe.a,{anchorEl:_,keepMounted:!0,open:Boolean(_),onClose:w},a.a.createElement(ye.a,{onClick:function(){p(!0),w()}},"Logout"))),a.a.createElement("section",{className:K.a.Section},a.a.createElement("main",{className:K.a.Main},a.a.createElement(me,{messages:c,userId:(null===u||void 0===u?void 0:u._id)&&u._id,currentlyOnlineUsers:l}),a.a.createElement("div",{ref:O})),a.a.createElement("form",{className:K.a.Form,onSubmit:N},a.a.createElement("textarea",{placeholder:"Start typing here...",value:x,onFocus:function(){de.isMobile&&setTimeout((function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),100)},onKeyPress:function(e){return function(e){de.isMobile||"Enter"!==e.key||e.shiftKey||N(e)}(e)},onChange:function(e){return y(e.target.value)},className:K.a.Textarea}),""!==x&&a.a.createElement("button",{className:K.a.Button,type:"submit"},a.a.createElement(q.a,{fontSize:"large",style:{color:"#6649b8"}})))),a.a.createElement(Se,{show:f,handleClose:A,logout:function(){C(v("LOGOUT_USER",(null===u||void 0===u?void 0:u._id)?u._id:"")),A()}}))},Re={loginLabel:"#1c1f25",formButton:{color:"#1c1f25",background:"white"},formInput:"#1c1f25",body:"#E2E2E2",text:"white"},ke={loginLabel:"white",formButton:{color:"white",background:"#282c34"},formInput:"white",body:"#1c1f25",text:"#1c1f25"};function Ue(){var e=Object(l.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-size: 10px;\n    background-color: ",";\n    color: ",';\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: "Open Sans", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }']);return Ue=function(){return e},e}var Te=Object(A.b)(Ue(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),Ie=n(301),Me=n(161),Fe=n.n(Me),Ge=function(e){var t=e.open,n=e.error,r=Object(b.b)(),o=function(){return r(v("CLOSE_SNACKBAR"))},c=function(e,t){"clickaway"!==t&&o()};return a.a.createElement(Ie.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,autoHideDuration:6e3,onClose:c,message:n,action:a.a.createElement(a.a.Fragment,null,a.a.createElement(Ne.a,{size:"small","aria-label":"close",color:"inherit",onClick:c},a.a.createElement(Fe.a,{fontSize:"small"})))})},ze=function(){var e=function(){var e=Object(r.useState)("dark"),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(e){window.localStorage.setItem("theme",e),a(e)};return Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");e?a(e):o("dark")}),[]),{theme:n,toggleTheme:function(){o("light"===n?"dark":"light")}}}(),t=e.theme,n=e.toggleTheme,o="light"===t?Re:ke,c=Object(b.c)(N),i=Object(b.c)(w),l=Object(b.b)(),m=Object(r.useCallback)((function(){return l(v("GET_USER_LOCAL_STORAGE"))}),[l]);return Object(r.useEffect)((function(){m()}),[m]),a.a.createElement(A.a,{theme:o},a.a.createElement(Te,null),a.a.createElement("div",{className:u.a.App},a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(p.a,{key:c?"ChatRoom":"Login",addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:{enter:u.a.FadeEnter,enterActive:u.a.FadeEnterActive,exit:u.a.FadeExit,exitActive:u.a.FadeExitActive}},c?a.a.createElement(Le,{toggleTheme:n,theme:t}):a.a.createElement(P,null)))),a.a.createElement(Ge,{open:""!==i,error:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=n(35),De={user:null,loading:!1,error:""},Je=function(e){return h(e,{loading:!0})},Pe=function(e,t){return h(e,{user:t,loading:!1,error:""})},We=function(e,t){return h(e,{loading:!1,error:t})},Ke=function(e){return h(e,{user:null})},He=function(e,t){return h(e,{user:t})},qe=function(e){return h(e,{error:"Only JPG/PNG files under 4MB allowed."})},Ve=function(e){return h(e,{error:""})},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_USERNAME_START":return Je(e);case"SIGN_IN_USERNAME_SUCCESS":return Pe(e,t.payload);case"SIGN_IN_USERNAME_FAILED":return We(e,t.payload);case"LOGOUT_USER_FAILED":case"LOGOUT_USER_SUCCESS":return Ke(e);case"GET_USER_LOCAL_STORAGE_SUCCESS":return He(e,t.payload);case"CLOSE_SNACKBAR":return Ve(e);case"FILE_VALIDATION_ERROR":return qe(e);default:return e}},Xe=Object(Be.c)({authReducer:$e}),Ye=n(164),Ze=n(23),Qe=n.n(Ze),et=n(16),tt=n(106),nt=n(85),rt=n(86),at=n(165),ot=n(163),ct=n(162),it=n.n(ct),ut=new(function(e){Object(at.a)(n,e);var t=Object(ot.a)(n);function n(){return Object(nt.a)(this,n),t.apply(this,arguments)}return Object(rt.a)(n,[{key:"signinNewUser",value:function(){var e=Object(tt.a)(Qe.a.mark((function e(t){var n;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/user",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(tt.a)(Qe.a.mark((function e(t){var n;return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delete("/user/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(function(){function e(){Object(nt.a)(this,e),this.api=void 0,this.apiConfig={timeout:15e3,baseURL:te,headers:{common:{"Content-Type":"application/json",Accept:"application/json"}}},this.api=it.a.create(this.apiConfig),this.api.interceptors.response.use((function(e){return e}),(function(e){var t;return Promise.reject(null===(t=e.response)||void 0===t?void 0:t.data.message)}))}return Object(rt.a)(e,[{key:"get",value:function(e,t){return this.api.get(e,t)}},{key:"post",value:function(e,t,n){return this.api.post(e,t,n)}},{key:"delete",value:function(e,t){return this.api.delete(e,t)}},{key:"put",value:function(e,t,n){return this.api.put(e,t,n)}}]),e}())),st=Qe.a.mark(dt),lt=Qe.a.mark(ft),mt=Qe.a.mark(pt);function dt(e){var t;return Qe.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(et.d)(v("SIGN_IN_USERNAME_START"));case 2:return n.next=4,Object(et.c)(500);case 4:return n.prev=4,n.next=7,Object(et.b)((function(){return ut.signinNewUser(e.payload)}));case 7:return t=n.sent,n.next=10,Object(et.b)([localStorage,"setItem"],"currentUser",JSON.stringify(t));case 10:return n.next=12,Object(et.d)(j(t));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(4),n.next=18,Object(et.d)(v("SIGN_IN_USERNAME_FAILED",n.t0));case 18:case"end":return n.stop()}}),st,null,[[4,14]])}function ft(e){return Qe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(et.b)((function(){return ut.deleteUser(e.payload)}));case 3:return t.next=5,Object(et.d)(v("LOGOUT_USER_SUCCESS"));case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(et.d)(v("LOGOUT_USER_FAILED",t.t0));case 11:return t.next=13,Object(et.b)([localStorage,"removeItem"],"currentUser");case 13:return t.next=15,Object(et.c)(300);case 15:case"end":return t.stop()}}),lt,null,[[0,7]])}function pt(){var e;return Qe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(et.b)([localStorage,"getItem"],"currentUser");case 2:return e=t.sent,t.next=5,Object(et.d)(S(JSON.parse(e)));case 5:case"end":return t.stop()}}),mt)}var bt=[Object(et.e)("SIGN_IN_USERNAME",dt),Object(et.e)("LOGOUT_USER",ft),Object(et.e)("GET_USER_LOCAL_STORAGE",pt)],gt=Qe.a.mark(Et);function Et(){return Qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.a)(Object(Z.a)(bt));case 2:case"end":return e.stop()}}),gt)}var _t=Be.d,ht=Object(Ye.a)(),vt=Object(Be.e)(Xe,_t(Object(Be.a)(ht)));ht.run(Et),c.a.render(a.a.createElement(b.a,{store:vt},a.a.createElement(ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={ChatRoom:"ChatRoom_ChatRoom__1wWXC",Header:"ChatRoom_Header__1nsHl",Menu:"ChatRoom_Menu__UrlIj",ThemeToggle:"ChatRoom_ThemeToggle__r2urn",Section:"ChatRoom_Section__3G7Gw",Main:"ChatRoom_Main__3yd-j",Form:"ChatRoom_Form__S9-hN",Textarea:"ChatRoom_Textarea__B0n_x",Button:"ChatRoom_Button__3toSy"}},37:function(e,t,n){e.exports={List:"MessagesList_List__FWKb1",MessageContainer:"MessagesList_MessageContainer__3ktq6",Sent:"MessagesList_Sent__UWx0E",MessageTop:"MessagesList_MessageTop__3831z",MessageBody:"MessagesList_MessageBody__3qzfP",Received:"MessagesList_Received__23zvc",Username:"MessagesList_Username__2MU3T",Timestamp:"MessagesList_Timestamp__3dzyR"}},53:function(e,t,n){e.exports={App:"App_App__34i3s",FadeEnter:"App_FadeEnter__1uJf1",FadeExit:"App_FadeExit__25tik",FadeEnterActive:"App_FadeEnterActive__1Ptu1",FadeExitActive:"App_FadeExitActive__2WYg3"}},54:function(e,t,n){e.exports={Login:"Login_Login__DI4NL",Form:"Login_Form__1kJZN",FadeEnter:"Login_FadeEnter__GldiS",FadeExit:"Login_FadeExit__q7x44",FadeEnterActive:"Login_FadeEnterActive__1T2q_",FadeExitActive:"Login_FadeExitActive__W_-zu"}},91:function(e,t,n){e.exports={Input:"Form_Input__7pthK",UploadButton:"Form_UploadButton__3GuAJ"}}},[[174,1,2]]]);
//# sourceMappingURL=main.bef7e724.chunk.js.map