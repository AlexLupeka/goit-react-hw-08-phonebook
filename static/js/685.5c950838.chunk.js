"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[685],{4169:function(n,e,r){r.d(e,{W:function(){return a}});var t,o=r(168),a=r(7402).Z.div(t||(t=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0px auto;\n  // width: 500px;\n  height: 100%;\n  align-items: center;\n  // background-color: #ffffff;\n  // border-radius: 15px;\n  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n  // rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  overflow: hidden;\n  z-index: -1;\n  // background-color: #d5dde8d9;\n  padding: 50px 20px 50px 20px;\n"])))},9685:function(n,e,r){r.r(e),r.d(e,{default:function(){return en}});var t,o,a,i,s,c=r(2791),d=r(9434),p=r(4270),l=r(5162),u=r(168),x=r(7402),f=x.Z.ul(t||(t=(0,u.Z)(["\npadding: 0;\n  color: black;\n  font-weight: 500;\n  font-size: 18px;"]))),b=x.Z.li(o||(o=(0,u.Z)(["\nmargin: 5px 0 5px 30%;\n  width: 420px;\n  display: flex;\n  justify-content: space-between;\n  "]))),h=x.Z.p(a||(a=(0,u.Z)(["\nmargin: 5px 0 5px 0;\nfont-size: 20px;"]))),g=x.Z.span(i||(i=(0,u.Z)(["\nfont-size: 20px;\n  font-weight: 800;"]))),m=x.Z.button(s||(s=(0,u.Z)(["\n  width: 80px;\n  height: 30px;\n  cursor: pointer;\n  display: inline-block;\n  margin: 5px 0 5px 0;\n  background-color: #ff6b08;\n  border: none;\n  border-radius: 15px;\n  text-transform: uppercase;\n  color: white;\n  outline: none;\n  transition: all 250ms ease-in-ou;\n  &:hover {\n  background-color: #FF0000;\n}"]))),Z=r(6916),v=function(n){return n.contacts.items},w=function(n){return n.filter},j=function(n){return n.contacts.isLoading},k=function(n){return n.contacts.error},y=(0,Z.P1)([w,v],(function(n,e){var r=n.toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))})),z=r(3329);function C(){var n=(0,d.I0)(),e=(0,d.v9)(y);return(0,z.jsx)(f,{children:e.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,z.jsxs)(b,{children:[(0,z.jsxs)(h,{children:[t,": ",(0,z.jsx)(g,{children:o})]}),(0,z.jsx)(m,{type:"button",onClick:function(){return n((0,l.GK)(r))},children:"Delete"})]},t)}))})}var A,F,L=r(2007),q=r.n(L),N=r(7574),I=x.Z.ul(A||(A=(0,u.Z)(["\ndisplay: block;\npadding: 0;\nmargin: 5px 0 30px 0px;\n  color: black;\n  font-weight: 600;\n  font-size: 25px;\n  text-align: center;"]))),S=x.Z.input(F||(F=(0,u.Z)(["\ndisplay: block;\n  margin: 0 auto;\n  padding: 10px;\n  width: 320px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 15px;\n  cursor: pointer;\n  font-size: 15px;\n  &:focus {\n  outline-color: orange;\n}"])));function _(){var n=(0,d.v9)(w),e=(0,d.I0)();return(0,z.jsx)(I,{children:(0,z.jsx)(S,{type:"text",value:n,onChange:function(n){e((0,N.Tv)(n.currentTarget.value))},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"\ud83d\udd0d Find contacts by name"})})}_.prototype={value:q().string.isRequired,onChange:q().func.isRequired};var B,P,D,J,K,M=r(9439),R=x.Z.form(B||(B=(0,u.Z)(["\nmargin: 0 0 20px 0;"]))),T=x.Z.label(P||(P=(0,u.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  // padding-left: 30%;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;"]))),W=x.Z.input(D||(D=(0,u.Z)(["\ndisplay: block;\n  margin-top: 10px;\n  padding: 10px;\n  width: 320px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 15px;\n  cursor: pointer;\n  font-size: 15px;\n  &:focus {\n  outline-color: #ff6b08;\n}"]))),$=x.Z.button(J||(J=(0,u.Z)(["\nposition: relative;\nleft: 50%;\ntransform: translate(-50%, 0);\npadding: 10px 20px;\n  background-color: #ff6b08;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  border-radius: 15px;\n  outline: none;\n  transition: all 200ms ease-in-out;\n  cursor: pointer;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n  &:hover {\n  background-color: #FF0000;\n}"]))),E=r(4169);function G(){var n=(0,c.useState)(""),e=(0,M.Z)(n,2),r=e[0],t=e[1],o=(0,c.useState)(""),a=(0,M.Z)(o,2),i=a[0],s=a[1],p=(0,d.v9)(v),u=(0,d.I0)();return(0,z.jsx)(E.W,{children:(0,z.jsxs)(R,{onSubmit:function(n){n.preventDefault(),p.find((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?alert("".concat(r," is already in contacts")):p.find((function(n){return n.number.toLowerCase()===i.toLowerCase()}))?alert("".concat(i," is already in contacts")):(u((0,l.uK)({name:r,number:i})),t(""),s(""))},children:[(0,z.jsx)(T,{children:(0,z.jsx)(W,{type:"text",name:"name",onChange:function(n){t(n.target.value)},value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"\ud83d\ude4d\u200d\u2642\ufe0f Name"})}),(0,z.jsx)(T,{children:(0,z.jsx)(W,{type:"tel",name:"number",onChange:function(n){s(n.target.value)},value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"\u260e\ufe0f Number"})}),(0,z.jsx)($,{type:"submit",children:"Add contact"})]})})}var Y=x.Z.h2(K||(K=(0,u.Z)(["\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 30px;\n  color: rgb(26, 45, 94);\n  text-transform: uppercase;\n"])));function H(n){var e=n.title,r=n.children;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(Y,{children:e}),r]})}var O,Q,U=r(6286),V=x.Z.div(O||(O=(0,u.Z)(["\nposition: fixed;\ntop: 40%;\nleft: 40%;\nmargin: auto;\nz-index: 2;\n"])));function X(){return(0,z.jsx)(V,{children:(0,z.jsx)(U.NB,{visible:!0,height:"300",width:"300",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:{},colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}var nn=x.Z.div(Q||(Q=(0,u.Z)(["\nborder-radius: 15px;\n    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px;\n    overflow: hidden;\n    z-index: -1;\n    background-color: rgba(213, 221, 232, 0.85);"])));function en(){var n=(0,d.I0)(),e=(0,d.v9)(j),r=(0,d.v9)(k);return(0,c.useEffect)((function(){n((0,l.yF)())}),[n]),(0,z.jsxs)(nn,{children:[(0,z.jsx)(p.q,{children:(0,z.jsx)("title",{children:"Your contacts"})}),(0,z.jsx)(H,{title:"Phonebook",children:(0,z.jsx)(G,{})}),(0,z.jsxs)(H,{title:"",children:[e&&!r&&(0,z.jsx)(X,{}),(0,z.jsx)(_,{}),(0,z.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=685.5c950838.chunk.js.map