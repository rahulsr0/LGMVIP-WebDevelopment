(this["webpackJsonptask-2"]=this["webpackJsonptask-2"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),r=(s(5),s(4)),l=s.n(r),d=s(7),o=s(8),j=s(9),h=s(2),u=s(11),b=s(10),m=(s(17),s(0)),p=function(e){var t=e.loading,s=e.clients;return t?Object(m.jsx)("img",{src:"https://acegif.com/wp-content/uploads/loading-10.gif",alt:"Loading Please Wait...",className:"loader"}):Object(m.jsx)("div",{children:Object(m.jsx)("div",{id:"page",children:Object(m.jsx)("div",{className:"row",children:s.map((function(e){return Object(m.jsx)("div",{className:"col-sm-6 col-md-6 col-lg-4",children:Object(m.jsx)("div",{className:"grid",children:Object(m.jsx)("div",{className:"component",children:Object(m.jsxs)("div",{className:"user",children:[Object(m.jsx)("img",{src:e.avatar,alt:e.avatar}),Object(m.jsxs)("h1",{className:"user-name",children:[" ",e.first_name," ",e.last_name]}),Object(m.jsx)("p",{className:"user-email",children:e.email}),Object(m.jsxs)("p",{className:"user-id",children:["ID: ",e.id]})]})})})})}))})})})},g=s.p+"static/media/api.eed84d91.png",O=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(o.a)(this,s),(c=t.call(this,e)).state={clients_data:[],loading:!1},c.displayUser=c.displayUser.bind(Object(h.a)(c)),c}return Object(j.a)(s,[{key:"displayUser",value:function(){this.setState({loading:!0}),document.getElementById("block").style.display="none",setTimeout(Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,this.setState({clients_data:s.data,loading:!1});case 7:case"end":return e.stop()}}),e,this)}))).bind(this),4200)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("nav",{className:"navbar ml-auto",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h3",{className:"Heading",children:"How to Fetch Data using API"}),Object(m.jsx)("button",{onClick:this.displayUser,children:"Fetch Users "})]})}),Object(m.jsx)(p,{loading:this.state.loading,clients:this.state.clients_data}),Object(m.jsxs)("div",{id:"block",children:[Object(m.jsx)("img",{src:g,alt:""})," \xa0",Object(m.jsxs)("div",{children:["Just click on \xa0",Object(m.jsx)("span",{id:"fetch",children:'"Fetch Users" '})," to fetch.\xa0\xa0",Object(m.jsx)("img",{src:"https://media.giphy.com/media/TiroX8dZ1RSVvciB6D/giphy.gif",alt:"No"})]})]})]})}}]),s}(c.Component),x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()},5:function(e,t,s){}},[[19,1,2]]]);
//# sourceMappingURL=main.a82652ef.chunk.js.map