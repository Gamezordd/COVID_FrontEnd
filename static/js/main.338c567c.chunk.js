(this["webpackJsonpcovid19-ai"]=this["webpackJsonpcovid19-ai"]||[]).push([[0],{61:function(e,t,a){e.exports=a(72)},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(66),a(15)),c=a(16),s=a(25),u=a(20),m=a(21),d=(a(67),a(114)),h=a(103),p=a(73),g=a(105),E=a(106),f=a(107),v=a(111),y=a(113),b=a(75),k=a(108),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={pictures:[]},n.onDrop=n.onDrop.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"onDrop",value:function(e){this.setState({picture:this.state.pictures.concat(e)})}},{key:"render",value:function(){var e=this;return console.log("modal: ",this.props.route),r.a.createElement(d.a,{style:{padding:"15vh"},BackdropComponent:h.a,closeAfterTransition:!0,open:this.props.route,onClose:function(){e.props.toggleModal()}},r.a.createElement(p.a,{in:this.props.route},r.a.createElement(g.a,{style:{backgroundColor:"#2e2e2e",width:"fit-content"}},r.a.createElement(E.a,{variant:"h5",gutterBottom:!0,style:{color:"#fff",paddingTop:10}},"X-Ray Upload"),r.a.createElement(f.a,{direction:"column",container:!0},r.a.createElement(f.a,{container:!0,direction:"row"},r.a.createElement(v.a,{variant:"outlined",style:{marginTop:5},label:"Temprature"}),r.a.createElement(v.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Something else"}),r.a.createElement(v.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Yet Something Else"})),r.a.createElement(f.a,{direction:"row",container:!0},r.a.createElement(y.a,{my:3,mr:2},r.a.createElement(b.a,{startIcon:r.a.createElement(k.a,null),variant:"contained",color:"primary"},"Upload")),r.a.createElement(y.a,{my:3},r.a.createElement("input",{accept:"image/*",id:"contained-button-file",multiple:!0,style:{display:"none"},type:"file"}),r.a.createElement("label",{style:{paddingTop:20,paddingBottom:20},htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Select Picture"))))))))}}]),a}(n.Component),j=a(110),O=a(109),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.props.navigate(e)},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{container:!0,className:"navbar"},r.a.createElement(f.a,{container:!0,alignItems:"center",xs:3,onClick:function(){return e.handleClick(0)}},r.a.createElement(E.a,{variant:"h5",style:{marginLeft:"3%"}},"COVID-19 AI")),r.a.createElement(f.a,{container:!0,xs:9,justify:"flex-end",style:{padding:3}},r.a.createElement(b.a,{startIcon:r.a.createElement(O.a,null),variant:"outlined",size:"small",color:"primary",onClick:function(){return e.props.toggleModal()},style:{marginRight:"2%"}},"Submit X-Ray"),r.a.createElement(j.a,{variant:"text",color:"inherit",className:"buttons",style:{marginRight:"1%"}},r.a.createElement(b.a,{onClick:function(){return e.handleClick(0)}},"Home"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(1)}},"Guidelines"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(2)}},"Precautions"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(3)}},"Self-Diagnosis"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(4)}},"Team Members"))))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(i.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){return console.log("recieved route: ",this.props.route),0===this.props.route?r.a.createElement(X,null):1===this.props.route?r.a.createElement(S,null):2===this.props.route?r.a.createElement(N,null):3===this.props.route?r.a.createElement(D,null):4===this.props.route?r.a.createElement(I,null):void 0}}]),a}(r.a.Component);function X(){return r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h5",color:"primary"},"Content goes here"))}function S(){return r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h5",color:"primary"},"Home goes here"))}function N(){return r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h5",color:"primary"},"Precautions Content goes here"))}function D(){return r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h5",color:"primary"},"Self-Diagnosis Content goes here"))}function I(){return r.a.createElement(g.a,null,r.a.createElement(E.a,{variant:"h5",color:"primary"},"Members Content goes here"))}a(71);var T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={address:0,XrayModal:!1},n.handleNav=n.handleNav.bind(Object(s.a)(n)),n.toggleXrayModal=n.toggleXrayModal.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleNav",value:function(e){this.setState({address:e})}},{key:"toggleXrayModal",value:function(){this.setState({XrayModal:!this.state.XrayModal})}},{key:"render",value:function(){return console.log("address: ",this.state.address),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(M,{toggleModal:this.toggleXrayModal,navigate:this.handleNav})),r.a.createElement(w,{route:this.state.address}),r.a.createElement(C,{route:this.state.XrayModal,toggleModal:this.toggleXrayModal}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.338c567c.chunk.js.map