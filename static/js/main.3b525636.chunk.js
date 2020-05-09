(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"App_container__16xz_"}},14:function(e,t,n){e.exports={titleSection:"Section_titleSection__3sOBD"}},15:function(e,t,n){e.exports={filter:"Filter_filter__1E5tH"}},17:function(e,t,n){e.exports=n(30)},2:function(e,t,n){e.exports={table:"ContactsList_table__1Z94X",row:"ContactsList_row__B88cg",headrow:"ContactsList_headrow__2FSb3"}},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),o=n.n(r),l=n(16),u=n(1),i=n(5),s=n(6),m=n(8),h=n(7),f=n(12),d=n.n(f),b=n(13),p=n.n(b),E=n(14),v=function(e){var t=e.title,n=e.children;return c.a.createElement("section",{className:E.titleSection},c.a.createElement("h2",null,t),n)},C=function(e){var t=e.message;return c.a.createElement("p",null,t,"!")},g=n(2);var _=function(e){var t=e.index,n=e.name,a=e.number,r=e.onDeleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("td",null,t),c.a.createElement("td",null,n),c.a.createElement("td",null,a),c.a.createElement("td",null,c.a.createElement("button",{type:"button",onClick:r},"Delete")))},y=function(e){var t=e.contacts,n=e.onDeleteContact;return c.a.createElement("table",{className:g.table},c.a.createElement("thead",null,c.a.createElement("tr",{className:"".concat(g.row," ").concat(g.headrow)},c.a.createElement("th",null,"#"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Number"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map((function(e,t){var a=e.id,r=e.name,o=e.number;return c.a.createElement("tr",{key:a,className:g.row,style:{backgroundColor:"".concat(t%2===1?"#fff":"#ecf2f3"," ")}},c.a.createElement(_,{i:t+1,name:r,number:o,onDeleteContact:function(){return n(a)}}))}))))},S=n(15),w=function(e){var t=e.value,n=e.onChangeFilter;return c.a.createElement("div",{className:S.filter},c.a.createElement("p",null,"Find contacts by name"),c.a.createElement("input",{type:"text",value:t,onChange:n,placeholder:"Enter name..."}))},O=n(4),N=n(9),j=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(Object(u.a)({},e.state)),e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:N.form},c.a.createElement("div",null,c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",placeholder:"Enter contact`s name",value:t,onChange:this.handleChange,name:"name"})),c.a.createElement("div",null,c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",placeholder:"Enter contact`s name",value:n,onChange:this.handleChange,name:"number"})),c.a.createElement("button",{className:N.button,type:"submit"},"Add contact"))}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.addContact=function(t){if(e.state.contacts.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts"));var n=Object(u.a)(Object(u.a)({},t),{},{id:d.a.generate()});e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[n])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return c.a.createElement("div",{className:p.a.container},c.a.createElement("h1",null,"goit-react-hw-03-phonebook"),c.a.createElement(v,{title:"Phonebook"},c.a.createElement(j,{onAddContact:this.addContact})),c.a.createElement(v,{title:"Contacts"},this.state.contacts.length>2&&c.a.createElement(w,{value:n,onChangeFilter:this.changeFilter}),a.length>0?c.a.createElement(y,{contacts:a,onDeleteContact:this.deleteContact}):c.a.createElement(C,{message:"Contacts for query not found"})))}}]),n}(a.Component);o.a.render(c.a.createElement(k,null),document.querySelector("#root"))},9:function(e,t,n){e.exports={form:"CreateContactForm_form__1IKsq",button:"CreateContactForm_button__v34X3"}}},[[17,1,2]]]);
//# sourceMappingURL=main.3b525636.chunk.js.map