(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{377:function(e,t,a){e.exports=a(707)},382:function(e,t,a){},384:function(e,t,a){},707:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),l=a.n(o),i=(a(382),a(30)),c=a(31),s=a(33),u=a(32),d=a(34),m=(a(384),a(709)),p=a(711),h=a(708),b=a(6),E=a(712),f=a(23),g=Object(f.b)(null,function(e){return{logout:function(){return e(function(e,t,a){(0,a.getFirebase)().logout().then(function(){e({type:"LOGOUT_USER"})}).catch(function(t){e({type:"LOGOUT_USER_ERROR",e:t})})})}}})(function(e){var t=e.styles,a=e.logout;return r.a.createElement(n.Fragment,null,r.a.createElement(b.b,{component:E.a,to:"/create",style:t.buttons},"Create Todo"),r.a.createElement(b.b,{component:E.a,to:"/display",style:t.buttons},"Display"),r.a.createElement(b.b,{style:t.buttons,onClick:a},"Log Out"))}),y=function(e){var t=e.styles;return r.a.createElement(n.Fragment,null,r.a.createElement(b.b,{component:E.a,exact:!0,to:"/",style:t.buttons},"Log In"),r.a.createElement(b.b,{component:E.a,to:"/signup",style:t.buttons},"Sign Up"))},O={forestGreen:"#0b6623",jadeGreen:"#00A86B",kellyGreen:"#4CBB17",teaGreen:"#D0F0C0"},j=Object(f.b)(function(e){return{firebase:e.firebase}})(function(e){var t=e.firebase,a={buttons:{marginRight:"5px",color:"rgb(230,230,230)",fontSize:"17px"},appbar:{backgroundColor:O.forestGreen}},n=t.auth.isEmpty?r.a.createElement(y,{styles:a}):r.a.createElement(g,{styles:a});return r.a.createElement("header",null,r.a.createElement(b.a,{style:a.appbar,position:"relative"},r.a.createElement(b.f,null,r.a.createElement(b.g,{variant:"display1",color:"inherit"},"React Todo App"),r.a.createElement("div",{style:{marginLeft:"auto"}},n))))}),R=a(43),C=a(710),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.loginUser(a.state)},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.firebase.auth.isEmpty?r.a.createElement(n.Fragment,null,r.a.createElement(b.g,{variant:"h3"},"Log In"),r.a.createElement("form",{onSubmit:this.handleSubmit,name:"loginForm"},r.a.createElement(b.e,{type:"text",label:"Email ID",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.e,{type:"password",label:"Password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.b,{type:"submit",style:{backgroundColor:O.jadeGreen}},"Submit"),r.a.createElement("p",{style:{textAlign:"center",color:"red"}},this.props.authError?this.props.authError.message:null))):r.a.createElement(C.a,{to:"/display"})}}]),t}(n.Component),T=Object(f.b)(function(e){return{firebase:e.firebase,authError:e.user.authError}},function(e){return{loginUser:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN"})}).catch(function(e){t({type:"LOGIN_ERROR",e:e})})}}(t))}}})(v),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fname:"",lname:"",email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.firebase.auth.isEmpty?r.a.createElement(n.Fragment,null,r.a.createElement(b.g,{variant:"display1"},"Signup"),r.a.createElement("form",{onSubmit:this.handleSubmit,name:"loginForm"},r.a.createElement(b.e,{type:"text",label:"First Name",id:"fname",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.e,{type:"text",label:"Last Name",id:"lname",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.e,{type:"text",label:"Email ID",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.e,{type:"password",label:"Password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.b,{type:"submit",style:{backgroundColor:O.jadeGreen,color:"white"}},"Sign Up"),r.a.createElement("p",{style:{textAlign:"center",color:"red"}},this.props.authError?this.props.authError.message:null))):r.a.createElement(C.a,{to:"display"})}}]),t}(n.Component),w=Object(f.b)(function(e){return{firebase:e.firebase,authError:e.user.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore;r().createUser({email:e.email,password:e.password}).then(function(t){return o().collection("users").doc(t.user.uid).set({fname:e.fname,lname:e.lname})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(S),F=a(37),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",author:"",body:"",status:0},a.handleSubmit=function(e){e.preventDefault();var t=a.state;t.author=a.props.profile.fname+" "+a.props.profile.lname,t.authId=a.props.auth.uid,a.props.createTodo(t)},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.auth.isEmpty?r.a.createElement(C.a,{to:"/"}):r.a.createElement(n.Fragment,null,r.a.createElement(b.g,{variant:"display1"},"Create Todo"),r.a.createElement("form",{name:"addtodo",onSubmit:this.handleSubmit},r.a.createElement(b.e,{name:"title",label:"Title",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.e,{name:"body",type:"textarea",label:"Body",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(b.b,{type:"submit",style:{backgroundColor:O.jadeGreen}},"Create")))}}]),t}(n.Component),D=Object(f.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}},function(e){return{createTodo:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("todos").add(Object(F.a)({},e,{date:new Date})).then(function(){t({type:"CREATE_TODO",todo:e})}).catch(function(e){t({type:"CREATE_TODO_ERROR",err:e})})}}(t))}}})(_),I=a(52),U=a(35),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.todos,n=t.auth;return n.isEmpty?r.a.createElement(C.a,{to:"/"}):(a&&(a=a.filter(function(e){return e.authId===n.uid})),r.a.createElement("div",{className:"todos"},r.a.createElement(b.g,{variant:"display1"},"Todos"),a&&a.map(function(t){return r.a.createElement(b.c,{key:t.id,style:{marginBottom:"10px"}},r.a.createElement(b.d,null,r.a.createElement(b.g,{variant:"h5"},t.title),r.a.createElement(b.g,{variant:"body2"},t.author),r.a.createElement(b.g,{variant:"body1"},t.body),r.a.createElement(b.b,{onClick:function(){e.props.deleteTodo(t.id)}},"Delete")))})))}}]),t}(n.Component),G=Object(U.d)(Object(f.b)(function(e){return{todos:e.firestore.ordered.todos,auth:e.firebase.auth}},function(e){return{deleteTodo:function(t){return e(function(e){return function(t,a,n){(0,n.getFirestore)().delete({collection:"todos",doc:e}).then(function(){console.log("deleted"),t({type:"DELETE_TODO"})}).catch(function(e){console.log("Error deleting",e),t({type:"DELETE_TODO_ERROR",err:e})})}}(t))}}}),Object(I.firestoreConnect)([{collection:"todos"}]))(x),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(j,null),r.a.createElement("div",{className:"container main-body"},r.a.createElement(p.a,null,r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement(T,null)}}),r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(h.a,{exact:!0,path:"/create",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(h.a,{exact:!0,path:"/display",render:function(){return r.a.createElement(G,null)}})))))}}]),t}(n.Component),A=a(83),k={todos:[{id:1,title:"First Todo",author:"Jay Mistry",body:"This is the first todo.",status:0},{id:1,title:"Second Todo",author:"Jay Mistry",body:"Second Todo this is!",status:-1},{id:1,title:"Third Todo",author:"Jay Mistry",body:"This is the third todododo.",status:1}]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;switch((arguments.length>1?arguments[1]:void 0).type){case"CREATE_TODO":case"CREATE_TODO_ERROR":case"DELETE_TODO":case"DELETE_TODO_ERROR":default:return e}},P={email:"",password:""},B=Object(U.c)({todo:N,user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(F.a)({},e,{authError:null});case"LOGIN_ERROR":return Object(F.a)({},e,{authError:t.e});case"LOGOUT_USER":return Object(F.a)({},e,{authError:null});case"LOGOUT_USER_ERROR":return Object(F.a)({},e,{authError:t.e});case"SIGNUP_SUCCESS":return Object(F.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(F.a)({},e,{authError:t.err})}return e},firestore:A.firestoreReducer,firebase:I.firebaseReducer}),J=a(300),M=a(116),z=a.n(M);a(700),a(705);z.a.initializeApp({apiKey:"AIzaSyCZLwQrT_RwtDnxnMnxyiKZ8jpjoPq1ftM",authDomain:"react-firebase-todoapp-plm.firebaseapp.com",databaseURL:"https://react-firebase-todoapp-plm.firebaseio.com",projectId:"react-firebase-todoapp-plm",storageBucket:"react-firebase-todoapp-plm.appspot.com",messagingSenderId:"1089263693101"}),z.a.firestore().settings({timestampsInSnapshots:!0});var K=z.a,Z=Object(U.e)(B,Object(U.d)(Object(U.a)(J.a.withExtraArgument({getFirebase:I.getFirebase,getFirestore:A.getFirestore})),Object(I.reactReduxFirebase)(K,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}),Object(A.reduxFirestore)(K)));l.a.render(r.a.createElement("h3",null,"Loading App"),document.getElementById("root")),Z.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(f.a,{store:Z},r.a.createElement(L,null)),document.getElementById("root"))})}},[[377,2,1]]]);
//# sourceMappingURL=main.7e0da47f.chunk.js.map