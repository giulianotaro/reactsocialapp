(this.webpackJsonpsocialapp=this.webpackJsonpsocialapp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},function(e,t,n){e.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},,,function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={Friends:"Friends_Friends__2IY9Z"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},function(e,t,n){},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(23),r=n.n(s),i=n(13),o=(n(35),n(5)),j=n(22),u=n(4),l=n(19),d=n.n(l),b=n(0),h=function(e){var t=e.name||"App",n=e.links||[{link:"",label:"Link"}],a=function(e){var t=Object(u.h)(e);return Object(u.f)({path:t.pathname,end:!0})?d.a.active:""};return Object(b.jsxs)("header",{className:d.a.header,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:n.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{className:a(e.link),to:e.link,children:e.label})},t)}))})})]})},O=n(24),x=n.n(O),f=function(){var e=(new Date).getFullYear;return Object(b.jsxs)("footer",{className:x.a.footer,children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:[" Copyright Giulia Notaro ",e," "]})]})},p="https://edgemony-backend.herokuapp.com",m=function(e){return fetch(p+e).then((function(e){return e.json()}))},v=n(20),_=n.n(v),g=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),d=l[0],h=l[1],O=Object(a.useState)({}),x=Object(o.a)(O,2),f=x[0],m=x[1];return Object(a.useEffect)((function(){m({author:n,text:d,date:(new Date).toISOString(),photo:i})}),[n,i,d]),Object(b.jsx)("div",{className:_.a.createPost,children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:_.a.__author,children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"author",id:"author",type:"text",placeholder:"Author",required:!0}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:i,name:"img",id:"img",type:"text",placeholder:"Img URL"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){var t;e.preventDefault(),t=f,fetch(p+"/posts",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})),alert("Il post `e stato creato!")},children:"SEND"})]}),Object(b.jsx)("textarea",{value:d,onChange:function(e){return h(e.target.value)},name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message",required:!0})]})})},w=function(){return Object(b.jsx)(g,{})},y=function(){return Object(b.jsx)("h1",{children:"Messagesssss"})},C=n(25),k=n.n(C),S=function(e){var t=e.data||{name:"friend",photo:"https://randomuser.me/api/portraits/lego/0.jpg"};return Object(b.jsxs)("div",{className:k.a.friend,children:[Object(b.jsx)("img",{src:t.photo,alt:t.name}),Object(b.jsx)("p",{children:t.name})]})},N=n(26),P=n.n(N),D=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){m("/friends").then((function(e){return c(e)}))}),[]),Object(b.jsx)("div",{className:P.a.Friends,children:n.map((function(e){return Object(b.jsx)(S,{data:e},e.id)}))})},B=n(38),F=n(40),E=function(e){var t=e.data||{date:new Date};return Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:Object(B.a)(new Date(t.date),new Date,{locale:F.a})})})},H=n(27),I=n.n(H),M=function(e){var t=e.data||{text:"What?",date:new Date,sender:"User"};return Object(b.jsxs)("div",{className:I.a.message,children:[Object(b.jsx)("h5",{children:t.sender}),Object(b.jsx)(E,{data:t}),Object(b.jsx)("p",{children:t.text})]})},G=n(39),q=n(21),L=n.n(q),A=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"};return Object(b.jsxs)("article",{className:L.a.post,children:[Object(b.jsx)("button",{onClick:function(){var t;(t="/posts/".concat(e.data.id),fetch(p+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))).then((function(){})),alert("Post by ".concat(e.data.author," was deleted")),window.location.href="/"},className:L.a.deleteBtn,children:"X"}),Object(b.jsx)("h3",{children:t.author}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:Object(G.a)(new Date(t.date),new Date,{addSuffix:!0,locale:F.a})})}),Object(b.jsx)("p",{children:t.text}),t.photo?Object(b.jsx)("img",{src:t.photo,alt:t.author}):Object(b.jsx)(b.Fragment,{})]})},J=n(17),T=n.n(J),U=[],X=[],Y=[],R=function(){var e=Object(a.useState)(U),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(Y),r=Object(o.a)(s,2),j=r[0],u=r[1],l=Object(a.useState)(X),d=Object(o.a)(l,2),h=d[0],O=d[1];return Object(a.useEffect)((function(){m("/friends?_limit=4").then((function(e){return c(e)})),m("/messages?_limit=4").then((function(e){return O(e)})),m("/posts").then((function(e){return u(e.reverse())}))}),[]),Object(b.jsxs)("section",{className:T.a.home,children:[Object(b.jsx)("h3",{children:"Bevenuto utente"}),Object(b.jsxs)("div",{className:T.a.grid,children:[Object(b.jsx)("aside",{children:n.map((function(e,t){return Object(b.jsx)(S,{data:e},t)}))}),Object(b.jsxs)("main",{children:[Object(b.jsx)(i.b,{to:"/new-post",children:Object(b.jsx)("button",{className:T.a.createPostBtn,children:"+ Create a new post!"})}),j.map((function(e,t){return Object(b.jsx)(A,{data:e},t)}))]}),Object(b.jsx)("aside",{children:h.map((function(e,t){return Object(b.jsx)(M,{data:e},t)}))})]})]})},W=n(28),Z=n.n(W),Q=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)({}),l=Object(o.a)(u,2),d=l[0],h=l[1];return Object(b.jsx)("div",{className:Z.a.Login,children:Object(b.jsx)("form",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"user",id:"user",type:"text",placeholder:"username",required:!0}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:i,name:"pass",id:"pass",type:"text",placeholder:"Password"}),Object(b.jsx)("button",{type:"submit",onClick:function(){return h(d(!0))},children:"ACCEDI"})]})})})},V={name:"Feisbrut",nav:[{link:"/",label:"Home"},{link:"/messages",label:"Messages"},{link:"/friends",label:"Friends"},{link:"/login",label:"Login"}],friendsPreview:[]},z=function(e,t){return"change-name"===t.type?Object(j.a)(Object(j.a)({},e),{},{name:"Feisbell"}):e};var K=function(){var e=Object(a.useReducer)(z,V),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{name:n.name,links:n.nav}),Object(b.jsx)("button",{onClick:function(){return c({type:"change-name"})},children:"Cambia nome"}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(R,{})}),Object(b.jsx)(u.a,{path:"/new-post",element:Object(b.jsx)(w,{})}),Object(b.jsx)(u.a,{path:"/messages",element:Object(b.jsx)(y,{})}),Object(b.jsx)(u.a,{path:"/friends",element:Object(b.jsx)(D,{})}),Object(b.jsx)(u.a,{path:"/login",element:Object(b.jsx)(Q,{})})]}),Object(b.jsx)(f,{})]})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(K,{})})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.0d7ec81d.chunk.js.map