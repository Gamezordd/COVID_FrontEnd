(this["webpackJsonpcovid19-ai"]=this["webpackJsonpcovid19-ai"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(75),a(13)),c=a(14),s=a(32),m=a(15),u=a(17),d=(a(76),a(144)),p=a(133),g=a(102),h=a(135),f=a(136),y=a(137),v=a(141),E=a(143),b=a(104),k=a(138),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("modal: ",this.props.route),r.a.createElement(d.a,{style:{padding:"15vh"},BackdropComponent:p.a,closeAfterTransition:!0,open:this.props.route,onClose:function(){e.props.toggleModal()}},r.a.createElement(g.a,{in:this.props.route},r.a.createElement(h.a,{style:{backgroundColor:"#2e2e2e",width:"fit-content"}},r.a.createElement(f.a,{variant:"h5",gutterBottom:!0,style:{color:"#fff",paddingTop:10}},"X-Ray Upload"),r.a.createElement(y.a,{direction:"column",container:!0},r.a.createElement(y.a,{container:!0,direction:"row"},r.a.createElement(v.a,{variant:"outlined",style:{marginTop:5,color:"#fff"},label:"temperature"}),r.a.createElement(v.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Something else"}),r.a.createElement(v.a,{variant:"outlined",style:{margin:5,marginLeft:20},label:"Yet Something Else"})),r.a.createElement(y.a,{direction:"row",container:!0},r.a.createElement(E.a,{my:3,mr:2},r.a.createElement(b.a,{startIcon:r.a.createElement(k.a,null),variant:"contained",color:"primary"},"Upload")),r.a.createElement(E.a,{my:3},r.a.createElement("input",{accept:"image/*",id:"contained-button-file",multiple:!0,style:{display:"none"},type:"file"}),r.a.createElement("label",{style:{paddingTop:20,paddingBottom:20},htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Select Picture"))))))))}}]),a}(n.Component),j=a(140),O=a(139),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){e.props.navigate(t)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{container:!0,className:"navbar"},r.a.createElement(y.a,{container:!0,alignItems:"center",xs:3,onClick:function(){return e.handleClick(0)}},r.a.createElement(f.a,{variant:"h5",style:{marginLeft:"3%"}},"COVID-19 AI")),r.a.createElement(y.a,{container:!0,xs:9,justify:"flex-end",style:{padding:3}},r.a.createElement(b.a,{startIcon:r.a.createElement(O.a,null),variant:"outlined",size:"small",color:"primary",onClick:function(){return e.props.toggleModal()},style:{marginRight:"2%",display:"none"}},"Submit X-Ray"),r.a.createElement(j.a,{variant:"text",color:"inherit",className:"buttons",style:{marginRight:"1%"}},r.a.createElement(b.a,{onClick:function(){return e.handleClick(0)}},"Home"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(1)}},"Guidelines"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(2)}},"Precautions"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(3)}},"Self-Diagnosis"),r.a.createElement(b.a,{onClick:function(){return e.handleClick(4)}},"Team Members"))))}}]),a}(n.Component),x=a(60),M=a.n(x),S=a(61),I=a.n(S),N=function(e){var t=e.text;return r.a.createElement("div",{style:{color:"white",background:"#4949fc",padding:"15px 10px",display:"inline-flex",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"1%",transform:"translate(-50%, -50%)"}},t)},T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={trigger:!0},n}return Object(c.a)(a,[{key:"render",value:function(){return console.log("Loadmap: lat:",parseFloat(this.props.lat),"lng: ",parseFloat(this.props.lng)),r.a.createElement(I.a,{bootstrapURLKeys:{key:"AIzaSyCJVtn4hvD9W7WVyTc7XH16jMZ24ZQTnoo"},defaultCenter:{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng)},defaultZoom:11},r.a.createElement(N,{lat:parseFloat(this.props.lat),lng:parseFloat(this.props.lng),text:"o"}))}}]),a}(n.Component),X=a(4);var R=Object(X.a)({root:{},input:{color:"white",background:"#2e2e2e"},placeholder:{color:"#696969"}})((function(e){var t=e.classes;return r.a.createElement("div",null,r.a.createElement(v.a,{InputLabelProps:{className:t.placeholder},inputProps:{className:t.input},variant:"filled",fullWidth:!0,style:{marginTop:"5vh"},label:"Something else"}),r.a.createElement(v.a,{InputLabelProps:{className:t.placeholder},inputProps:{className:t.input},variant:"filled",fullWidth:!0,style:{marginTop:"5vh"},label:"Yet Something Else"}))})),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onImageChange=function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){n.setState({image:e.target.result})},t.readAsDataURL(e.target.files[0])}},n.state={lat:70,lng:45,loadMap:!1,image:""},n}return Object(c.a)(a,[{key:"renderImage",value:function(){return""!==this.state.image?r.a.createElement(y.a,{container:!0,justify:"center",style:{maxHeight:"80vh",maxWidth:"30vw",overflowX:"scroll",overflowY:"scroll"}},r.a.createElement("img",{src:this.state.image,alt:"SelectedImage"})):r.a.createElement(y.a,{container:!0,xs:4,alignItems:"center",style:{flex:7}},r.a.createElement(f.a,{variant:"h5",style:{color:"#fff"}},"Selected Image Appears Here"))}},{key:"renderMap",value:function(){return this.state.loadMap?(console.log("loadmap: ",this.state.loadMap),r.a.createElement(T,{key:this.state.lat,lat:this.state.lat,lng:this.state.lng})):r.a.createElement(y.a,{item:!0,xs:4},r.a.createElement(f.a,{variant:"h5",style:{color:"white"}},"Select location to begin"))}},{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{container:!0,justify:"space-evenly",direction:"row"},r.a.createElement(y.a,{item:!0,direction:"column",alignItems:"flex-start",justify:"center",xs:4,style:{height:"100%",paddingRight:"2vw",paddingLeft:"2vw"}},r.a.createElement(f.a,{variant:"h5",style:{color:"#fff",paddingTop:"6vh",margin:5}},"Check Symptoms"),r.a.createElement(M.a,{style:{width:"98%",height:"9vh",marginTop:"5vh",backgroundColor:"rgba(46,46,46,0.8)",borderColor:"rgba(0,0,0,0)",borderBottom:"black",color:"white"},onPlaceSelected:function(t){try{console.log("location: ",t);var a=JSON.parse(JSON.stringify(t.geometry.location));e.setState({lat:JSON.stringify(a.lat),lng:JSON.stringify(a.lng),loadMap:!0})}catch(n){alert("Daily quota limit for Google Maps API exceeded.")}},types:["(regions)"]}),r.a.createElement(R,null),r.a.createElement(y.a,{container:!0,direction:"row",alignItems:"flex-start",style:{marginTop:"4vh"}},r.a.createElement(E.a,{my:3,mr:2},r.a.createElement(b.a,{startIcon:r.a.createElement(k.a,null),variant:"contained",color:"primary"},"Upload")),r.a.createElement(E.a,{my:3},r.a.createElement("input",{accept:"image/*",id:"contained-button-file",onChange:function(t){return e.onImageChange(t)},style:{display:"none"},type:"file"}),r.a.createElement("label",{style:{paddingTop:20,margin:5,marginTop:"8vh"},htmlFor:"contained-button-file"},r.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Select Picture"))))),r.a.createElement(y.a,{container:!0,direction:"column",justify:"center",xs:4,style:{padding:"2%",borderRadius:"16px"}},this.renderMap()),r.a.createElement(y.a,{container:!0,direction:"column",xs:4,style:{padding:"2%",borderRadius:"16px"}},this.renderImage()))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return console.log("recieved route: ",this.props.route),0===this.props.route?r.a.createElement(P,null):1===this.props.route?r.a.createElement(F,null):2===this.props.route?r.a.createElement(L,null):3===this.props.route?r.a.createElement(J,null):4===this.props.route?r.a.createElement(W,null):void 0}}]),a}(r.a.Component);function F(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Home goes here"))}function L(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Precautions Content goes here"))}function J(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Self-Diagnosis Content goes here"))}function W(){return r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"h5",color:"primary"},"Members Content goes here"))}a(100);var B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={address:0,XrayModal:!1},n.handleNav=n.handleNav.bind(Object(s.a)(n)),n.toggleXrayModal=n.toggleXrayModal.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleNav",value:function(e){this.setState({address:e})}},{key:"toggleXrayModal",value:function(){this.setState({XrayModal:!this.state.XrayModal})}},{key:"render",value:function(){return console.log("address: ",this.state.address),r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(w,{toggleModal:this.toggleXrayModal,navigate:this.handleNav})),r.a.createElement(A,{route:this.state.address}),r.a.createElement(C,{route:this.state.XrayModal,toggleModal:this.toggleXrayModal}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(101)},75:function(e,t,a){},76:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.04fc59ca.chunk.js.map