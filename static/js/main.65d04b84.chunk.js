(this["webpackJsonpcovid19-ai"]=this["webpackJsonpcovid19-ai"]||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(83),a(13)),c=a(14),s=a(25),m=a(15),u=a(17),d=(a(84),a(156)),p=a(145),h=a(113),g=a(147),f=a(148),v=a(149),y=a(153),E=a(155),b=a(115),k=a(150),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("modal: ",this.props.route),r.a.createElement(d.a,{style:{padding:"15vh"},BackdropComponent:p.a,closeAfterTransition:!0,open:this.props.route,onClose:function(){e.props.toggleModal()}},r.a.createElement(h.a,{in:this.props.route},r.a.createElement(g.a,{style:{backgroundColor:"#2e2e2e",width:"fit-content"}},r.a.createElement(f.a,{variant:"h5",gutterBottom:!0,style:{color:"#fff",paddingTop:10}},"X-Ray Upload"),r.a.createElement(v.a,{direction:"column",container:!0},r.a.createElement(v.a,{container:!0,direction:"row"},r.a.createElement(y.a,{variant:"outlined",style:{marginTop:5,color:"#fff"},label:"temperature"}),r.a.createElement(y.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Something else"}),r.a.createElement(y.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Yet Something Else"})),r.a.createElement(v.a,{direction:"row",container:!0},r.a.createElement(E.a,{my:3,mr:2},r.a.createElement(b.a,{startIcon:r.a.createElement(k.a,null),variant:"contained",color:"primary"},"Upload")),r.a.createElement(E.a,{my:3},r.a.createElement("input",{accept:"image/*",id:"contained-button-file",multiple:!0,style:{display:"none"},type:"file"}),r.a.createElement("label",{style:{paddingTop:20,paddingBottom:20},htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Select Picture"))))))))}}]),a}(n.Component),j=a(70),O=a(157),w=a(152),x=a(151),M=a(67),S=a.n(M),I=a(48),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.props.navigate(e)},n.state={isOpen:!1},n.handleToggle=n.handleToggle.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleToggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"navButtons",value:function(){var e=this;return I.isMobile?r.a.createElement("div",null,r.a.createElement(b.a,{variant:"contained",size:"small",color:"primary",onClick:this.handleToggle,style:{marginRight:"1%"}},r.a.createElement(S.a,null)),r.a.createElement(j.a,{keepMounted:!0,open:this.state.isOpen,onClose:this.handleToggle},r.a.createElement(O.a,{onClick:function(){return e.handleClick(0)}},"Home"),r.a.createElement(O.a,{onClick:function(){return e.handleClick(1)}},"Guidelines"),r.a.createElement(O.a,{onClick:function(){return e.handleClick(2)}},"Precautions"),r.a.createElement(O.a,{onClick:function(){return e.handleClick(3)}},"Self-Diagnosis"),r.a.createElement(O.a,{onClick:function(){return e.handleClick(4)}},"Team Members"))):r.a.createElement("div",null,r.a.createElement(b.a,{startIcon:r.a.createElement(x.a,null),variant:"outlined",size:"small",color:"primary",onClick:function(){return e.props.toggleModal()},style:{marginRight:"2%",display:"none"}},"Submit X-Ray"),r.a.createElement(w.a,{variant:"text",color:"inherit",className:"buttons",style:{marginRight:"1%"}},r.a.createElement(b.a,{onClick:function(){return e.handleClick(0)}},"Home"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(1)}},"Guidelines"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(2)}},"Precautions"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(3)}},"Self-Diagnosis"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(4)}},"Team Members")))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{container:!0,className:"navbar"},r.a.createElement(v.a,{container:!0,alignItems:"center",xs:6,md:3,onClick:function(){return e.handleClick(0)}},r.a.createElement(f.a,{variant:"h5",style:{marginLeft:"3%"}},"Flatpex")),r.a.createElement(v.a,{container:!0,xs:6,md:9,justify:"flex-end",style:{padding:2}},this.navButtons()))}}]),a}(n.Component),N=a(68),X=a.n(N),R=a(69),P=a.n(R),F=function(e){var t=e.text;return r.a.createElement("div",{style:{color:"white",background:"#4949fc",padding:"15px 10px",display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"1%",transform:"translate(-50%, -50%)"}},t)},H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={trigger:!0},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log("Loadmap: lat:",parseFloat(this.props.lat),"lng: ",parseFloat(this.props.lng)),r.a.createElement(P.a,{style:{minHeight:"20vh",position:"relative"},bootstrapURLKeys:{key:"AIzaSyCJVtn4hvD9W7WVyTc7XH16jMZ24ZQTnoo"},defaultCenter:{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng)},defaultZoom:11},r.a.createElement(F,{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng),text:"o"}))}}]),a}(n.Component),B=a(4);var L=Object(B.a)({root:{},input:{color:"white",background:"#2e2e2e"},placeholder:{color:"#696969"}})((function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(y.a,{InputLabelProps:{className:t.placeholder},inputProps:{className:t.input},variant:"filled",fullWidth:!0,style:{marginTop:"5vh"},label:"Something else"}),r.a.createElement(y.a,{InputLabelProps:{className:t.placeholder},inputProps:{className:t.input},variant:"filled",fullWidth:!0,style:{marginTop:"5vh"},label:"Yet Something Else"}))})),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onImageChange=function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){n.setState({image:e.target.result})},t.readAsDataURL(e.target.files[0])}},n.state={lat:70,lng:45,loadMap:!1,image:""},n}return Object(c.a)(a,[{key:"renderImage",value:function(){return""!==this.state.image?I.isBrowser?r.a.createElement(v.a,{container:!0,justify:"center",style:{maxHeight:"80vh",maxWidth:"100vw",overflowX:"scroll",overflowY:"scroll"}},r.a.createElement("img",{src:this.state.image,alt:"SelectedImage"})):r.a.createElement(v.a,{container:!0,justify:"center",style:{maxHeight:"80vh",maxWidth:"30vw",minWidth:"150px",overflowX:"scroll",overflowY:"scroll"}},r.a.createElement("img",{src:this.state.image,alt:"SelectedImage"})):r.a.createElement(v.a,{container:!0,xs:4,alignItems:"center",style:{flex:7}},r.a.createElement(f.a,{variant:"h5",style:{color:"#fff"}},"Selected Image Appears Here"))}},{key:"renderMap",value:function(){return this.state.loadMap?(console.log("loadmap: ",this.state.loadMap),r.a.createElement(H,{key:this.state.lat,lat:this.state.lat,lng:this.state.lng})):r.a.createElement(v.a,{item:!0,xs:4},r.a.createElement(f.a,{variant:"h5",style:{color:"white"}},"Select location to begin"))}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{container:!0,justify:"space-evenly",direction:"row"},r.a.createElement(v.a,{item:!0,direction:"column",alignItems:"flex-start",justify:"center",xs:12,md:4,style:{height:"100%",paddingRight:"2vw",paddingLeft:"2vw"}},r.a.createElement(f.a,{variant:"h5",style:{color:"#fff",paddingTop:"6vh",margin:5}},"Details"),r.a.createElement(X.a,{style:{width:"98%",height:"9vh",marginTop:"5vh",backgroundColor:"rgba(46,46,46,0.8)",borderColor:"rgba(0,0,0,0)",borderBottom:"black",color:"white"},onPlaceSelected:function(t){try{console.log("location: ",t);var a=JSON.parse(JSON.stringify(t.geometry.location));e.setState({lat:JSON.stringify(a.lat),lng:JSON.stringify(a.lng),loadMap:!0})}catch(n){alert("Daily quota limit for Google Maps API exceeded.")}},types:["(regions)"]}),r.a.createElement(L,null),r.a.createElement(v.a,{container:!0,direction:"row",alignItems:"flex-start",style:{marginTop:"4vh"}},r.a.createElement(E.a,{my:3,mr:2},r.a.createElement(b.a,{startIcon:r.a.createElement(k.a,null),variant:"contained",color:"primary"},"Upload")),r.a.createElement(E.a,{my:3},r.a.createElement("input",{accept:"image/*",id:"contained-button-file",onChange:function(t){return e.onImageChange(t)},style:{display:"none"},type:"file"}),r.a.createElement("label",{style:{paddingTop:20,margin:5,marginTop:"8vh"},htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Select Picture"))))),r.a.createElement(v.a,{container:!0,direction:"column",justify:"center",xs:12,md:4,style:{minHeight:"60vh",padding:"2%",borderRadius:"16px"}},this.renderMap()),r.a.createElement(v.a,{container:!0,direction:"column",xs:12,md:4,style:{minHeight:"60vh",padding:"2%",borderRadius:"16px"}},this.renderImage()))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return console.log("recieved route: ",this.props.route),0===this.props.route?r.a.createElement(W,null):1===this.props.route?r.a.createElement(D,null):2===this.props.route?r.a.createElement(J,null):3===this.props.route?r.a.createElement(U,null):4===this.props.route?r.a.createElement(Y,null):void 0}}]),a}(r.a.Component);function D(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Home goes here"))}function J(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Precautions Content goes here"))}function U(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Self-Diagnosis Content goes here"))}function Y(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Members Content goes here"))}a(111);var z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={address:0,XrayModal:!1},n.handleNav=n.handleNav.bind(Object(s.a)(n)),n.toggleXrayModal=n.toggleXrayModal.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleNav",value:function(e){this.setState({address:e})}},{key:"toggleXrayModal",value:function(){this.setState({XrayModal:!this.state.XrayModal})}},{key:"render",value:function(){return console.log("address: ",this.state.address),document.body.style="background: #171717 ;",r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(T,{toggleModal:this.toggleXrayModal,navigate:this.handleNav})),r.a.createElement(A,{route:this.state.address}),r.a.createElement(C,{route:this.state.XrayModal,toggleModal:this.toggleXrayModal}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(112)},83:function(e,t,a){},84:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.65d04b84.chunk.js.map