(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),s=c.n(n),a=c(35),r=c.n(a),o=(c(43),c.p,c(44),c(14)),l=c(6),d=c(8),j=c.n(d),m=c(15),b=c(2),u=c.n(b),v=c(5),O=c(3),h=c(4),x=c.n(h),f=c(16);function p(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=(t[1],Object(l.f)()),a=Object(f.a)(),r=a.register,o=a.handleSubmit,d=(a.watch,a.errors),m=function(){var e=Object(v.a)(u.a.mark((function e(t){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return console.log(t),c=localStorage.getItem("authToken"),e.next=5,j.a.post("/invoice/createInvoice",t,{headers:{Authorization:"Bearer ".concat(c)}});case 5:(i=e.sent)&&(console.log(i),s.go(0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"create-invoice",children:Object(i.jsxs)("div",{className:"login-form",children:[Object(i.jsx)("div",{className:"title",children:"Add Invoice"}),Object(i.jsxs)("form",{onSubmit:o(m),children:[Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{children:"Name"}),Object(i.jsx)("input",{name:"name",ref:r({required:!0})}),d.name&&"required"===d.name.type&&Object(i.jsx)("div",{className:"form-error",children:"*Name is required"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{name:"amount",type:"number",ref:r({required:!0})}),d.amount&&"required"===d.amount.type&&Object(i.jsx)("div",{className:"form-error",children:"*Amount is required"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{children:"Image"}),Object(i.jsx)("input",{name:"imageFile",ref:r({required:!0})}),d.imageFile&&"required"===d.imageFile.type&&Object(i.jsx)("div",{className:"form-error",children:"*Image is required"})]}),Object(i.jsx)("div",{className:"login-form-element",children:Object(i.jsx)("div",{className:"form-error",children:c})}),Object(i.jsx)("div",{className:"submit-button",children:Object(i.jsx)("button",{className:"button-style",type:"submit",children:"Create"})})]})]})})}function N(e){var t=e.userInvoices,c=Object(n.useState)(x()("2000-01-01").format("YYYY-MM-DD")),s=Object(O.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(x()().format("YYYY-MM-DD")),l=Object(O.a)(o,2),d=l[0],j=l[1],m=Object(n.useState)(!1),b=Object(O.a)(m,2),u=b[0],v=b[1];console.log(d),console.log(a),x()("2016-10-30").isBetween(a,d)&&console.log("working");var h=0;return Object(i.jsxs)("div",{children:[u?Object(i.jsx)(p,{}):Object(i.jsxs)("div",{className:"invoice-box",children:[Object(i.jsx)("div",{className:"invoice-titles",children:"APPROVED INVOICES"}),Object(i.jsxs)("div",{className:"home-number-invoices",children:[Object(i.jsx)("div",{children:"Total number of invoices: ".concat(t.length>0?t.filter((function(e){return"APPROVED"===e.status&&x()(e.date).isBetween(a,d)})).length:0)}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Filter"}),Object(i.jsxs)("div",{className:"filter-to-from",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"From: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:a,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"To: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:d,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return j(e.target.value)}})]})]})]})]}),Object(i.jsxs)("div",{className:"home-all-invoice default-title",children:[Object(i.jsx)("div",{className:"invoice-name",children:"Invoice Name"}),Object(i.jsx)("div",{className:"invoice-date",children:"Invoice Date"}),Object(i.jsx)("div",{className:"invoice-amount",children:"Invoice Amount"})]}),t.length>0?t.map((function(e){if("APPROVED"===e.status&&x()(e.date).isBetween(a,d))return Object(i.jsxs)("div",{onClick:function(){console.log("clicked ".concat(e._id))},className:"home-all-invoice",children:[Object(i.jsx)("div",{className:"invoice-name",children:e.name}),Object(i.jsx)("div",{className:"invoice-date",children:x()(e.date).format("DD-MM-YY")}),Object(i.jsx)("div",{className:"invoice-amount",children:e.amount}),(t=e.amount,void(t&&(h+=Number(t))))]},e._id);var t})):Object(i.jsx)("div",{}),Object(i.jsxs)("div",{className:"home-all-invoice default-footer",children:[Object(i.jsx)("div",{children:"Total Amount"}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{children:h})]})]}),Object(i.jsx)("div",{className:"float-add-button",onClick:function(){return v(!u)},children:"Add"})]})}c(69);function g(e){var t=e.invoiceID,c=Object(f.a)(),n=c.register,s=c.handleSubmit,a=(c.watch,c.errors),r=Object(l.f)(),o=function(){var e=Object(v.a)(u.a.mark((function e(c){var i,n,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(c),c=={}){e.next=11;break}for(n in i={},c)""!=c[n]&&(i[n]=c[n]);return console.log(i),console.log({invoiceID:t,updateObj:i}),s=localStorage.getItem("authToken"),e.next=9,j.a.post("/invoice/updateInvoice",{invoiceID:t,updateObj:i},{headers:{Authorization:"Bearer ".concat(s)}});case 9:(a=e.sent)&&(console.log(a),r.go(0));case 11:console.log(t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(u.a.mark((function e(){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=localStorage.getItem("authToken"),e.next=3,j.a.post("/invoice/deleteInvoice",{invoiceID:t},{headers:{Authorization:"Bearer ".concat(c)}});case 3:(i=e.sent)&&(console.log(i),r.go(0)),console.log("delete");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"invoice-option-box",children:Object(i.jsxs)("div",{className:"option-sub-box ",children:[Object(i.jsxs)("div",{className:"login-form",children:[Object(i.jsx)("div",{className:"title ",children:"Update"}),Object(i.jsxs)("form",{onSubmit:s(o),children:[Object(i.jsx)("div",{className:"login-form-element",children:Object(i.jsx)("label",{children:"Only enter data that need to be changed"})}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"",children:"Name"}),Object(i.jsx)("input",{name:"name",ref:n({validate:function(e){return"string"===typeof e}})}),a.name&&"validate"===a.name.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*name must be string"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"",children:"Amount"}),Object(i.jsx)("input",{type:"number",name:"amount",ref:n({})})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"",children:"Image"}),Object(i.jsx)("input",{name:"image",ref:n({})})]}),Object(i.jsx)("div",{className:"login-form-element",children:Object(i.jsx)("div",{className:"option-buttons-box",children:Object(i.jsx)("div",{className:"submit-button",children:Object(i.jsx)("button",{type:"submit",children:"Update"})})})})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"delete-invoice",onClick:function(){return d()},children:"Delete"})})]})})}function I(e){var t=e.userInvoices,c=Object(n.useState)(x()("2000-01-01").format("YYYY-MM-DD")),s=Object(O.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(x()().format("YYYY-MM-DD")),l=Object(O.a)(o,2),d=l[0],j=l[1],m=Object(n.useState)(""),b=Object(O.a)(m,2),u=b[0],v=b[1],h=0;return Object(i.jsxs)("div",{className:"invoice-box",children:[Object(i.jsx)("div",{className:"invoice-titles",children:"PENDING INVOICES"}),Object(i.jsxs)("div",{className:"home-number-invoices",children:[Object(i.jsx)("div",{children:"Total number of invoices: ".concat(t.length>0?t.filter((function(e){return"PENDING"===e.status&&x()(e.date).isBetween(a,d)})).length:0)}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Filter"}),Object(i.jsxs)("div",{className:"filter-to-from",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"From: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:a,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"To: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:d,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return j(e.target.value)}})]})]})]})]}),Object(i.jsxs)("div",{className:"home-all-invoice default-title",children:[Object(i.jsx)("div",{className:"invoice-name",children:"Invoice Name"}),Object(i.jsx)("div",{className:"invoice-date",children:"Invoice Date"}),Object(i.jsx)("div",{className:"invoice-amount",children:"Invoice Amount"})]}),t.length>0?t.map((function(e){if("PENDING"===e.status&&x()(e.date).isBetween(a,d))return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{onClick:function(){!function(e){console.log("clicked ".concat(e._id)),v(""===u?e._id:"")}(e)},className:"home-all-invoice",children:[Object(i.jsx)("div",{className:"invoice-name",children:e.name}),Object(i.jsx)("div",{className:"invoice-date",children:x()(e.date).format("DD-MM-YY")}),Object(i.jsx)("div",{className:"invoice-amount",children:e.amount}),(t=e.amount,void(t&&(h+=Number(t))))]},e._id),u===e._id?Object(i.jsx)("div",{className:"home-all-invoice",children:Object(i.jsx)(g,{invoiceID:e._id})}):Object(i.jsx)("div",{})]});var t})):Object(i.jsx)("div",{}),Object(i.jsxs)("div",{className:"home-all-invoice default-footer",children:[Object(i.jsx)("div",{children:"Total Amount"}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{children:h})]})]})}function Y(e){var t=e.allInvoices,c=Object(n.useState)(x()("2000-01-01").format("YYYY-MM-DD")),s=Object(O.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(x()().format("YYYY-MM-DD")),l=Object(O.a)(o,2),d=l[0],j=l[1],m=Object(n.useState)(0),b=Object(O.a)(m,2),u=(b[0],b[1],0);return console.log(u),Object(i.jsxs)("div",{className:"invoice-box",children:[Object(i.jsx)("div",{className:"invoice-titles",children:"APPROVED INVOICES"}),Object(i.jsxs)("div",{className:"home-number-invoices",children:[Object(i.jsx)("div",{children:"Total number of invoices: ".concat(t.length>0?t.filter((function(e){return"APPROVED"===e.status&&x()(e.date).isBetween(a,d)})).length:0)}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Filter"}),Object(i.jsxs)("div",{className:"filter-to-from",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"From: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:a,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"To: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:d,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return j(e.target.value)}})]})]})]})]}),Object(i.jsxs)("div",{className:"home-all-invoice default-title",children:[Object(i.jsx)("div",{className:"invoice-user",children:"Invoice User"}),Object(i.jsx)("div",{className:"invoice-name",children:"Invoice Name"}),Object(i.jsx)("div",{className:"invoice-date",children:"Invoice Date"}),Object(i.jsx)("div",{className:"invoice-amount",children:"Invoice Amount"})]}),t.length>0?t.map((function(e){if("APPROVED"===e.status&&x()(e.date).isBetween(a,d))return Object(i.jsxs)("div",{onClick:function(){console.log("clicked ".concat(e._id))},className:"home-all-invoice",children:[Object(i.jsx)("div",{className:"invoice-user",children:e.user}),Object(i.jsx)("div",{className:"invoice-name",children:e.name}),Object(i.jsx)("div",{className:"invoice-date",children:x()(e.date).format("DD-MM-YY")}),Object(i.jsx)("div",{className:"invoice-amount",children:e.amount}),(t=e.amount,void(t&&(u+=Number(t))))]},e._id);var t})):Object(i.jsx)("div",{}),Object(i.jsxs)("div",{className:"home-all-invoice default-footer",children:[Object(i.jsx)("div",{children:"Total Amount"}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{children:u})]})]})}function D(e){var t=e.invoiceID,c=Object(l.f)(),n=function(){var e=Object(v.a)(u.a.mark((function e(){var i,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=localStorage.getItem("authToken"),e.next=3,j.a.post("/invoice/approveInvoice",{invoiceID:t},{headers:{Authorization:"Bearer ".concat(i)}});case 3:(n=e.sent)&&(console.log(n),c.go(0)),console.log("approve");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(v.a)(u.a.mark((function e(){var i,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=localStorage.getItem("authToken"),e.next=3,j.a.post("/invoice/rejectInvoice",{invoiceID:t},{headers:{Authorization:"Bearer ".concat(i)}});case 3:(n=e.sent)&&(console.log(n),c.go(0)),console.log("reject");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"invoice-option-box",children:Object(i.jsx)("div",{className:"option-sub-box ",children:Object(i.jsxs)("div",{className:"login-form",children:[Object(i.jsx)("div",{className:"title ",children:"Options"}),Object(i.jsxs)("div",{className:"admin-option",children:[Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-style botton-style-dark light-green",onClick:function(){return n()},children:"Approve"})}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-style botton-style-dark",onClick:function(){return s()},children:"Reject"})})]})]})})})}function w(e){var t=e.allInvoices,c=Object(n.useState)(x()("2000-01-01").format("YYYY-MM-DD")),s=Object(O.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(x()().format("YYYY-MM-DD")),l=Object(O.a)(o,2),d=l[0],j=l[1],m=Object(n.useState)(""),b=Object(O.a)(m,2),u=b[0],v=b[1],h=0;return Object(i.jsxs)("div",{className:"invoice-box",children:[Object(i.jsx)("div",{className:"invoice-titles",children:"PENDING INVOICES"}),Object(i.jsxs)("div",{className:"home-number-invoices",children:[Object(i.jsx)("div",{children:"Total number of invoices: ".concat(t.length>0?t.filter((function(e){return"PENDING"===e.status&&x()(e.date).isBetween(a,d)})).length:0)}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Filter"}),Object(i.jsxs)("div",{className:"filter-to-from",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"From: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:a,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return r(e.target.value)}})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"To: "}),Object(i.jsx)("input",{type:"date",id:"start",name:"trip-start",value:d,min:"2000-01-01",max:x()().format("YYYY-MM-DD"),onChange:function(e){return j(e.target.value)}})]})]})]})]}),Object(i.jsxs)("div",{className:"home-all-invoice default-title",children:[Object(i.jsx)("div",{className:"invoice-user",children:"Invoice User"}),Object(i.jsx)("div",{className:"invoice-name",children:"Invoice Name"}),Object(i.jsx)("div",{className:"invoice-date",children:"Invoice Date"}),Object(i.jsx)("div",{className:"invoice-amount",children:"Invoice Amount"})]}),t.length>0?t.map((function(e){if("PENDING"===e.status&&x()(e.date).isBetween(a,d))return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{onClick:function(){!function(e){console.log("clicked ".concat(e._id)),v(""===u?e._id:"")}(e)},className:"home-all-invoice",children:[Object(i.jsx)("div",{className:"invoice-user",children:e.user}),Object(i.jsx)("div",{className:"invoice-name",children:e.name}),Object(i.jsx)("div",{className:"invoice-date",children:x()(e.date).format("DD-MM-YY")}),Object(i.jsx)("div",{className:"invoice-amount",children:e.amount}),u===e._id?Object(i.jsx)("div",{className:"extend-collapse",children:"-"}):Object(i.jsx)("div",{className:"extend-collapse",children:"+"}),(t=e.amount,void(t&&(h+=Number(t))))]},e._id),u===e._id?Object(i.jsx)("div",{className:"home-all-invoice admin-option-wide",children:Object(i.jsx)(D,{invoiceID:e._id})}):Object(i.jsx)("div",{})]},e._id);var t})):Object(i.jsx)("div",{}),Object(i.jsxs)("div",{className:"home-all-invoice default-footer",children:[Object(i.jsx)("div",{children:"Total Amount"}),Object(i.jsx)("div",{}),Object(i.jsx)("div",{children:h})]})]})}var y=function(){var e=Object(n.useState)({}),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)({}),r=Object(O.a)(a,2),o=r[0],d=r[1],b=Object(n.useState)({}),h=Object(O.a)(b,2),x=h[0],f=h[1],p=Object(n.useState)(0),g=Object(O.a)(p,2),D=(g[0],g[1],Object(n.useState)(!1)),y=Object(O.a)(D,2),k=y[0],S=y[1],M=Object(l.f)();function A(){return(A=Object(v.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/invoice/viewInvoices");case 2:(t=e.sent)&&(d(t.data),console.log(t.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(v.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("authToken"))&&console.log("token"),e.next=4,j.a.post("/invoice/viewInvoice",{},{headers:{Authorization:"Bearer ".concat(t)}});case 4:(c=e.sent)&&f(c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){null!=localStorage.getItem("authToken")&&(s(Object(m.a)(localStorage.getItem("authToken"))),c&&(function(){A.apply(this,arguments)}(),function(){P.apply(this,arguments)}()))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"home-box",children:[Object(i.jsxs)("div",{className:"home-title",children:[Object(i.jsxs)("div",{className:"home-username",children:[Object(i.jsx)("div",{className:"home-username-ele",children:"User: ".concat(c.email)}),Object(i.jsx)("div",{className:"home-username-ele",children:" Id: ".concat(c.id)})]}),Object(i.jsxs)("div",{className:"home-logout",children:[Object(i.jsx)("button",{className:"button-style",onClick:function(){return S(!k)},children:k?"Invoices":"Pending"}),Object(i.jsx)("button",{className:"button-style botton-style-dark ",onClick:function(){return localStorage.removeItem("authToken"),void M.push("/")},children:"Logout"})]})]}),"admin@gmail.com"===c.email?Object(i.jsx)("div",{className:"home-body",children:k?Object(i.jsx)(w,{allInvoices:o}):Object(i.jsx)(Y,{allInvoices:o})}):Object(i.jsx)("div",{className:"home-body",children:k?Object(i.jsx)(I,{userInvoices:x}):Object(i.jsx)(N,{userInvoices:x})})]}),Object(i.jsx)("div",{className:"add-invoice"})]})};function k(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],s=t[1],a=Object(l.f)(),r=Object(f.a)(),o=r.register,d=r.handleSubmit,m=(r.watch,r.errors),b=function(){var e=Object(v.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/users/login",t);case 2:(c=e.sent)&&(c.data.token?(localStorage.setItem("authToken",c.data.token),a.push("/Home")):s(c.data.errors.user));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{className:"login-form",children:[Object(i.jsx)("div",{className:"title",children:"Login"}),Object(i.jsxs)("form",{onSubmit:d(b),children:[Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{children:"Email"}),Object(i.jsx)("input",{name:"email",ref:o({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),m.email&&"required"===m.email.type&&Object(i.jsx)("div",{className:"form-error",children:"*Email is required"}),m.email&&"pattern"===m.email.type&&Object(i.jsx)("div",{className:"form-error",children:"*Invalid email"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{children:"Password"}),Object(i.jsx)("input",{name:"password",type:"password",ref:o({required:!0})}),m.password&&Object(i.jsx)("div",{className:"form-error",children:"*Password is required"})]}),Object(i.jsx)("div",{className:"login-form-element",children:Object(i.jsx)("div",{className:"form-error",children:c})}),Object(i.jsx)("div",{className:"submit-button",children:Object(i.jsx)("button",{className:"button-style",type:"submit",children:"Login"})})]})]})}function S(){var e=Object(f.a)(),t=e.register,c=e.handleSubmit,s=e.watch,a=e.errors,r=Object(n.useState)(""),o=Object(O.a)(r,2),d=(o[0],o[1]),m=Object(l.f)(),b=function(){var e=Object(v.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/users/register",t);case 2:(c=e.sent)&&(c.data.token?(localStorage.setItem("authToken",c.data.token),m.push("/Home")):(console.log(c.data.errors.user),d(c.data.errors.user)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){return s("password")===s("confirmPassword")};return Object(i.jsxs)("div",{className:"login-form",children:[Object(i.jsx)("div",{className:"title signup-title",children:"Signup"}),Object(i.jsxs)("form",{onSubmit:c(b),children:[Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"signup-title",children:"Email"}),Object(i.jsx)("input",{name:"email",ref:t({required:!0,pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),a.email&&"required"===a.email.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Email is required"}),a.email&&"pattern"===a.email.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Invalid email"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"signup-title",children:"Password"}),Object(i.jsx)("input",{name:"password",type:"password",ref:t({required:!0,validate:h})}),a.password&&"required"===a.password.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Password is required"}),a.password&&"validate"===a.password.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Password must be same"})]}),Object(i.jsxs)("div",{className:"login-form-element",children:[Object(i.jsx)("label",{className:"signup-title",children:"Confirm Password"}),Object(i.jsx)("input",{name:"confirmPassword",type:"password",ref:t({required:!0,validate:h})}),a.confirmPassword&&"required"===a.password.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Password is required"}),a.password&&"validate"===a.password.type&&Object(i.jsx)("div",{className:"form-error signup-error",children:"*Password must be same"})]}),Object(i.jsx)("div",{className:"submit-button",children:Object(i.jsx)("button",{className:"button-style botton-style-dark ",type:"submit",children:"Signup"})})]})]})}function M(){return Object(i.jsxs)("div",{className:"login-box",children:[Object(i.jsx)("div",{className:"login-sub-box",children:Object(i.jsx)(k,{})}),Object(i.jsx)("div",{className:"vertical-line"}),Object(i.jsx)("div",{className:"login-sub-box signup-box ",children:Object(i.jsx)(S,{})})]})}c(21),c(37);var A=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"header-navbar",children:Object(i.jsx)("div",{className:"app-title",children:"Invoice Tracker"})}),Object(i.jsx)(l.b,{exact:!0,path:"/",component:M}),Object(i.jsx)(l.b,{exact:!0,path:"/Home",children:Object(i.jsx)(y,{})})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.a7e9d993.chunk.js.map