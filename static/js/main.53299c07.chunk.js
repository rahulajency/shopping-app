(this["webpackJsonpshopping-app"]=this["webpackJsonpshopping-app"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(19),i=a.n(c),o=(a(62),a(7)),r=a(8),l=a(10),d=a(9),u=(a(63),a(64),a(22)),m=(a(65),a.p,a(43)),h=a.n(m),j=a(51),b=(a(67),a(52)),g=a.n(b)()(),p=openDatabase("mydb","1.0","Test DB",2097152),f=function(){p.transaction((function(e){e.executeSql("CREATE TABLE IF NOT EXISTS CART_ITEMS (id integer primary key, name varchar, price varchar, size varchar, discount varchar,slug varchar,quantity varchar,u_id integer)"),e.executeSql("CREATE TABLE IF NOT EXISTS USERS (id integer primary key, uname varchar, pass varchar)"),console.log("Database created")}))},O=function(e,t,a,s,n,c){p.transaction((function(i){i.executeSql("select * from CART_ITEMS where slug = ? and size = ? and u_id = ?",[n,a,c],(function(i,o){if(o.rows.length>0){var r=parseInt(o.rows.item(0).quantity);p.transaction((function(c){c.executeSql("update CART_ITEMS set quantity=? where slug=? and size=?",[r+1,n,a],(function(e,t){}),null),console.log("Data updated",e,t,a,s)}))}else p.transaction((function(i){i.executeSql("INSERT INTO CART_ITEMS (name,price,size,discount,slug,quantity,u_id) VALUES (?, ?, ?, ?, ?, ?, ?)",[e,t,a,s,n,"1",c],(function(e,t){}),null),console.log("Data saved to database",e,t,a,s)}))}),null)}))},v=a(1),x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).dataInsert=new Promise((function(e,t){})),s.handleKeepLoggedIn=s.handleKeepLoggedIn.bind(Object(u.a)(s)),s.clearErr=s.clearErr.bind(Object(u.a)(s)),s.state={uname:"",pass:"",err:"",keepLoggedIn:!1},s}return Object(r.a)(a,[{key:"submitHandler",value:function(e){var t=this;e.preventDefault();var a=this.state,s=a.uname,n=a.pass;openDatabase("mydb","1.0","Test DB",2097152).transaction((function(e){e.executeSql("select * from USERS where uname = ? and pass = ?",[s,n],(function(e,a){if(1==parseInt(a.rows.length)){document.cookie="username="+t.state.uname+";password="+t.state.pass+";max-age=172800",console.log("Logged In");var s=window.location.search,n=!1;if(s.lastIndexOf("?login-modal=true&")>-1&&s.lastIndexOf("&slug=")>-1&&s.lastIndexOf("&size=")>-1)(function(){var e=Object(j.a)(h.a.mark((function e(){var a,c,i,o,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=s.substring(s.lastIndexOf("&slug=")+6,s.lastIndexOf("&")),c=s.substring(s.lastIndexOf("&size=")+6),i=t.props.cardData,o=i.filter((function(e){return e.slug==a})),r=t.state.uname,console.log(r),c in o[0].size&&(O(o[0].name,o[0].size[c],c,o[0].discount,a,r),n=!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()();t.props.loginHandler(),t.props.closeModal(),t.props.switchoffOverlay(),n&&g.push("/cart")}else t.setState({uname:t.state.uname,pass:t.state.pass,err:"Invalid username/password"})}),null)}))}},{key:"unameHandler",value:function(e){var t=this.state,a=t.error,s=t.pass;this.setState({uname:e.target.value,pass:s,error:a})}},{key:"passHandler",value:function(e){this.setState({uname:this.state.uname,pass:e.target.value,error:this.state.error})}},{key:"handleKeepLoggedIn",value:function(){this.state.keepLoggedIn?this.setState({uname:this.state.uname,pass:this.state.pass,err:this.state.err,keepLoggedIn:!1}):this.setState({uname:this.state.uname,pass:this.state.pass,err:this.state.err,keepLoggedIn:!0})}},{key:"clearErr",value:function(){""!=this.state.err&&this.setState({err:""})}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}},{key:"render",value:function(){var e=this;this.props.cardData;return Object(v.jsxs)("div",{className:"modal-container",children:[Object(v.jsx)("div",{className:"close-btn-wrapper",children:Object(v.jsx)("button",{className:"close-btn",onClick:function(){e.props.closeModal(),e.props.switchoffOverlay()},children:"X"})}),Object(v.jsx)("div",{className:"modal-header",children:Object(v.jsx)("h1",{children:"Login"})}),Object(v.jsxs)("form",{onSubmit:function(t){return e.submitHandler(t)},className:"modal-form",children:[Object(v.jsx)("input",{name:"uname",onKeyPress:this.clearErr,className:"text-input",placeholder:"Username",onChange:function(t){return e.unameHandler(t)}}),Object(v.jsx)("input",{name:"pass",className:"text-input",placeholder:"Password",onChange:function(t){return e.passHandler(t)}}),Object(v.jsx)("div",{className:"checkbox-cont",children:Object(v.jsxs)("div",{className:"check-items",children:[Object(v.jsx)("input",{type:"checkbox",className:"keep-checkbox",onClick:this.handleKeepLoggedIn}),Object(v.jsx)("label",{className:"keep-label",children:" Keep me logged in"})]})}),Object(v.jsx)("p",{className:"err-p",children:this.state.err}),Object(v.jsx)("button",{name:"submit",type:"submit",children:"SUBMIT"})]})]})}}]),a}(s.Component),y=(a.p,a(108)),N=a(107),k=a(106),S=a(16),w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).closeModal=s.closeModal.bind(Object(u.a)(s)),s.loginHandler=s.loginHandler.bind(Object(u.a)(s)),s.state={modalStatus:!1,isLoggedIn:!1,currPath:""},s}return Object(r.a)(a,[{key:"modalHandler",value:function(e){e?this.setState({modalStatus:!1}):this.setState({modalStatus:!0}),e?document.getElementsByTagName("html")[0].setAttribute("class",""):document.getElementsByTagName("html")[0].setAttribute("class","no-scroll"),e||"/"==g.location.pathname?g.push("?login-modal="+!e):g.push(g.location.pathname+"?login-modal="+!e)}},{key:"closeModal",value:function(){this.setState({modalStatus:!1}),document.getElementsByTagName("html")[0].setAttribute("class",""),g.push(this.state.currPath)}},{key:"modalToggle",value:function(){if(this.state.modalStatus)return Object(v.jsx)(x,{closeModal:this.closeModal,modalStatus:this.state.modalStatus,loginHandler:this.loginHandler,switchoffOverlay:this.off})}},{key:"loginHandler",value:function(){this.state.isLoggedIn?this.setState({isLoggedIn:!1,modalStatus:this.state.modalStatus}):this.setState({isLoggedIn:!0,modalStatus:this.state.modalStatus})}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}},{key:"componentDidMount",value:function(){var e=this;console.log(this.getCookie("username")),void 0!=this.getCookie("username")&&this.setState({isLoggedIn:!0}),this.setState({currPath:window.location.pathname}),window.location.href.lastIndexOf("?login-modal=true")>-1&&this.setState({modalStatus:!0},(function(){e.on(),document.getElementsByTagName("html")[0].setAttribute("class","no-scroll")}))}},{key:"deleteCookie",value:function(){document.cookie="username=;password=;",this.loginHandler()}},{key:"on",value:function(){document.getElementById("overlay-div").classList.add("show")}},{key:"off",value:function(){document.getElementById("overlay-div").classList.remove("show")}},{key:"render",value:function(){var e,t,a=this,s=this.state.modalStatus,n=this.props.cardData,c=this.state.isLoggedIn;return c?(e=Object(v.jsx)("a",{className:"link",onClick:function(){return a.deleteCookie()},children:"Logout"}),t=Object(v.jsx)(y.a.Link,{href:"#link",className:"nav-item",children:Object(v.jsx)(S.b,{to:"/cart",className:"link",children:"Cart"})})):e=Object(v.jsx)("a",{onClick:function(){a.modalHandler(a.state.modalStatus),a.on()},className:"link",children:"Login"}),Object(v.jsx)("div",{className:"header-container",children:Object(v.jsxs)(N.a,{bg:"light",variant:"light",expand:"lg",children:[Object(v.jsx)(N.a.Brand,{children:Object(v.jsx)(S.b,{to:"/",className:"appname link",children:"Shopify"})}),Object(v.jsx)(N.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"nav-ham"}),Object(v.jsx)(N.a.Collapse,{id:"basic-navbar-nav",inline:!0,children:Object(v.jsxs)(y.a,{className:"ml-auto",children:[Object(v.jsxs)(k.a,{title:"Catalog",id:"basic-nav-dropdown",className:"dropdown-btn",children:[Object(v.jsx)(k.a.Item,{className:"dropdown-item",children:Object(v.jsx)("div",{children:Object(v.jsx)(S.b,{to:"/catalog/men",className:"link",children:Object(v.jsx)("div",{children:"Men"})})})}),Object(v.jsx)(k.a.Item,{className:"dropdown-item",children:Object(v.jsx)(S.b,{to:"/catalog/women",className:"link",children:Object(v.jsx)("div",{children:"Women"})})})]}),Object(v.jsx)(y.a.Link,{children:Object(v.jsx)(S.b,{className:"link",children:"Contact"})}),t,Object(v.jsx)(y.a.Link,{children:!c&&e})]})}),Object(v.jsx)("div",{className:"overlay",id:"overlay-div",children:s&&Object(v.jsx)(x,{closeModal:this.closeModal,modalStatus:this.state.modalStatus,cardData:n,loginHandler:this.loginHandler,switchoffOverlay:this.off})})]})})}}]),a}(s.Component),I=(a(83),a.p+"static/media/carousol-1.d9be2c7b.jpg"),D=a.p+"static/media/carousol-2.bb6be531.jpg",C=a.p+"static/media/carousol-3.87c71b21.jpg",L=(a(84),a(56));function E(e){return Object(v.jsx)("div",{className:"content",children:Object(v.jsxs)(L.Carousel,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showArrows:!1,className:"car-container",dynamicHeight:"0",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:I}),Object(v.jsx)("p",{className:"car-label",children:"Exciting offers"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:D})}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:C})})]})})}a(89),a(90);var z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).toggleSize=function(e){s.state.addedtoCart&&s.setState({addedtoCart:!1}),document.getElementById("add-resp").classList.add("hide");var t=s.props,a=t.sizeData,n=t.discount,c=e.target.id.substr(0,e.target.id.indexOf("_")),i=a[c]-a[c]*(n/100);s.setState({currSize:c,currPrice:a[c],discountedPrice:i});var o,r=window.location.href,l=window.location.href.lastIndexOf("?item=");o=r.substring(l+6,l+8),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll");var d="?item="+o+"&size="+c;g.push(d)},s.addToCart=function(){var e=s.state.isLoggedIn,t=s.props.name,a=s.state.discountedPrice,n=s.state.currSize,c=s.props.discount,i=s.state.slug,o=s.getCookie("username"),r=openDatabase("mydb","1.0","Test DB",2097152);f(),e?r.transaction((function(e){e.executeSql("select * from USERS where uname = ?",[o],(function(e,o){var r=o.rows[0].id;O(t,a,n,c,i,r),console.log("Data added to cart"),document.getElementById("add-resp").classList.remove("hide"),s.setState({addedtoCart:!0})}),null)})):("/"!=g.location.pathname?g.push(g.location.pathname+"?login-modal=true&slug="+i+"&size="+n):g.push("?login-modal=true&slug="+i+"&size="+n),window.location.reload())},s.state={currSize:"",currPrice:"",discountedPrice:"",addedtoCart:!1,slug:"",isLoggedIn:!1},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.sizeData,a=e.discount,s=e.slug,n=t[Object.keys(t)[0]]-t[Object.keys(t)[0]]*(a/100);this.setState({currSize:Object.keys(t)[0],currPrice:t[Object.keys(t)[0]],discountedPrice:n});var c,i=window.location.href,o=i.lastIndexOf("&size="),r=i.lastIndexOf("?item=");if(-1!=r)if(-1!=o){var l=i.substring(o+6);if(c=i.substring(r+6,i.lastIndexOf("&")),l in t)this.setState({currSize:l});else{var d="?item="+c+"&size="+Object.keys(t)[0];g.push(d)}}else if(-1!=i.lastIndexOf("&")){var u="?item="+i.substring(r+6,i.lastIndexOf("&"))+"&size="+Object.keys(t)[0];g.push(u)}else{var m="?item="+i.substring(r+6)+"&size="+Object.keys(t)[0];g.push(m)}this.setState({slug:s}),void 0!=this.getCookie("username")&&this.setState({isLoggedIn:!0})}},{key:"off",value:function(){document.getElementById("overlay-div").classList.remove("show"),document.getElementsByTagName("body")[0].setAttribute("class","")}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}},{key:"render",value:function(){var e=this,t=this.props,a=t.image,s=t.name,n=t.description,c=t.category,i=t.sizeData,o=t.closeModal,r=this.state,l=r.currSize,d=r.currPrice,u=r.discountedPrice,m=r.addedtoCart;return Object(v.jsxs)("div",{className:"card-modal-container",children:[Object(v.jsx)("div",{className:"close-btn-wrapper",children:Object(v.jsx)("button",{className:"close-btn",onClick:function(){return o()},children:"X"})}),Object(v.jsxs)("div",{className:"card-modal-item",children:[Object(v.jsx)("div",{className:"card-modal-img-cont",children:Object(v.jsx)("img",{src:a,height:"150",alt:"Image",className:"card-modal-img"})}),Object(v.jsxs)("div",{className:"card-modal-content",children:[Object(v.jsxs)("p",{className:"card-modal-name",children:[s," "]}),Object(v.jsxs)("p",{className:"card-modal-cat",children:[" ",c," ",Object(v.jsx)("br",{})," ",n," "]}),Object(v.jsx)("div",{className:"card-modal-size-cont",children:Object.keys(i).map((function(t,a){return Object(v.jsx)("div",{id:t+"_"+s,className:"modal-card-size"+(l===t?" modal-size-active":""),onClick:function(t){return e.toggleSize(t)},children:t},a)}))}),Object(v.jsxs)("div",{className:"modal-card-price",children:[Object(v.jsxs)("p",{children:["Rs ",u]}),Object(v.jsx)("div",{className:"og-price-cont",children:Object(v.jsxs)("p",{children:["(",Object(v.jsx)("strike",{children:d}),")"]})})]}),Object(v.jsx)("div",{className:"card-modal-add",children:m&&Object(v.jsx)("button",{className:"card-modal-visit-btn",children:Object(v.jsx)(S.b,{to:"/cart",className:"link",onClick:function(){return e.off()},children:"VISIT CART"})})||Object(v.jsx)("button",{className:"card-modal-add-btn",onClick:this.addToCart,children:"ADD TO CART"})}),Object(v.jsx)("div",{className:"add-to-cart-resp hide",id:"add-resp",children:Object(v.jsx)("p",{className:"add-to-cart-resp-txt",children:"Item added to cart successfully"})})]})]})]})}}]),a}(s.Component),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).toggleSize=function(e){e.stopPropagation();var t=e.target.id.substr(0,e.target.id.indexOf("_"));s.setState({size:t,price:s.props.sizeData[t]})},s.state={size:"",price:"",clickValue:!1},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.sizeData;e.cardData;this.setState({size:Object.keys(t)[0],price:this.props.sizeData[Object.keys(t)[0]]})}},{key:"render",value:function(){var e=this,t=this.props,a=t.image,s=t.name,n=(t.description,t.category,t.discount,t.slug),c=t.sizeData,i=this.state,o=i.size,r=i.price;i.clickValue;return Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("div",{className:"card-img-cont",children:Object(v.jsx)("img",{src:a,height:"130",className:"card-img",alt:"Image"})}),Object(v.jsx)("div",{className:"card-name-cont",children:s}),Object(v.jsx)("div",{className:"card-size-cont",children:Object.keys(c).map((function(t,a){return Object(v.jsx)("div",{id:t+"_"+s,className:"card-size"+(o===t?" active":""),onClick:function(t){return e.toggleSize(t)},children:t},a)}))}),Object(v.jsxs)("div",{className:"card-price-cont",children:[Object(v.jsx)("b",{children:"Price  "}),": Rs ",r]}),Object(v.jsx)("div",{className:"card-btn-cont",children:Object(v.jsx)("button",{className:"card-buy-now",onClick:function(){return e.props.toggleModal(n)},children:"BUY NOW"})})]})}}]),a}(s.Component),M=a.p+"static/media/tshirt.9bdc5ab3.png",A=a(39);a(91);function B(e){var t=Object(s.useState)(""),a=Object(A.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)(""),o=Object(A.a)(i,2),r=o[0],l=o[1],d=Object(s.useState)(""),u=Object(A.a)(d,2),m=u[0],h=u[1],j=function(e){"contact-us-email"==e.target.name?c(e.target.value):l(e.target.value)},b=function(){""!=m&&h("")};return Object(v.jsx)("div",{className:"footer-container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-lg-9 ",children:Object(v.jsxs)("div",{className:"footer-info-container",children:[Object(v.jsx)("h2",{className:"footer-info-heading",children:"Shopping App"}),Object(v.jsx)("p",{className:"footer-content",children:"Shopping App is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions."}),Object(v.jsx)("p",{className:"footer-content",children:"Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every"})]})}),Object(v.jsx)("div",{className:"col-lg-3 ",children:Object(v.jsxs)("div",{className:"contact-us-container",children:[Object(v.jsx)("h2",{id:"contact-us-title",className:"footer-info-heading center",children:"Contact Us"}),Object(v.jsx)("p",{id:"contact-response",className:"contact-resp hide"}),Object(v.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!=n&&""!=r?fetch("http://demo8978959.mockable.io/contact").then((function(e){return e.json()})).then((function(e){console.log(e.message),document.getElementById("contact-response").classList.remove("hide"),document.getElementById("contact-us-form").classList.add("hide"),document.getElementById("contact-response").innerText=e.message})).catch((function(e){document.getElementById("contact-response").classList.remove("hide"),document.getElementById("contact-response").innerText=e})):h("Invalid input")}(e)},id:"contact-us-form",className:"contact-form",children:[Object(v.jsxs)("div",{className:"footer-input-cont",children:[Object(v.jsx)("div",{className:"form-label",children:Object(v.jsx)("label",{children:"Email"})}),Object(v.jsx)("input",{type:"email",required:!0,name:"contact-us-email",className:"contact-email-input",onKeyPress:function(){return b()},onChange:function(e){return j(e)}}),Object(v.jsx)("div",{className:"form-label",children:Object(v.jsx)("label",{children:"Message"})}),Object(v.jsx)("textarea",{type:"text",required:!0,name:"contact-us-msg",className:"contact-msg-input",onKeyPress:function(){return b()},onChange:function(e){return j(e)}})]}),Object(v.jsx)("p",{className:"contact-valid",children:m}),Object(v.jsx)("div",{className:"form-btn",children:Object(v.jsx)("button",{className:"contact-btn",children:"SUBMIT"})})]})]})})]})})}var q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).closeModal=function(){s.setState({clickValue:!1}),document.getElementsByTagName("body")[0].setAttribute("class",""),g.push(""),s.off()},s.toggleModalStatus=function(e){var t=s.state,a=t.cardData,n=(t.modal,a.filter((function(t){return t.slug==e})));s.setState({modal:n[0],clickValue:!0},(function(){var t="?item="+e+"&size="+Object.keys(n[0].size)[0];g.push(t),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll"),s.on()}))},s.state={cardData:"",dataLoaded:!1,modal:"",clickValue:!0},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://demo8978959.mockable.io/home").then((function(e){return e.json()})).then((function(t){e.setState({cardData:t.data,dataLoaded:!0,duplicateData:t.data});var a=window.location.href;if(a.lastIndexOf("login")>-1&&a.lastIndexOf("size")>-1);else if(-1==a.lastIndexOf("?login-modal=true")){var s,n=window.location.href.lastIndexOf("?item="),c=JSON.parse(JSON.stringify(e.state.cardData));if(-1!=n)if(s=a.substring(n+6,n+8),c.some((function(e){return e.slug===s}))){var i=c.filter((function(e){return e.slug==s}));e.setState({modal:i[0]}),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll")}else g.push("");else g.push("")}})).catch(console.log)}},{key:"on",value:function(){document.getElementById("overlay-div").classList.add("show")}},{key:"off",value:function(){document.getElementById("overlay-div").classList.remove("show")}},{key:"render",value:function(){var e=this,t=this.state,a=t.dataLoaded,s=t.cardData,n=t.modal,c=t.clickValue;return Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{cardData:s}),Object(v.jsx)(E,{}),Object(v.jsx)("div",{className:"card-container",children:a&&s.map((function(t,a){return Object(v.jsx)(T,{image:M,name:t.name,sizeData:t.size,description:t.description,category:t.category,discount:t.discount,slug:t.slug,openCart:e.openCart,toggleModal:e.toggleModalStatus},a)}))}),Object(v.jsx)("div",{children:n&&c&&Object(v.jsx)(z,{image:M,name:n.name,description:n.description,category:n.category,sizeData:n.size,discount:n.discount,slug:n.slug,closeModal:this.closeModal})}),Object(v.jsx)(B,{})]})}}]),a}(s.Component),R=(a(92),a.p+"static/media/men-heading.5653f94d.jpg");a(93);function P(e){return Object(v.jsx)("div",{className:"content-header-container",children:Object(v.jsxs)("div",{className:"header-title-container",children:[Object(v.jsx)("h2",{children:e.name}),Object(v.jsx)("div",{className:"header-img",children:Object(v.jsx)("img",{src:e.HeaderImg,alt:e.alt,width:"860",height:"345"})})]})})}var H=a(57);a(94),a(95);function F(){return Object(v.jsx)("div",{class:"linear-background"})}var V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={displayData:"",datareceived:!1,isLoading:!1,lastfilterbtn:"",filterselected:"All",sortselected:"",categoryList:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.cardData,t=Object(H.a)(new Set(e.map((function(e){return e.category}))));this.setState({displayData:e,datareceived:!0,categoryList:t})}},{key:"sort",value:function(e,t){var a=0===e?this.state.displayData.sort((function(e,t){return e.name>t.name?1:-1})):this.state.displayData.sort((function(e,t){return e.name>t.name?-1:1}));this.setState({cardData:a,sortselected:"LI"==t.target.tagName?t.target.id:""})}},{key:"toggleLoader",value:function(){this.setState({isLoading:!this.state.isLoading})}},{key:"handleFilterClick",value:function(e){var t=this;this.setState({filterselected:e}),""!=this.state.lastfilterbtn&&this.state.lastfilterbtn==e||(this.toggleLoader(),setTimeout((function(){var a=JSON.parse(JSON.stringify(t.props.cardData));if("All"==e)t.toggleLoader(),t.setState({lastfilterbtn:e,displayData:t.props.cardData});else{var s=a.filter((function(t){return t.category==e}));""!=t.state.lastfilterbtn&&t.state.lastfilterbtn==e||t.toggleLoader(),t.setState({lastfilterbtn:e,displayData:s})}}),1e3))}},{key:"filterSelect",value:function(e,t){this.setState({displayData:this.props.cardData}),t(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state,a=t.displayData,s=t.datareceived,n=t.isLoading,c=(t.lastfilterbtn,t.filterselected),i=t.sortselected,o=t.categoryList,r=Array(4).fill(null);return Object(v.jsxs)("div",{className:"filter-container",children:[Object(v.jsxs)("div",{className:"filters",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"sort-list",children:Object(v.jsxs)("ul",{id:"sort-list-tag",className:"filter-list-tags",children:[Object(v.jsx)("p",{className:"filter-list-head",children:"Sort"}),Object(v.jsx)("li",{className:"filtercard-btn"+("asc-btn"===i?" sort-active right-arrow":""),id:"asc-btn",onClick:function(t){e.sort(0,t)},"data-value":0,children:"Ascending"}),Object(v.jsx)("li",{className:"filtercard-btn"+("desc-btn"===i?" sort-active right-arrow":""),id:"desc-btn",onClick:function(t){e.sort(1,t)},"data-value":1,children:"Descending"})]})}),Object(v.jsx)("div",{className:"filter-list",children:Object(v.jsxs)("ul",{id:"filter-list-tag",className:"filter-list-tags",children:[Object(v.jsx)("p",{className:"filter-list-head",children:"Filter"}),Array.from(o).map((function(t,a){return Object(v.jsx)("li",{className:"filtercard-btn"+(c===t?" sort-active right-arrow":""),onClick:function(){e.handleFilterClick(t)},children:t},a+"_"+t)})),Object(v.jsx)("li",{className:"filtercard-btn"+("All"===c?" sort-active right-arrow":""),onClick:function(){e.handleFilterClick("All")},children:"All"},"filter_All")]})})]}),Object(v.jsxs)("div",{className:"mobile-filter-container",children:[Object(v.jsx)("div",{className:"mobile-sort",children:Object(v.jsxs)("select",{onChange:function(t){return e.sort(parseInt(t.target.value),t)},className:"filter-mobile-select",children:[Object(v.jsx)("option",{hidden:!0,children:"Sort"}),Object(v.jsx)("option",{value:"0",children:"Ascending"}),Object(v.jsx)("option",{value:"1",children:"Descending"})]})}),Object(v.jsx)("div",{className:"mobile-filter",children:Object(v.jsxs)("select",{onChange:function(t){return e.handleFilterClick(t.target.value)},className:"filter-mobile-select",value:c,children:[Object(v.jsx)("option",{hidden:!0,children:"Filter"}),Array.from(o).map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))]})})]})]}),Object(v.jsxs)("div",{className:"filtercard-container",children:[Object(v.jsx)("div",{className:"filtercard-container",id:"og-card-container",children:s&&!n&&a.map((function(t,a){return Object(v.jsx)(T,{image:e.props.img,name:t.name,description:t.description,category:t.category,discount:t.discount,sizeData:t.size,slug:t.slug,toggleModal:e.props.toggleModal},a)}))}),n&&r.map((function(e,t){return Object(v.jsx)(F,{},t)}))]})]})}}]),a}(s.Component),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).closeModal=function(){s.setState({clickValue:!1}),document.getElementsByTagName("body")[0].setAttribute("class",""),g.push("/catalog/men"),s.off()},s.toggleModalStatus=function(e){var t=s.state,a=t.cardData,n=(t.modal,a.filter((function(t){return t.slug==e})));s.setState({modal:n[0],clickValue:!0},(function(){var t="?item="+e+"&size="+Object.keys(n[0].size)[0];g.push(t),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll"),s.on()}))},s.state={cardData:"",dataLoaded:!1,duplicateData:"",clickValue:!0,modal:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("Men"===this.props.name?"http://demo8978959.mockable.io/catalog/men":"http://demo8978959.mockable.io/catalog/women").then((function(e){return e.json()})).then((function(t){e.setState({cardData:t.data,dataLoaded:!0,duplicateData:t.data});var a=window.location.href;if(a.lastIndexOf("login")>-1&&a.lastIndexOf("size")>-1);else if(-1==a.lastIndexOf("?login-modal=true")){var s,n=window.location.href.lastIndexOf("?item="),c=JSON.parse(JSON.stringify(e.state.cardData));if(-1!=n)if(s=a.substring(n+6,n+8),c.some((function(e){return e.slug===s}))){var i=c.filter((function(e){return e.slug==s}));e.setState({modal:i[0]}),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll")}else g.push("/catalog/men"),console.log("incor item");else g.push("/catalog/men"),console.log("no url item")}})).catch(console.log)}},{key:"on",value:function(){document.getElementById("overlay-div").classList.add("show")}},{key:"off",value:function(){document.getElementById("overlay-div").classList.remove("show")}},{key:"render",value:function(){this.props.name;var e=this.state,t=e.cardData,a=e.dataLoaded,s=e.modal,n=e.clickValue;return Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{}),Object(v.jsx)("h2",{className:"category-title",children:this.props.name}),Object(v.jsxs)("div",{className:"category-content",children:[Object(v.jsx)(P,{HeaderImg:R,alt:"Category Image"}),a&&Object(v.jsx)(V,{cardData:t,img:M,toggleModal:this.toggleModalStatus})]}),Object(v.jsx)("div",{children:s&&n&&Object(v.jsx)(z,{image:M,name:s.name,description:s.description,category:s.category,sizeData:s.size,discount:s.discount,slug:s.slug,closeModal:this.closeModal})}),Object(v.jsx)(B,{})]})}}]),a}(s.Component),U=(a(96),a.p+"static/media/kurta.5168525e.png"),J=a.p+"static/media/women-heading.427a20e0.jpg",K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).closeModal=function(){s.setState({clickValue:!1}),document.getElementsByTagName("body")[0].setAttribute("class",""),g.push("/catalog/women"),s.off()},s.toggleModalStatus=function(e){var t=s.state,a=t.cardData,n=(t.modal,a.filter((function(t){return t.slug==e})));s.setState({modal:n[0],clickValue:!0},(function(){var t="?item="+e+"&size="+Object.keys(n[0].size)[0];g.push(t),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll"),s.on()}))},s.state={cardData:"",dataLoaded:!1,duplicateData:"",clickValue:!0,modal:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),fetch("Men"===this.props.name?"http://demo8978959.mockable.io/catalog/men":"http://demo8978959.mockable.io/catalog/women").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1}),e.setState({cardData:t.data,dataLoaded:!0,duplicateData:t.data});var a=window.location.href;if(a.lastIndexOf("login")>-1&&a.lastIndexOf("size")>-1);else if(-1==a.lastIndexOf("?login-modal=true")){var s,n=window.location.href.lastIndexOf("?item="),c=JSON.parse(JSON.stringify(e.state.cardData));if(-1!=n)if(s=a.substring(n+6,n+8),c.some((function(e){return e.slug===s}))){var i=c.filter((function(e){return e.slug==s}));e.setState({modal:i[0]}),document.getElementsByTagName("body")[0].setAttribute("class","no-scroll")}else g.push("/catalog/women"),console.log("incor item");else g.push("/catalog/women"),console.log("no url item")}})).catch(console.log)}},{key:"on",value:function(){document.getElementById("overlay-div").classList.add("show")}},{key:"off",value:function(){document.getElementById("overlay-div").classList.remove("show")}},{key:"render",value:function(){this.props.name;var e=this.state,t=e.cardData,a=e.dataLoaded,s=e.modal,n=e.clickValue;return Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{}),Object(v.jsx)("h1",{className:"category-title",children:this.props.name}),Object(v.jsxs)("div",{className:"category-content",children:[Object(v.jsx)(P,{HeaderImg:J,alt:"Category Image"}),a&&Object(v.jsx)(V,{cardData:t,img:U,toggleModal:this.toggleModalStatus})]}),Object(v.jsx)("div",{children:s&&n&&Object(v.jsx)(z,{image:U,name:s.name,description:s.description,category:s.category,sizeData:s.size,discount:s.discount,slug:s.slug,closeModal:this.closeModal})}),Object(v.jsx)(B,{})]})}}]),a}(s.Component),Y=(a(97),a(98),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).removeItem=function(){var t=e.props,a=t.slug,s=t.size,n=openDatabase("mydb","1.0","Test DB",2097152),c=e.getCookie("username");n.transaction((function(e){e.executeSql("select * from USERS where uname = ?",[c],(function(e,t){var c=t.rows[0].id;n.transaction((function(e){e.executeSql("delete from CART_ITEMS where slug = ? and size = ? and u_id = ?",[a,s,c],(function(e,t){console.log(t),window.location.reload()}))}))}),null)}))},e}return Object(r.a)(a,[{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.size,s=e.discount,n=e.price,c=e.quantity,i=(parseInt(n)*parseInt(c)-parseInt(n)*parseInt(c)*(parseInt(s)/100)).toFixed(2),o=(parseInt(n)-parseInt(n)*(parseInt(s)/100)).toFixed(2);return Object(v.jsxs)("div",{className:"cart-item-container",children:[Object(v.jsxs)("div",{className:"cart-item-data-cont",children:[Object(v.jsx)("div",{className:"cart-item-img-cont",children:Object(v.jsx)("img",{src:M,alt:"cart-img",width:"100",height:"100",className:"cart-item-img"})}),Object(v.jsxs)("div",{className:"cart-item-content-cont",children:[Object(v.jsx)("div",{children:Object(v.jsx)("b",{children:t})}),Object(v.jsx)("div",{children:a}),Object(v.jsxs)("div",{className:"cart-item-discount",children:["\u20b9",o," ",Object(v.jsxs)("div",{className:"cart-item-dis-price",children:[" ",n]}),Object(v.jsxs)("div",{className:"cart-item-dis",children:["(",parseInt(s),"% OFF)"]})]}),Object(v.jsxs)("div",{children:["Quantity : ",parseInt(c)]})]})]}),Object(v.jsxs)("div",{className:"cart-item-footer",children:[Object(v.jsx)("div",{className:"cartitem-footer-btn-cont",children:Object(v.jsx)("button",{className:"cart-item-btn-delete",onClick:this.removeItem,children:"REMOVE"})}),Object(v.jsxs)("div",{className:"cart-price-wrapper",children:["\u20b9",i]})]})]})}}]),a}(s.Component)),X=(a(99),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).logOut=function(){document.cookie="username=;password=;",g.push("/"),window.location.reload()},s.state={totalAmt:"",grandAmt:"",totalDiscount:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.data,t=0,a=0,s=0;e.map((function(e){t+=parseInt(e.price)*parseInt(e.quantity),a+=parseInt(e.price)*parseInt(e.quantity)-parseInt(e.price)*parseInt(e.quantity)*(parseInt(e.discount)/100),s+=parseInt(e.price)*parseInt(e.quantity)*(parseInt(e.discount)/100)})),this.setState({totalAmt:t,grandAmt:a,totalDiscount:s})}},{key:"render",value:function(){var e=this.state,t=e.totalAmt,a=e.grandAmt,s=e.totalDiscount;return Object(v.jsxs)("div",{className:"cart-total-cont",children:[Object(v.jsx)("div",{className:"cart-total-header",children:"Price Details"}),Object(v.jsxs)("div",{className:"cart-total-mrp-wrapper",children:[Object(v.jsx)("div",{children:"Total MRP"})," ",Object(v.jsxs)("div",{children:["\u20b9",""!=t&&t.toFixed(0)]})]}),Object(v.jsxs)("div",{className:"cart-total-dis-wrapper",children:[Object(v.jsx)("div",{children:"Total Discount"})," ",Object(v.jsxs)("div",{children:["\u20b9",""!=s&&s.toFixed(0)]})]}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"cart-total-amt-wrapper dark",children:[Object(v.jsx)("div",{children:"Grand Total "})," ",Object(v.jsxs)("div",{children:["\u20b9",""!=a&&a.toFixed(0)]})]}),Object(v.jsxs)("div",{className:"cart-total-disc-txt",children:["You save \u20b9",""!=s&&s.toFixed(0)," on this product"]}),Object(v.jsx)("div",{className:"cart-place-order",children:Object(v.jsx)("button",{className:"place-order-btn",children:"PLACE ORDER"})}),Object(v.jsx)("div",{className:"cart-log-out",children:Object(v.jsx)("button",{className:"cart-log-out-btn",onClick:this.logOut,children:"Log Out"})})]})}}]),a}(s.Component)),W=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).DisplayData=function(){s.state.cartItems.map((function(e){return console.log(e),Object(v.jsx)(Y,{name:e.name,price:e.price,size:e.size,discount:e.discount},e.id)}))},s.logOut=function(){document.cookie="username=;password=;",g.push("/"),window.location.reload()},s.state={cartItems:[],dataLoaded:!1},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=openDatabase("mydb","1.0","Test DB",2097152),a=this.getCookie("username");t.transaction((function(s){s.executeSql("select * from USERS where uname = ?",[a],(function(a,s){var n=s.rows[0].id;t.transaction((function(t){t.executeSql("select * from CART_ITEMS where u_id = ?",[n],(function(t,a){for(var s=[],n=0;n<a.rows.length;n++)s.push({id:a.rows.item(n).id,name:a.rows.item(n).name,price:a.rows.item(n).price,size:a.rows.item(n).size,discount:a.rows.item(n).discount,slug:a.rows.item(n).slug,quantity:a.rows.item(n).quantity});e.setState({cartItems:s,dataLoaded:!0})}),null)}))}),null)}))}},{key:"getCookie",value:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));if(t)return t[2]}},{key:"render",value:function(){var e=this.state,t=e.cartItems,a=(e.dataLoaded,t.length);return Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{}),Object(v.jsx)("div",{className:"cart-main",children:0==a&&Object(v.jsxs)("div",{className:"empty-cart-div",children:[Object(v.jsx)("h2",{className:"empty-cart-head",children:"Cart is Empty"}),Object(v.jsx)("div",{className:"empty-cart-btn-div",children:Object(v.jsx)("button",{className:"empty-cart-btn",children:Object(v.jsx)(S.b,{to:"/",className:"link",children:Object(v.jsx)("div",{children:"HOME"})})})}),Object(v.jsx)("div",{className:"cart-log-out",children:Object(v.jsx)("button",{className:"cart-log-out-btn",onClick:this.logOut,children:"Log Out"})})]})||Object(v.jsxs)("div",{className:"cart-container",children:[Object(v.jsx)("div",{className:"cart-items-div",children:t.length>0&&t.map((function(e){return console.log(e),Object(v.jsx)(Y,{name:e.name,price:e.price,size:e.size,discount:e.discount,slug:e.slug,quantity:e.quantity})}))}),Object(v.jsx)("div",{className:"cart-total-div",children:t.length>0&&Object(v.jsx)(X,{data:t})})]})}),Object(v.jsx)(B,{})]})}}]),a}(s.Component),G=a(11),Q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(S.a,{children:Object(v.jsxs)(G.c,{children:[Object(v.jsx)(G.a,{exact:!0,path:"/catalog/men",children:Object(v.jsx)(_,{name:"Men"})}),Object(v.jsx)(G.a,{exact:!0,path:"/catalog/women",children:Object(v.jsx)(K,{name:"Women"})}),Object(v.jsx)(G.a,{exact:!0,path:"/cart",children:Object(v.jsx)(W,{})}),Object(v.jsx)(G.a,{exact:!0,path:"/",children:Object(v.jsx)(q,{})})]})})})}}]),a}(n.a.Component),Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,109)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(Q,{})}),document.getElementById("root")),Z()},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},83:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[100,1,2]]]);
//# sourceMappingURL=main.53299c07.chunk.js.map