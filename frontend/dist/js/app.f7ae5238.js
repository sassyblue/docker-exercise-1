(function(t){function e(e){for(var o,s,l=e[0],r=e[1],c=e[2],d=0,f=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,l=1;l<n.length;l++){var r=n[l];0!==i[r]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},a=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"24c9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("To-Do List")]),n("to-do-form",{on:{"todo-added":t.addToDo}}),n("h2",{ref:"listSummary",attrs:{id:"list-summary",tabindex:"-1"}},[t._v(t._s(t.listSummary))]),n("ul",{staticClass:"stack-large",attrs:{"aria-labelledby":"list-summary"}},t._l(t.ToDoItems,(function(e){return n("li",{key:e.id},[n("to-do-item",{attrs:{label:e.label,done:e.done,id:e.id},on:{"checkbox-changed":function(n){return t.updateDoneStatus(e.id)},"item-deleted":function(n){return t.deleteToDo(e.id)},"item-edited":function(n){return t.editToDo(e.id,n)}}})],1)})),0)],1)},a=[],s=(n("99af"),n("4de4"),n("7db0"),n("c740"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isEditing?n("to-do-item-edit-form",{attrs:{id:t.id,label:t.label},on:{"item-edited":t.itemEdited,"edit-cancelled":t.editCancelled}}):n("div",{staticClass:"stack-small"},[n("div",{staticClass:"custom-checkbox"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:t.id},domProps:{checked:t.isDone},on:{change:function(e){return t.$emit("checkbox-changed")}}}),n("label",{staticClass:"checkbox-label",attrs:{for:t.id}},[t._v(t._s(t.label))])]),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn btn__danger",attrs:{type:"button"},on:{click:t.deleteToDo}},[t._v(" Delete "),n("span",{staticClass:"visually-hidden"},[t._v(t._s(t.label))])])])])}),l=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"stack-small",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",[n("label",{staticClass:"edit-label"},[t._v('Edit Name for "'+t._s(t.label)+'"')]),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.newLabel,expression:"newLabel",modifiers:{lazy:!0,trim:!0}}],ref:"labelInput",attrs:{id:t.id,type:"text",autocomplete:"off"},domProps:{value:t.newLabel},on:{change:function(e){t.newLabel=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"btn-group"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.onCancel}},[t._v(" Cancel "),n("span",{staticClass:"visually-hidden"},[t._v("editing "+t._s(t.label))])]),n("button",{staticClass:"btn btn__primary",attrs:{type:"submit"}},[t._v(" Save "),n("span",{staticClass:"visually-hidden"},[t._v("edit for "+t._s(t.label))])])])])},c=[],u={props:{label:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{newLabel:this.label}},methods:{onSubmit:function(){this.newLabel&&this.newLabel!==this.label&&this.$emit("item-edited",this.newLabel)},onCancel:function(){this.$emit("edit-cancelled")}},mounted:function(){var t=this.$refs.labelInput;t.focus()}},d=u,f=(n("876d"),n("2877")),m=Object(f["a"])(d,r,c,!1,null,"22014d60",null),p=m.exports,b={components:{ToDoItemEditForm:p},props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data:function(){return{isEditing:!1}},computed:{isDone:function(){return this.done}},methods:{deleteToDo:function(){this.$emit("item-deleted")},toggleToItemEditForm:function(){console.log(this.$refs.editButton),this.isEditing=!0},itemEdited:function(t){this.$emit("item-edited",t),this.isEditing=!1,this.focusOnEditButton()},editCancelled:function(){this.isEditing=!1,this.focusOnEditButton()},focusOnEditButton:function(){var t=this;this.$nextTick((function(){var e=t.$refs.editButton;e.focus()}))}}},h=b,v=(n("a258"),Object(f["a"])(h,s,l,!1,null,"045269d4",null)),g=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:t.label,expression:"label",modifiers:{lazy:!0,trim:!0}}],staticClass:"input__lg",attrs:{type:"text",id:"new-todo-input",name:"new-todo",autocomplete:"off"},domProps:{value:t.label},on:{change:function(e){t.label=e.target.value.trim()},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"btn btn__primary btn__lg",attrs:{type:"submit"}},[t._v(" Add ")])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"label-wrapper"},[n("label",{staticClass:"label__lg",attrs:{for:"new-todo-input"}},[t._v(" What needs to be done? ")])])}],w={methods:{onSubmit:function(){if(""!==this.label){this.$emit("todo-added",this.label);var t="http://localhost:5000/add";this.axios.post(t,{label:this.label,done:!1}).then((function(t){console.log("Added task",t.data)})).catch((function(t){console.warn("Cant connect to server: ",t)})),this.label=""}}},data:function(){return{label:""}}},D=w,C=Object(f["a"])(D,_,y,!1,null,null,null),x=C.exports,T=n("f5cb"),S=n.n(T),k={name:"app",components:{ToDoItem:g,ToDoForm:x},data:function(){return{ToDoItems:[]}},mounted:function(){var t=this;this.axios.get("http://localhost:5000/list").then((function(e){t.ToDoItems=e.data})).catch((function(t){console.warn("Cant connect to server and load list: ",t)}))},methods:{addToDo:function(t){this.ToDoItems.push({id:S()("todo-"),label:t,done:!1})},updateDoneStatus:function(t){this.axios.post("http://localhost:5000/toggle",{id:t}).then((function(){console.log("toggled")})).catch((function(t){console.warn("Cant connect to server: ",t)}));var e=this.ToDoItems.find((function(e){return e.id===t}));e.done=!e.done},deleteToDo:function(t){this.axios.post("http://localhost:5000/delete",{id:t}).then((function(t){console.log("deleted task id: ",t.data)})).catch((function(t){console.warn("Cant connect to server: ",t)}));var e=this.ToDoItems.findIndex((function(e){return e.id===t}));this.ToDoItems.splice(e,1),this.$refs.listSummary.focus()},editToDo:function(t,e){var n=this.ToDoItems.find((function(e){return e.id===t}));n.label=e}},computed:{listSummary:function(){var t=this.ToDoItems.filter((function(t){return t.done})).length;return"".concat(t," out of ").concat(this.ToDoItems.length," items completed")}}},$=k,E=(n("034f"),Object(f["a"])($,i,a,!1,null,null,null)),O=E.exports,I=n("cee4"),j=n("130e");n("b059");o["a"].config.productionTip=!1,o["a"].use(j["a"],I["a"]),new o["a"]({render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},"876d":function(t,e,n){"use strict";var o=n("24c9"),i=n.n(o);i.a},a258:function(t,e,n){"use strict";var o=n("b7c4"),i=n.n(o);i.a},b059:function(t,e,n){},b7c4:function(t,e,n){}});
//# sourceMappingURL=app.f7ae5238.js.map