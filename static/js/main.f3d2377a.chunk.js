(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{153:function(e,t,n){e.exports={List:"MessagesList_List__3PU2h"}},175:function(e,t,n){e.exports=n(263)},180:function(e,t,n){},217:function(e,t){},222:function(e,t,n){e.exports=n.p+"static/media/notification-sound.06426bbc.mp3"},263:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(180),n(53)),u=n.n(i),s=n(20),l=n(41),m=n(54),d=n.n(m),f=n(290),p=n(299),b=n(21),g=n(108),E=n(91),_=n.n(E);function h(e,t){return Object(g.a)(Object(g.a)({},e),t)}function v(e,t){return{type:e,payload:t}}var O=function(){var e=_()();return _()(e).unix()},j=function(e){return v("SIGN_IN_USERNAME_SUCCESS",e)},S=function(e){return v("GET_USER_LOCAL_STORAGE_SUCCESS",e)},x=n(145),y=function(e){return e.authReducer.user},C=function(e){return e.authReducer.loading},w=function(e){return e.authReducer.error},A=Object(x.a)(y,(function(e){return null!==e})),N=n(29),R=n(288),L=n(62),I=n.n(L);function U(){var e=Object(l.a)(["\nbackground-color: ",";\ncolor: ",";\nheight: 100%;\nwidth: auto;\nfont-size: 18px;\npadding: 0;\nheight: 100%;\nwidth: 160px;\nborder: 0;\nfont-weight: 700;\noutline: 0;\nborder-radius: 5em;\nbox-sizing: border-box;\ncursor: pointer;"]);return U=function(){return e},e}function k(){var e=Object(l.a)(["\nfont-weight: 700;\nfont-size: 18px;\nborder: 0;\noutline: 0;\nborder-radius: 5em;\nbox-sizing: border-box;\nheight: 100%;\nwidth: 100%;\npadding: 0 0.714em;\nbackground-color: ",";\ncolor: ",";"]);return k=function(){return e},e}function T(){var e=Object(l.a)(["\nheight: 65px;\nposition: relative;\npadding: 0.625em;\nbox-sizing: border-box;\nfont-weight: 700;\nbox-sizing: border-box;\nbox-shadow: 0 0.125em 0.3125em rgba(0, 0, 0, 0.3);\ndisplay: flex;\njustify-content: center;\nborder-radius: 6.25em;\nbackground-color: ",";\ntransition: 300ms;\n"]);return T=function(){return e},e}var F=N.c.div(T(),(function(e){return e.theme.loginLabel})),M=N.c.input(k(),(function(e){return e.theme.formInput}),(function(e){return e.theme.text})),G=N.c.button(U(),(function(e){return e.theme.formButton.background}),(function(e){return e.theme.formButton.color})),B=function(e){var t=e.submit,n=e.fileError,o=Object(r.useState)(""),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)(null),m=Object(s.a)(l,2),d=m[0],f=m[1],p=Object(r.useState)(!1),b=Object(s.a)(p,2),g=b[0],E=b[1];Object(r.useEffect)((function(){d&&(E(!0),setTimeout((function(){E(!1)}),1e3))}),[d]);var _="Upload Profile Picture";return g&&(_="Uploading File..."),d&&!g&&(_="Success!"),a.a.createElement("form",{className:I.a.Form,onSubmit:function(e){return function(e){e.preventDefault();var n=new FormData;d&&n.append("file",d),n.append("username",i),t(n)}(e)},encType:"multipart/form-data"},a.a.createElement(F,null,a.a.createElement(M,{onChange:function(e){return u(e.target.value.trim())},type:"text",placeholder:"Username"}),a.a.createElement(G,{disabled:""===i,type:"submit"},"Let's Go!")),a.a.createElement("input",{accept:"image/*",className:I.a.Input,id:"contained-button-file",type:"file",onChange:function(e){var t=e.currentTarget.files?e.currentTarget.files[0]:null;t&&(!function(e){var t=e.name.split(".")[1].toLowerCase();return!(!["jpg","jpeg","png"].includes(t)||e.size>=2e6)}(t)?n():f(t))}}),a.a.createElement("label",{className:I.a.ButtonContainer,htmlFor:"contained-button-file"},a.a.createElement(R.a,{className:I.a.UploadButton,variant:"contained",color:"primary",component:"span"},_)))};function z(){var e=Object(l.a)(["\nborder-radius: 6.25em;\nbackground-color: ",";\nwidth: 200px;\nheight: 65px;\noutline: 0;\nborder: none;\ncursor: pointer;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 20px;\nfont-weight: 700;\n"]);return z=function(){return e},e}var D,P=N.c.label(z(),(function(e){return e.theme.loginLabel})),K=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(b.c)(C),i=Object(b.b)(),u=function(e){return i(function(e){return v("SIGN_IN_USERNAME",e)}(e))};return a.a.createElement("div",{className:d.a.Login},a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(p.a,{key:n?"Form":"Button",addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:{enter:d.a.FadeEnter,enterActive:d.a.FadeEnterActive,exit:d.a.FadeExit,exitActive:d.a.FadeExitActive}},n?a.a.createElement(B,{fileError:function(){return i(v("FILE_VALIDATION_ERROR"))},submit:function(e){return t=e,o(!1),void u(t);var t}}):a.a.createElement(P,{onClick:function(){return!c&&o(!0)}},c?"Connecting...":"Start Chatting!"))))},J=n(36),H=n.n(J),Q=n(161),V=n.n(Q),W=n(159),Y=n.n(W),$=n(158),q=n.n($),X=n(90),Z=n(152),ee=n.n(Z),te="https://api-chat-server.herokuapp.com/";!function(e){e.InitMessages="InitMessages",e.NewMessage="NewMessage",e.Disconnect="disconnect"}(D||(D={}));var ne=n(222),re=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([]),c=Object(s.a)(o,2),i=c[0],u=c[1],l=Object(r.useState)({}),m=Object(s.a)(l,2),d=m[0],f=m[1],p=Object(b.c)(y),g=new Audio(ne),E=Object(r.useRef)(),_=Object(r.useCallback)((function(){var e;null===(e=E.current)||void 0===e||e.emit(D.InitMessages,null===p||void 0===p?void 0:p._id)}),[p]);Object(r.useEffect)((function(){return p&&(E.current=ee()(te),E.current.on(D.NewMessage,(function(e){e.user._id!==p._id&&a(!0),u((function(t){return[].concat(Object(X.a)(t),[e])}))})),E.current.on(D.InitMessages,(function(e,t){f(t),u(e.reverse())})),E.current.on(D.Disconnect,(function(e){"string"!==typeof e&&f(e)})),_()),function(){var e;null===(e=E.current)||void 0===e||e.disconnect()}}),[p,n,_]),Object(r.useEffect)((function(){return n&&g.play(),g.addEventListener("ended",(function(){return a(!1)})),function(){g.removeEventListener("ended",(function(){return a(!1)}))}}),[g,n]);return{messages:i,sendMessage:function(e){var t;null===(t=E.current)||void 0===t||t.emit(D.NewMessage,{user:p,body:e,createdAt:O()})},user:p,currentlyOnlineUsers:d}},ae=n(45),oe=n.n(ae),ce=n(292),ie=n(304),ue=n(7),se=n(291),le=Object(ue.a)((function(e){return Object(se.a)({badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}})}))(ce.a),me=function(e){var t=e.message,n=e.userId,r=e.currentlyOnlineUsers,o=n===t.user._id?oe.a.Sent:oe.a.Received,c=function(e){var t=new Date(1e3*e);return _()(t).fromNow()}(t.createdAt),i=Object.keys(r).includes(t.user._id?t.user._id:"");return a.a.createElement("div",{className:"".concat(oe.a.MessageContainer," ").concat(o)},a.a.createElement("div",{className:oe.a.MessageTop},i?a.a.createElement(le,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},a.a.createElement(ie.a,{alt:t.user.username,src:t.user.avatar})):a.a.createElement(ie.a,{alt:t.user.username,src:t.user.avatar}),a.a.createElement("p",{className:oe.a.Timestamp},c)),a.a.createElement("div",{className:"".concat(oe.a.MessageBody," ").concat(o)},n!==t.user._id&&a.a.createElement("p",{className:oe.a.Username},t.user.username),a.a.createElement("p",null,t.body)))},de=n(153),fe=n.n(de),pe=a.a.memo((function(e){var t=e.messages,n=e.userId,r=e.currentlyOnlineUsers,o=t.map((function(e,t){return a.a.createElement(me,{key:"".concat(e._id).concat(t),message:e,userId:n,currentlyOnlineUsers:r})}));return a.a.createElement("div",{className:fe.a.List},o)})),be=n(104),ge=n(305),Ee=n(295),_e=n(154),he=n.n(_e),ve=n(156),Oe=n.n(ve),je=n(105),Se=n.n(je),xe=n(155),ye=n.n(xe),Ce=function(e){var t=e.show,n=e.handleClose,r=e.logout;return a.a.createElement(ge.a,{style:{textAlign:"center"},open:t,onClose:n},a.a.createElement(he.a,null,"Are you sure?"),a.a.createElement(Ee.a,null,a.a.createElement(ye.a,null,"If you log out all your data will be lost!")),a.a.createElement(Oe.a,null,a.a.createElement(Se.a,{onClick:r,color:"primary"},"Confirm"),a.a.createElement(Se.a,{onClick:n,color:"primary"},"Cancel")))},we=n(298),Ae=n(302),Ne=n(160),Re=n.n(Ne),Le=n(297),Ie=n(300),Ue=function(e){var t=e.theme,n=e.toggleTheme,o=re(),c=o.messages,i=o.sendMessage,u=o.user,l=o.currentlyOnlineUsers,m=Object(r.useState)(!1),d=Object(s.a)(m,2),f=d[0],p=d[1],g=a.a.useState(null),E=Object(s.a)(g,2),_=E[0],h=E[1],O=Object(r.useRef)(null),j=Object(r.useState)(""),S=Object(s.a)(j,2),x=S[0],y=S[1],C=Object(b.b)(),w=function(){return h(null)};Object(r.useEffect)((function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[c]);var A=function(e){e.preventDefault(),""!==x.trim()&&i(x),y("")},N=function(){return p(!1)},R=Object.keys(l).length;return a.a.createElement("div",{className:H.a.ChatRoom},a.a.createElement("header",{className:H.a.Header},a.a.createElement("h2",null,R," Online"),a.a.createElement("div",{className:H.a.ThemeToggle},"light"===t?a.a.createElement(Ie.a,{title:"Toggle Dark Theme"},a.a.createElement(q.a,{onClick:n})):a.a.createElement(Ie.a,{title:"Toggle Light Theme"},a.a.createElement(Y.a,{onClick:n}))),a.a.createElement(Le.a,{className:H.a.Menu,color:"inherit",onClick:function(e){return h(e.currentTarget)}},a.a.createElement(Re.a,null)),a.a.createElement(we.a,{anchorEl:_,keepMounted:!0,open:Boolean(_),onClose:w},a.a.createElement(Ae.a,{onClick:function(){p(!0),w()}},"Logout"))),a.a.createElement("section",{className:H.a.Section},a.a.createElement("main",{className:H.a.Main},a.a.createElement(pe,{messages:c,userId:(null===u||void 0===u?void 0:u._id)&&u._id,currentlyOnlineUsers:l}),a.a.createElement("div",{ref:O})),a.a.createElement("form",{className:H.a.Form,onSubmit:A},a.a.createElement("textarea",{placeholder:"Start typing here...",value:x,onFocus:function(){be.isMobile&&setTimeout((function(){var e;null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),100)},onKeyPress:function(e){return function(e){be.isMobile||"Enter"!==e.key||e.shiftKey||A(e)}(e)},onChange:function(e){return y(e.target.value)},className:H.a.Textarea}),""!==x&&a.a.createElement("button",{className:H.a.Button,type:"submit"},a.a.createElement(V.a,{fontSize:"large",style:{color:"#6649b8"}})))),a.a.createElement(Ce,{show:f,handleClose:N,logout:function(){C(v("LOGOUT_USER",(null===u||void 0===u?void 0:u._id)?u._id:"")),N()}}))},ke={loginLabel:"#1c1f25",formButton:{color:"#1c1f25",background:"white"},formInput:"#1c1f25",body:"#E2E2E2",text:"white"},Te={loginLabel:"white",formButton:{color:"white",background:"#282c34"},formInput:"white",body:"#1c1f25",text:"#1c1f25"};function Fe(){var e=Object(l.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-size: 10px;\n    background-color: ",";\n    color: ",';\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: "Open Sans", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }']);return Fe=function(){return e},e}var Me=Object(N.b)(Fe(),(function(e){return e.theme.body}),(function(e){return e.theme.text})),Ge=n(303),Be=n(162),ze=n.n(Be),De=function(e){var t=e.open,n=e.error,r=Object(b.b)(),o=function(){return r(v("CLOSE_SNACKBAR"))},c=function(e,t){"clickaway"!==t&&o()};return a.a.createElement(Ge.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:t,autoHideDuration:6e3,onClose:c,message:n,action:a.a.createElement(a.a.Fragment,null,a.a.createElement(Le.a,{size:"small","aria-label":"close",color:"inherit",onClick:c},a.a.createElement(ze.a,{fontSize:"small"})))})},Pe=function(){var e=function(){var e=Object(r.useState)("dark"),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(e){window.localStorage.setItem("theme",e),a(e)};return Object(r.useEffect)((function(){var e=window.localStorage.getItem("theme");e?a(e):o("dark")}),[]),{theme:n,toggleTheme:function(){o("light"===n?"dark":"light")}}}(),t=e.theme,n=e.toggleTheme,o="light"===t?ke:Te,c=Object(b.c)(A),i=Object(b.c)(w),l=Object(b.b)(),m=Object(r.useCallback)((function(){return l(v("GET_USER_LOCAL_STORAGE"))}),[l]);return Object(r.useEffect)((function(){m()}),[m]),a.a.createElement(N.a,{theme:o},a.a.createElement(Me,null),a.a.createElement("div",{className:u.a.App},a.a.createElement(f.a,{mode:"out-in"},a.a.createElement(p.a,{key:c?"ChatRoom":"Login",addEndListener:function(e,t){return e.addEventListener("transitionend",t,!1)},classNames:{enter:u.a.FadeEnter,enterActive:u.a.FadeEnterActive,exit:u.a.FadeExit,exitActive:u.a.FadeExitActive}},c?a.a.createElement(Ue,{toggleTheme:n,theme:t}):a.a.createElement(K,null)))),a.a.createElement(De,{open:""!==i,error:i}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=n(35),Je={user:null,loading:!1,error:""},He=function(e){return h(e,{loading:!0})},Qe=function(e,t){return h(e,{user:t,loading:!1,error:""})},Ve=function(e,t){return h(e,{loading:!1,error:t})},We=function(e){return h(e,{user:null})},Ye=function(e,t){return h(e,{user:t})},$e=function(e){return h(e,{error:"Only JPG/PNG files under 4MB allowed."})},qe=function(e){return h(e,{error:""})},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN_USERNAME_START":return He(e);case"SIGN_IN_USERNAME_SUCCESS":return Qe(e,t.payload);case"SIGN_IN_USERNAME_FAILED":return Ve(e,t.payload);case"LOGOUT_USER_FAILED":case"LOGOUT_USER_SUCCESS":return We(e);case"GET_USER_LOCAL_STORAGE_SUCCESS":return Ye(e,t.payload);case"CLOSE_SNACKBAR":return qe(e);case"FILE_VALIDATION_ERROR":return $e(e);default:return e}},Ze=Object(Ke.c)({authReducer:Xe}),et=n(165),tt=n(23),nt=n.n(tt),rt=n(16),at=n(106),ot=n(86),ct=n(87),it=n(166),ut=n(164),st=n(163),lt=n.n(st),mt=new(function(e){Object(it.a)(n,e);var t=Object(ut.a)(n);function n(){return Object(ot.a)(this,n),t.apply(this,arguments)}return Object(ct.a)(n,[{key:"signinNewUser",value:function(){var e=Object(at.a)(nt.a.mark((function e(t){var n;return nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.post("/user",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteUser",value:function(){var e=Object(at.a)(nt.a.mark((function e(t){var n;return nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delete("/user/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(function(){function e(){Object(ot.a)(this,e),this.api=void 0,this.apiConfig={timeout:15e3,baseURL:te,headers:{common:{"Content-Type":"application/json",Accept:"application/json"}}},this.api=lt.a.create(this.apiConfig),this.api.interceptors.response.use((function(e){return e}),(function(e){var t;return Promise.reject(null===(t=e.response)||void 0===t?void 0:t.data.message)}))}return Object(ct.a)(e,[{key:"get",value:function(e,t){return this.api.get(e,t)}},{key:"post",value:function(e,t,n){return this.api.post(e,t,n)}},{key:"delete",value:function(e,t){return this.api.delete(e,t)}},{key:"put",value:function(e,t,n){return this.api.put(e,t,n)}}]),e}())),dt=nt.a.mark(bt),ft=nt.a.mark(gt),pt=nt.a.mark(Et);function bt(e){var t;return nt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(rt.d)(v("SIGN_IN_USERNAME_START"));case 2:return n.next=4,Object(rt.c)(500);case 4:return n.prev=4,n.next=7,Object(rt.b)((function(){return mt.signinNewUser(e.payload)}));case 7:return t=n.sent,n.next=10,Object(rt.b)([localStorage,"setItem"],"currentUser",JSON.stringify(t));case 10:return n.next=12,Object(rt.d)(j(t));case 12:n.next=18;break;case 14:return n.prev=14,n.t0=n.catch(4),n.next=18,Object(rt.d)(v("SIGN_IN_USERNAME_FAILED",n.t0));case 18:case"end":return n.stop()}}),dt,null,[[4,14]])}function gt(e){return nt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(rt.b)((function(){return mt.deleteUser(e.payload)}));case 3:return t.next=5,Object(rt.d)(v("LOGOUT_USER_SUCCESS"));case 5:t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),t.next=11,Object(rt.d)(v("LOGOUT_USER_FAILED",t.t0));case 11:return t.next=13,Object(rt.b)([localStorage,"removeItem"],"currentUser");case 13:return t.next=15,Object(rt.c)(300);case 15:case"end":return t.stop()}}),ft,null,[[0,7]])}function Et(){var e;return nt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(rt.b)([localStorage,"getItem"],"currentUser");case 2:return e=t.sent,t.next=5,Object(rt.d)(S(JSON.parse(e)));case 5:case"end":return t.stop()}}),pt)}var _t=[Object(rt.e)("SIGN_IN_USERNAME",bt),Object(rt.e)("LOGOUT_USER",gt),Object(rt.e)("GET_USER_LOCAL_STORAGE",Et)],ht=nt.a.mark(vt);function vt(){return nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(rt.a)(Object(X.a)(_t));case 2:case"end":return e.stop()}}),ht)}var Ot=Ke.d,jt=Object(et.a)(),St=Object(Ke.e)(Ze,Ot(Object(Ke.a)(jt)));jt.run(vt),c.a.render(a.a.createElement(b.a,{store:St},a.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={ChatRoom:"ChatRoom_ChatRoom__2tpGe",Header:"ChatRoom_Header__3E4lK",Menu:"ChatRoom_Menu__2CRSc",ThemeToggle:"ChatRoom_ThemeToggle__1zgwO",Section:"ChatRoom_Section__6-9S1",Main:"ChatRoom_Main__1K5vd",Form:"ChatRoom_Form__29LCh",Textarea:"ChatRoom_Textarea__3LHEf",Button:"ChatRoom_Button__19xRd"}},45:function(e,t,n){e.exports={MessageContainer:"MessagesItem_MessageContainer__2wFhC",Sent:"MessagesItem_Sent__QgY-e",MessageTop:"MessagesItem_MessageTop__3iBig",MessageBody:"MessagesItem_MessageBody__14EaL",Received:"MessagesItem_Received__10TRj",Username:"MessagesItem_Username__1RO6m",Timestamp:"MessagesItem_Timestamp__l3oES"}},53:function(e,t,n){e.exports={App:"App_App__34i3s",FadeEnter:"App_FadeEnter__1uJf1",FadeExit:"App_FadeExit__25tik",FadeEnterActive:"App_FadeEnterActive__1Ptu1",FadeExitActive:"App_FadeExitActive__2WYg3"}},54:function(e,t,n){e.exports={Login:"Login_Login__3N-YQ",Form:"Login_Form__pnWm8",FadeEnter:"Login_FadeEnter__1x6ph",FadeExit:"Login_FadeExit__3QafQ",FadeEnterActive:"Login_FadeEnterActive__R7AxY",FadeExitActive:"Login_FadeExitActive__1UMCt"}},62:function(e,t,n){e.exports={Form:"LoginForm_Form__2tA_z",Input:"LoginForm_Input__1tAcP",ButtonContainer:"LoginForm_ButtonContainer__1-cGl",UploadButton:"LoginForm_UploadButton__1uKGu"}}},[[175,1,2]]]);
//# sourceMappingURL=main.f3d2377a.chunk.js.map