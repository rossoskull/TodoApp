(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{349:function(e,t,a){e.exports=a(638)},354:function(e,t,a){},356:function(e,t,a){},447:function(e,t,a){},449:function(e,t,a){},638:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(53),c=a.n(o),l=(a(354),a(25)),i=a(26),u=a(28),s=a(27),d=a(29),p=(a(356),a(640)),m=a(642),h=a(639),b=a(4),E=a(643),f=a(16),g=Object(f.b)(null,function(e){return{logout:function(){return e(function(e,t,a){(0,a.getFirebase)().logout().then(function(){e({type:"LOGOUT_USER"})}).catch(function(t){e({type:"LOGOUT_USER_ERROR",e:t})})})}}})(function(e){var t=e.styles,a=e.logout;return r.a.createElement(n.Fragment,null,r.a.createElement(b.b,{component:E.a,to:"/TodoApp/create",style:t.buttons},"Create Todo"),r.a.createElement(b.b,{component:E.a,to:"/TodoApp/display",style:t.buttons},"Display"),r.a.createElement(b.b,{style:t.buttons,onClick:a},"Log Out"))}),O=function(e){var t=e.styles;return r.a.createElement(n.Fragment,null,r.a.createElement(b.b,{component:E.a,exact:!0,to:"/TodoApp/",style:t.buttons},"Log In"),r.a.createElement(b.b,{component:E.a,to:"/TodoApp/signup",style:t.buttons},"Sign Up"))},y={forestGreen:"#0b6623",jadeGreen:"#00A86B",kellyGreen:"#4CBB17",teaGreen:"#D0F0C0"},j=Object(f.b)(function(e){return{firebase:e.firebase}})(function(e){var t=e.firebase,a={buttons:{marginRight:"5px",color:"rgb(230,230,230)",fontSize:"17px"},appbar:{backgroundColor:y.forestGreen}},n=t.auth.isEmpty?r.a.createElement(O,{styles:a}):r.a.createElement(g,{styles:a});return r.a.createElement("header",null,r.a.createElement(b.a,{style:a.appbar,position:"relative"},r.a.createElement(b.f,null,r.a.createElement(b.g,{variant:"display1",color:"inherit"},"React Todo App"),r.a.createElement("div",{style:{marginLeft:"auto"}},n))))}),T=a(34),C=a(641),R=(a(447),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.loginUser(a.state)},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.firebase.auth.isEmpty?r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,name:"loginForm"},r.a.createElement(b.c,{className:"form-card"},r.a.createElement(b.e,null,r.a.createElement(b.g,{variant:"display1",align:"center"},"Log In"),r.a.createElement("input",{type:"email",placeholder:"Email ID",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"center",color:"red"}},this.props.authError?this.props.authError.message:null),r.a.createElement(b.b,{type:"submit",id:"submit-button",style:{backgroundColor:y.jadeGreen,margin:"auto",color:"white",width:"125px"}},"Submit"))))):r.a.createElement(C.a,{to:"/TodoApp/display"})}}]),t}(n.Component)),v=Object(f.b)(function(e){return{firebase:e.firebase,authError:e.user.authError}},function(e){return{loginUser:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN"})}).catch(function(e){t({type:"LOGIN_ERROR",e:e})})}}(t))}}})(R),S=(a(449),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={fname:"",lname:"",email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.id,e.target.value))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.firebase.auth.isEmpty?r.a.createElement(n.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,name:"loginForm"},r.a.createElement(b.c,{className:"form-card-signup"},r.a.createElement(b.e,null,r.a.createElement(b.g,{variant:"display1",align:"center"},"Sign Up"),r.a.createElement("input",{type:"text",placeholder:"First Name",id:"fname",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Last Name",id:"lname",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"email",placeholder:"Email ID",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"center",color:"red"}},this.props.authError?this.props.authError.message:null),r.a.createElement(b.b,{type:"submit",id:"submit-button",style:{backgroundColor:y.jadeGreen,margin:"auto",color:"white",width:"125px"}},"Submit"))))):r.a.createElement(C.a,{to:"/TodoApp/display"})}}]),t}(n.Component)),w=Object(f.b)(function(e){return{firebase:e.firebase,authError:e.user.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore;r().auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return o().collection("users").doc(t.user.uid).set({fname:e.fname,lname:e.lname})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(S),A=a(13),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",author:"",body:"",status:0},a.handleSubmit=function(e){e.preventDefault();var t=a.state;t.author=a.props.profile.fname+" "+a.props.profile.lname,t.authId=a.props.auth.uid,a.props.createTodo(t)},a.handleChange=function(e){a.setState(Object(T.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.auth.isEmpty?r.a.createElement(C.a,{to:"/TodoApp/"}):r.a.createElement(n.Fragment,null,r.a.createElement("form",{name:"addtodo",onSubmit:this.handleSubmit},r.a.createElement(b.c,{className:"form-card"},r.a.createElement(b.e,null,r.a.createElement(b.g,{variant:"display1",align:"center"},"Create Todo"),r.a.createElement("input",{name:"title",type:"text",placeholder:"Title",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("textarea",{name:"body",placeholder:"Body",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.b,{type:"submit",id:"submit-button",style:{backgroundColor:y.jadeGreen,margin:"auto",color:"white",width:"125px"}},"Create Todo")))))}}]),t}(n.Component),_=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{createTodo:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("todos").add(Object(A.a)({},e,{date:new Date})).then(function(){t({type:"CREATE_TODO",todo:e})}).catch(function(e){t({type:"CREATE_TODO_ERROR",err:e})})}}(t))}}})(D),U=a(43),F=a(30),x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.todos,n=t.auth;if(n.isEmpty)return r.a.createElement(C.a,{to:"/TodoApp/"});var o={0:"rgb(255, 255, 128)",1:"rgb(191, 255, 128)",2:"rgb(255, 153, 102)"};return a&&(a=a.filter(function(e){return e.authId===n.uid})),r.a.createElement("div",{className:"todos"},r.a.createElement(b.g,{variant:"display1",align:"center"},"Todos"),a&&a.map(function(t){return r.a.createElement(b.c,{key:t.id,style:{marginBottom:"10px",backgroundColor:o[t.status]}},r.a.createElement(b.e,null,r.a.createElement(b.g,{variant:"h5"},t.title),r.a.createElement(b.g,{variant:"body2"},t.author),r.a.createElement(b.g,{variant:"body1"},t.body)),r.a.createElement(b.d,null,r.a.createElement(b.b,{style:{backgroundColor:"#33cc33",color:"white"},onClick:function(){e.props.updateTodo({id:t.id,status:1})}},"Done!"),r.a.createElement(b.b,{style:{backgroundColor:"#ff6600",color:"white"},onClick:function(){e.props.updateTodo({id:t.id,status:2})}},"Not Done"),r.a.createElement(b.b,{style:{backgroundColor:"#ff3333",color:"white"},onClick:function(){e.props.deleteTodo(t.id)}},"Delete")))}))}}]),t}(n.Component),I=Object(F.d)(Object(f.b)(function(e){return{todos:e.firestore.ordered.todos,auth:e.firebase.auth}},function(e){return{deleteTodo:function(t){return e(function(e){return function(t,a,n){(0,n.getFirestore)().delete({collection:"todos",doc:e}).then(function(){console.log("deleted"),t({type:"DELETE_TODO"})}).catch(function(e){console.log("Error deleting",e),t({type:"DELETE_TODO_ERROR",err:e})})}}(t))},updateTodo:function(t){return e((a=t,function(e,t,n){(0,n.getFirestore)().collection("todos").doc(a.id).update({status:a.status}).then(function(){e({type:"UPDATE_TODO_SUCCESS"})}).catch(function(t){e({type:"UPDATE_TODO_ERROR",e:t})})}));var a}}}),Object(U.firestoreConnect)([{collection:"todos"}]))(x),k=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container main-body"},r.a.createElement(m.a,null,r.a.createElement(h.a,{exact:!0,path:"/TodoApp/",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(h.a,{exact:!0,path:"/TodoApp/signup",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(h.a,{exact:!0,path:"/TodoApp/create",render:function(){return r.a.createElement(_,null)}}),r.a.createElement(h.a,{exact:!0,path:"/TodoApp/display",render:function(){return r.a.createElement(I,null)}})))))}}]),t}(n.Component),G=a(72),L={todos:[{id:1,title:"First Todo",author:"Jay Mistry",body:"This is the first todo.",status:0},{id:1,title:"Second Todo",author:"Jay Mistry",body:"Second Todo this is!",status:-1},{id:1,title:"Third Todo",author:"Jay Mistry",body:"This is the third todododo.",status:1}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_TODO":return Object(A.a)({},e,{todoError:null});case"CREATE_TODO_ERROR":return Object(A.a)({},e,{todoError:t.e});case"DELETE_TODO":return Object(A.a)({},e,{todoError:null});case"DELETE_TODO_ERROR":return Object(A.a)({},e,{todoError:t.e});case"UPDATE_TODO_SUCCESS":return Object(A.a)({},e,{todoError:null});case"UPDATE_TODO_ERROR":return Object(A.a)({},e,{todoError:t.e});default:return e}},P={email:"",password:""},B=Object(F.c)({todo:N,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(A.a)({},e,{authError:null});case"LOGIN_ERROR":return Object(A.a)({},e,{authError:t.e});case"LOGOUT_USER":return Object(A.a)({},e,{authError:null});case"LOGOUT_USER_ERROR":return Object(A.a)({},e,{authError:t.e});case"SIGNUP_SUCCESS":return Object(A.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(A.a)({},e,{authError:t.err})}return e},firestore:G.firestoreReducer,firebase:U.firebaseReducer}),J=a(254),M=a(103),z=a.n(M);a(631),a(636);z.a.initializeApp({apiKey:"AIzaSyCZLwQrT_RwtDnxnMnxyiKZ8jpjoPq1ftM",authDomain:"react-firebase-todoapp-plm.firebaseapp.com",databaseURL:"https://react-firebase-todoapp-plm.firebaseio.com",projectId:"react-firebase-todoapp-plm",storageBucket:"react-firebase-todoapp-plm.appspot.com",messagingSenderId:"1089263693101"}),z.a.firestore().settings({timestampsInSnapshots:!0});var K=z.a,W=Object(F.e)(B,Object(F.d)(Object(F.a)(J.a.withExtraArgument({getFirebase:U.getFirebase,getFirestore:G.getFirestore})),Object(U.reactReduxFirebase)(K,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(G.reduxFirestore)(K)));c.a.render(r.a.createElement("h3",null,"Loading App"),document.getElementById("root")),W.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(f.a,{store:W},r.a.createElement(k,null)),document.getElementById("root"))})}},[[349,2,1]]]);
//# sourceMappingURL=main.7c71aafa.chunk.js.map