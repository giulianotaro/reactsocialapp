(this.webpackJsonpsocialapp=this.webpackJsonpsocialapp||[]).push([[4],{23:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return r}));n(25);var a="https://edgemony-backend.herokuapp.com",c=function(t){return fetch(a+t).then((function(t){return t.json()}))},s=function(t,e){return fetch(a+t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))},r=function(t){return fetch(a+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(t){return t.json()}))}},26:function(t,e,n){"use strict";var a=n(27),c=n.n(a),s=n(1);e.a=function(t){var e=t.bgColor,n=t.text;return Object(s.jsx)("div",{className:c.a.Modal,style:{background:"".concat(e)},children:Object(s.jsx)("p",{children:n})})}},27:function(t,e,n){t.exports={Modal:"Modal_Modal__32mLz"}},30:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(31),c=n.n(a),s=n(1),r=function(t){var e=t.data||{name:"friend",photo:"https://randomuser.me/api/portraits/lego/0.jpg"};return Object(s.jsxs)("div",{className:c.a.friend,children:[Object(s.jsx)("img",{src:e.photo,alt:e.name}),Object(s.jsx)("p",{children:e.name})]})}},31:function(t,e,n){t.exports={friend:"FriendPreview_friend__3Gjby"}},39:function(t,e,n){t.exports={message:"MessagePreview_message__3j9dl"}},40:function(t,e,n){t.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},41:function(t,e,n){t.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},52:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(0),s=n(30),r=n(49),o=n(51),i=n(1),j=function(t){var e=t.data||{date:new Date};return Object(i.jsx)("p",{children:Object(i.jsx)("small",{children:Object(r.a)(new Date(e.date),new Date,{locale:o.a})})})},d=n(39),u=n.n(d),l=function(t){var e=t.data||{text:"What?",date:new Date,sender:"User"};return Object(i.jsxs)("div",{className:u.a.message,children:[Object(i.jsx)("h5",{children:e.sender}),Object(i.jsx)(j,{data:e}),Object(i.jsx)("p",{children:e.text})]})},h=n(50),b=n(23),f=n(26),p=n(40),x=n.n(p),O=function(t){var e=t.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"},n=Object(c.useState)(!1),s=Object(a.a)(n,2),r=s[0],j=s[1];return Object(i.jsxs)("article",{className:x.a.post,children:[r&&Object(i.jsx)(f.a,{bgColor:"lightcoral",text:"Il post \xe8 stato rimosso"}),Object(i.jsx)("button",{onClick:function(){Object(b.b)("/posts/".concat(t.data.id)).then((function(){})),j(!0),setTimeout((function(){j(!1),window.location.href="/"}),3e3)},className:x.a.deleteBtn,children:"X"}),Object(i.jsx)("h3",{children:e.author}),Object(i.jsx)("p",{children:Object(i.jsx)("small",{children:Object(h.a)(new Date(e.date),new Date,{addSuffix:!0,locale:o.a})})}),Object(i.jsx)("p",{children:e.text}),e.photo?Object(i.jsx)("img",{src:e.photo,alt:e.author}):Object(i.jsx)(i.Fragment,{})]})},m=n(5),_=n(41),g=n.n(_),v=[],w=[],B=[];e.default=function(){var t=Object(c.useState)(v),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(B),j=Object(a.a)(o,2),d=j[0],u=j[1],h=Object(c.useState)(w),f=Object(a.a)(h,2),p=f[0],x=f[1];return Object(c.useEffect)((function(){Object(b.a)("/friends?_limit=4").then((function(t){return r(t)})),Object(b.a)("/messages?_limit=4").then((function(t){return x(t)})),Object(b.a)("/posts").then((function(t){return u(t.reverse())}))}),[]),Object(i.jsxs)("section",{className:g.a.home,children:[Object(i.jsx)("h3",{children:"Bevenuto utente"}),Object(i.jsxs)("div",{className:g.a.grid,children:[Object(i.jsx)("aside",{children:n.map((function(t,e){return Object(i.jsx)(s.a,{data:t},e)}))}),Object(i.jsxs)("main",{children:[Object(i.jsx)(m.b,{to:"/new-post",children:Object(i.jsx)("button",{className:g.a.createPostBtn,children:"+ Create a new post!"})}),d.map((function(t,e){return Object(i.jsx)(O,{data:t},e)}))]}),Object(i.jsx)("aside",{children:p.map((function(t,e){return Object(i.jsx)(l,{data:t},e)}))})]})]})}}}]);
//# sourceMappingURL=4.6555bd90.chunk.js.map