(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){e.exports=n(46)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(23),r=n.n(c),l=(n(33),n(34),n(4)),u=(n(35),n(36),n(18),n(13)),i=n(11);function d(){var e=Object(u.a)(["\n  {\n    openModal @client\n  }\n"]);return d=function(){return e},e}function s(){var e=Object(u.a)(["\n  {\n    notes {\n      id\n      text\n      created_at\n      updated_at\n    }\n    due_notes {\n      id\n      text\n      due_timestamp\n      created_at\n      updated_at\n    }\n  }\n"]);return s=function(){return e},e}var m=Object(i.b)(s()),b=Object(i.b)(d());function f(){var e=Object(u.a)(["\n  mutation DeleteDueNote($id: uuid) {\n    delete_due_notes(where: { id: { _eq: $id } }) {\n      affected_rows\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=Object(u.a)(["\n  mutation DeleteNote($id: uuid) {\n    delete_notes(where: { id: { _eq: $id } }) {\n      affected_rows\n    }\n  }\n"]);return v=function(){return e},e}function p(){var e=Object(u.a)(["\n  mutation AddDueNote($text: String!, $due_timestamp: numeric!) {\n    insert_due_notes(objects: { text: $text, due_timestamp: $due_timestamp }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return p=function(){return e},e}function O(){var e=Object(u.a)(["\n  mutation AddNote($text: String!) {\n    insert_notes(objects: { text: $text }) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n  mutation SetOpenModal($openModal: string) {\n    setOpenModal(openModal: $openModal) @client\n  }\n"]);return j=function(){return e},e}var E=Object(i.b)(j()),N=Object(i.b)(O()),g=Object(i.b)(p()),h=Object(i.b)(v()),y=Object(i.b)(f()),k=n(5),C=function(e){var t="".concat(e);return 1===t.length?"0".concat(t):t},w=function(e){var t=new Date(e);return{year:"".concat(t.getFullYear()),month:C(t.getMonth()+1),date:C(t.getDate())}},M=Object.keys,D=function(e){return"".concat(e[0].toUpperCase()).concat(e.substring(1))},_=function(e){return e.split(" ").map((function(e){return D(e)})).join(" ")},x=function(e){var t=e.split("-"),n=Object(l.a)(t,3),a=n[0],o=n[1],c=n[2];return new Date(parseInt(a),parseInt(o)-1,parseInt(c)).getTime()},S=function(e){var t=e.id,n=e.text,c=Object(a.useState)(!1),r=Object(l.a)(c,2),u=r[0],i=r[1],d=Object(k.a)(h,{refetchQueries:[{query:m}]}),s=Object(l.a)(d,2),b=s[0],f=s[1],v=f.loading,p=f.error,O=Object(a.useCallback)((function(){window.confirm("Delete Note? This cannot be undone.")&&b({variables:{id:t}}).then((function(){i(!1)})).catch((function(){i(!0)}))}),[b,t]);return o.a.createElement("div",{key:t,className:"note-item"},D(n),(p||u)&&o.a.createElement("div",{className:"note-error"},"Error, please try again."),o.a.createElement("button",{className:"note-item-delete",onClick:O,disabled:v},v?"...":"\u2715"))},$=(n(40),n(22),function(){var e=Object(k.b)(b).data.openModal,t=Object(k.a)(E),n=Object(l.a)(t,1)[0],c=Object(k.a)(N,{refetchQueries:[{query:m}]}),r=Object(l.a)(c,2),u=r[0],i=r[1],d=i.loading,s=i.error,f=Object(a.useState)(""),v=Object(l.a)(f,2),p=v[0],O=v[1],j=Object(a.useState)("Make Note \u2713"),g=Object(l.a)(j,2),h=g[0],y=g[1],C=Object(a.useCallback)((function(e){O(e.currentTarget.value)}),[]),w=Object(a.useCallback)((function(){u({variables:{text:p}}).then((function(){n({variables:{openModal:"closed"}}),O("")})).catch((function(){y("Retry Make Note")}))}),[p,u,n]);return"note"===e?o.a.createElement("div",{className:"modal-container"},o.a.createElement("h1",{className:"modal-header",style:{color:T.note.backgroundColor}},"Add a new Note"),o.a.createElement("div",{className:"modal-body"},o.a.createElement("input",{className:"text-input",placeholder:"Note Text",type:"text",onChange:C,value:p}),s&&o.a.createElement("div",{className:"modal-error"},"Something went wrong, please try again")),o.a.createElement("div",{className:"modal-buttons"},o.a.createElement("button",{className:"btn",onClick:function(){n({variables:{openModal:"closed"}})}},"Cancel \u2715"),o.a.createElement("button",{className:"btn btn-success",onClick:w,disabled:""===p||d},d?"Sending...":h))):o.a.createElement(o.a.Fragment,null)}),q=(n(41),function(e){var t=e.id,n=e.text,c=e.due_timestamp,r=Date.now()>c,u=Object(a.useState)(!1),i=Object(l.a)(u,2),d=i[0],s=i[1],b=Object(k.a)(y,{refetchQueries:[{query:m}]}),f=Object(l.a)(b,2),v=f[0],p=f[1],O=p.loading,j=p.error,E=Object(a.useCallback)((function(){window.confirm("Delete Due Note? This cannot be undone.")&&v({variables:{id:t}}).then((function(){s(!1)})).catch((function(){s(!0)}))}),[v,t]);return o.a.createElement("div",{key:t,className:"note-item"},(j||d)&&o.a.createElement("div",{className:"note-error"},"Error, please try again."),D(n),o.a.createElement("div",{className:"due-note-dates"},r&&o.a.createElement("div",{className:"due-note-overdue"},"Overdue"),o.a.createElement("div",{className:"due-note-date"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=w(e),a=n.year,o=n.month,c=n.date;return"".concat(o).concat(t).concat(c).concat(t).concat(a)}(c)),o.a.createElement("button",{className:"note-item-delete",onClick:E,disabled:O},O?"...":"\u2715")))}),T=(n(42),{note:{name:"note",dataSource:"notes",displayComponent:S,modalComponent:$,backgroundColor:"#ff9681"},dueNote:{name:"due note",dataSource:"due_notes",displayComponent:q,modalComponent:function(){var e=Object(k.b)(b).data.openModal,t=Object(k.a)(E),n=Object(l.a)(t,1)[0],c=Object(k.a)(g,{refetchQueries:[{query:m}]}),r=Object(l.a)(c,2),u=r[0],i=r[1],d=i.loading,s=i.error,f=Object(a.useState)(""),v=Object(l.a)(f,2),p=v[0],O=v[1],j=Object(a.useState)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=2592e5,n=e+t,a=w(n),o=a.year,c=a.month,r=a.date;return"".concat(o,"-").concat(c,"-").concat(r)}()),N=Object(l.a)(j,2),h=N[0],y=N[1],C=Object(a.useState)("Make Due Note \u2713"),M=Object(l.a)(C,2),D=M[0],_=M[1],S=Object(a.useCallback)((function(e){O(e.currentTarget.value)}),[]),$=Object(a.useCallback)((function(e){var t=e.currentTarget.value;y(t)}),[]),q=Object(a.useCallback)((function(){var e=x(h);u({variables:{text:p,due_timestamp:e}}).then((function(){n({variables:{openModal:"closed"}}),O("")})).catch((function(){_("Retry Make Due Note")}))}),[p,u,n,h]),F=function(e){var t=x(e);return Date.now()>t}(h);return"dueNote"===e?o.a.createElement("div",{className:"modal-container due-note-modal"},o.a.createElement("h1",{className:"modal-header",style:{color:T.dueNote.backgroundColor}},"Add a new Due Note"),o.a.createElement("div",{className:"modal-body"},o.a.createElement("input",{className:"text-input",placeholder:"Note text",type:"text",onChange:S,value:p}),o.a.createElement("label",{className:"due-note-label",htmlFor:"dueNoteDate"},"Due Date"),o.a.createElement("input",{className:"text-input",id:"dueNoteDate",type:"date",value:h,onChange:$})),s&&o.a.createElement("div",{className:"modal-error due-note-modal-error"},"Something went wrong, please try again"),F&&o.a.createElement("div",{className:"modal-error due-note-modal-error"},"Set due date sometime in the future"),o.a.createElement("div",{className:"modal-buttons"},o.a.createElement("button",{className:"btn",onClick:function(){n({variables:{openModal:"closed"}})}},"Cancel \u2715"),o.a.createElement("button",{className:"btn btn-success",onClick:q,disabled:""===p||F||d},d?"Sending...":D))):o.a.createElement(o.a.Fragment,null)},backgroundColor:"#99b4c7"}}),F=function(){var e=Object(k.a)(E),t=Object(l.a)(e,1)[0];return o.a.createElement("div",{className:"header-buttons"},M(T).map((function(e){var n=T[e];return o.a.createElement("button",{className:"header-button",key:e,onClick:function(){t({variables:{openModal:e}})},style:{backgroundColor:n.backgroundColor}},"Add a new ",_(n.name))})))},A=(n(43),function(){return o.a.createElement("div",{className:"query-error"},"Error fetching notes. Please refresh to retry.")}),I=(n(44),function(){return o.a.createElement("div",{className:"loading-container"},"Loading..."," ",o.a.createElement("span",{role:"img","aria-label":"loading",className:"loading-icon"},"\ud83c\udf00"))}),Q=function(){var e=Object(k.b)(m),t=e.loading,n=e.error,a=e.data;return t?o.a.createElement(I,null):n?o.a.createElement(A,null):void 0===a?o.a.createElement(A,null):o.a.createElement("div",{className:"all-notes-container"},M(T).map((function(e){var t=T[e],n=a[t.dataSource];return o.a.createElement("div",{className:"notes-container",key:e},o.a.createElement("h2",{className:"collection-header"},_(t.name)," Collection"),n.map((function(e){var n=t.displayComponent;return o.a.createElement(n,Object.assign({key:e.id},e))})))})))},J=(n(45),function(){var e=Object(k.b)(b).data.openModal;return o.a.createElement(o.a.Fragment,null,"closed"!==e&&o.a.createElement("div",{className:"modal-overlay"}),M(T).map((function(e){var t=T[e].modalComponent;return o.a.createElement(t,{key:e})})))}),R=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,null),o.a.createElement(Q,null),o.a.createElement(J,null))},B=new(n(14).a);B.writeData({data:{openModal:"closed"}});var L=new i.a({cache:B,uri:"https://tt-notes-dev.herokuapp.com/v1/graphql",resolvers:{Mutation:{setOpenModal:function(e,t,n){var a=n.cache,o=t.openModal;a.writeData({data:{openModal:o}})}}}}),P=n(9);r.a.render(o.a.createElement((function(){return o.a.createElement(P.a,{client:L},o.a.createElement(R,null))}),null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.089de272.chunk.js.map