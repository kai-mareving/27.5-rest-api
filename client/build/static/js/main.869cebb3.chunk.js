(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,r){"use strict";r.r(t);var a=r(1),c=r.n(a),n=r(27),s=r.n(n),o=r(34),i=r(22),l=r(26),j=r(51),u=r(25),d=r(7),b=r(12),O=r.n(b),h=r(23),p=r(29),m=r.n(p),x="/api",f=function(e){return"app/".concat("concerts","/").concat(e)},y=f("START_REQUEST"),v=f("END_REQUEST"),g=f("ERROR_REQUEST"),S=f("LOAD_CONCERTS"),_={data:[],request:{pending:!1,error:null,success:null}};var k=r(20),E=function(e){return e.seats.requests},D=function(e){return"app/".concat("seats","/").concat(e)},A=D("START_REQUEST"),T=D("END_REQUEST"),w=D("ERROR_REQUEST"),N=D("LOAD_SEATS"),q=D("ADD_SEAT"),R=function(e){return{payload:e,type:A}},C=function(e){return{payload:e,type:T}},L=function(e){return{payload:e,type:w}},F=function(){return function(){var e=Object(h.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R({name:"LOAD_SEATS"})),e.prev=1,e.next=4,m.a.get("".concat(x,"/seats"));case 4:r=e.sent,t({payload:r.data,type:N}),t(C({name:"LOAD_SEATS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(L({name:"LOAD_SEATS",error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},U={data:[],requests:[],seat:null};var H=Object(l.c)({concerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case y:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!0,error:null,success:!1}});case v:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:null,success:!0}});case g:return Object(d.a)(Object(d.a)({},e),{},{request:{pending:!1,error:t.error,success:!1}});default:return e}},seats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(d.a)(Object(d.a)({},e),{},{data:Object(u.a)(t.payload)});case q:return Object(d.a)(Object(d.a)({},e),{},{data:[].concat(Object(u.a)(e.data),[t.payload]),seat:t.payload.data.seat});case A:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!0,error:null,success:!1}))});case T:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:null,success:!0}))});case w:return Object(d.a)(Object(d.a)({},e),{},{requests:Object(d.a)(Object(d.a)({},e.requests),{},Object(k.a)({},t.payload.name,{pending:!1,error:t.payload.error,success:!1}))});default:return e}}}),P=Object(l.e)(H,Object(l.d)(Object(l.a)(j.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),I=r(15),M=r(16),W=r(19),Q=r(18),J=r(24),X=r(101),Y=r(102),$=r(103),G=r(104),V=r(105),B=r(106),z=r(107),K=r(108),Z=r(2),ee=function(e){Object(W.a)(r,e);var t=Object(Q.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1},e.toggle=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(M.a)(r,[{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(X.a,{color:"dark",dark:!0,expand:"md",children:[Object(Z.jsx)(Y.a,{href:"/",children:"New Wave Festival"}),Object(Z.jsx)($.a,{onClick:this.toggle}),Object(Z.jsx)(G.a,{isOpen:this.state.isOpen,navbar:!0,children:Object(Z.jsxs)(V.a,{className:"ml-auto align-items-center",navbar:!0,children:[Object(Z.jsx)(B.a,{children:Object(Z.jsx)(z.a,{href:"/",children:"Home"})}),Object(Z.jsx)(B.a,{children:Object(Z.jsx)(z.a,{href:"/prices",children:"Prices"})}),Object(Z.jsx)(B.a,{children:Object(Z.jsx)(z.a,{href:"/order-a-ticket",children:Object(Z.jsx)(K.a,{outline:!0,color:"primary",children:"Order a ticket!"})})})]})})]})})}}]),r}(c.a.Component),te=ee,re=function(){return Object(Z.jsx)("footer",{id:"sticky-footer",className:"py-4 mt-5 bg-dark text-white-50",children:Object(Z.jsx)("div",{className:"text-center",children:Object(Z.jsx)("small",{children:"Copyright \xa9 New Wave Festival 2019"})})})},ae=function(e){var t=e.children;return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(te,{}),t,Object(Z.jsx)(re,{})]})},ce=r(112),ne=r(117),se=(r(89),[{src:"/img/promo/promo1.jpg",header:"Great atmosphere!",caption:"Have fun with thousands of people!",alt:"Have fun with thousands of people!"},{src:"/img/promo/promo2.jpg",altText:"Listen to the greatest hits!",caption:"Take a part in phenomenal performances.",header:"Listen to the greatest hits"},{src:"/img/promo/promo3.jpg",altText:"Meet stars!",caption:"Meet the biggest music starts live!",header:"Meet stars!"}]),oe=function(){return Object(Z.jsx)(ne.a,{className:"promoCarousel",items:se})},ie=r(111),le=r(118),je=r(109),ue=r(110),de=(r(90),function(e){var t=e.performer,r=e.price,a=e.genre,c=e.day,n=e.image;return Object(Z.jsx)("article",{className:"concert",children:Object(Z.jsxs)(je.a,{noGutters:!0,children:[Object(Z.jsx)(ue.a,{xs:"6",children:Object(Z.jsx)("div",{className:"concert__image-container",children:Object(Z.jsx)("img",{className:"concert__image-container__img",src:n,alt:t})})}),Object(Z.jsx)(ue.a,{xs:"6",children:Object(Z.jsxs)("div",{className:"concert__info",children:[Object(Z.jsx)("img",{className:"concert__info__back",src:n,alt:t}),Object(Z.jsx)("h2",{className:"concert__info__performer",children:t}),Object(Z.jsx)("h3",{className:"concert__info__genre",children:a}),Object(Z.jsxs)("p",{className:"concert__info__day-n-price",children:["Day: ",c,", Price: ",r,"$"]})]})})]})})}),be=function(e){var t=e.concerts;return Object(Z.jsx)("section",{children:t.map((function(e){return Object(Z.jsx)(de,Object(d.a)({},e),e.id)}))})},Oe=function(e){Object(W.a)(r,e);var t=Object(Q.a)(r);function r(){return Object(I.a)(this,r),t.apply(this,arguments)}return Object(M.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.loadConcerts)()}},{key:"render",value:function(){var e=this.props,t=e.request,r=e.concerts;return t.pending?Object(Z.jsx)(ie.a,{animated:!0,color:"primary",value:50}):t.error?Object(Z.jsx)(le.a,{color:"warning",children:t.error}):t.success&&r.length?t.success?Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)(be,{concerts:r})}):void 0:Object(Z.jsx)(le.a,{color:"info",children:"No concerts"})}}]),r}(c.a.Component),he=Oe,pe=Object(i.b)((function(e){return{concerts:(r=e,r.concerts.data),request:(t=e,t.concerts.request)};var t,r}),(function(e){return{loadConcerts:function(){return e(function(){var e=Object(h.a)(O.a.mark((function e(t){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,m.a.get("".concat(x,"/concerts"));case 4:r=e.sent,t({payload:r.data,type:S}),t({type:v}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({error:e.t0.message,type:g});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}}}))(he),me=function(){return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(oe,{}),Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Who's on?"}),Object(Z.jsx)(pe,{})]})]})},xe=function(){return Object(Z.jsx)("div",{children:Object(Z.jsx)("h1",{children:"404 Not Found"})})},fe=function(){return Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Prices"}),Object(Z.jsx)("p",{children:"Prices may differ according the day of the festival. Remember that ticket includes not only the star performance, but also 10+ workshops. We gathered several genre teachers to help you increase your vocal skills, as well as self confidence."}),Object(Z.jsxs)(le.a,{color:"info",children:["Attention! ",Object(Z.jsx)("strong",{children:"Children under 4 can go freely with you without any other fee!"})]}),Object(Z.jsx)("h2",{children:"Day one"}),Object(Z.jsx)("p",{children:"Price: 25$"}),Object(Z.jsx)("p",{children:'Workshops: "Rock Music Style", "How to make you voice grooowl", "Make your voice stronger", "History of Rock"'}),Object(Z.jsx)("h2",{children:"Day Two"}),Object(Z.jsx)("p",{children:"Price: 25$"}),Object(Z.jsx)("p",{children:'Workshops: "Find your real tune", "Find your real YOU", "Fell the music", "Jam session"'}),Object(Z.jsx)("h2",{children:"Day three"}),Object(Z.jsx)("p",{children:"Price: 50$"}),Object(Z.jsx)("p",{children:'Workshops: "Increase your vocal range", "How to properly warmup before singing", "It\'s time for YOU!"'})]})},ye=r(113),ve=r(114),ge=r(115),Se=r(116),_e=(r(91),r(32)),ke=(r(92),function(e){Object(W.a)(r,e);var t=Object(Q.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).isTaken=function(t){var r=e.props,a=r.seats,c=r.chosenDay;return a.some((function(e){return e.seat===t&&e.day===c}))},e.prepareSeat=function(t){var r=e.props,a=r.chosenSeat,c=r.updateSeat,n=Object(_e.a)(e).isTaken;return t===a?Object(Z.jsx)(K.a,{className:"seats__seat",color:"primary",children:t},t):n(t)?Object(Z.jsx)(K.a,{className:"seats__seat",disabled:!0,color:"secondary",children:t},t):Object(Z.jsx)(K.a,{color:"primary",className:"seats__seat",outline:!0,onClick:function(e){return c(e,t)},children:t},t)},e}return Object(M.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.loadSeats;e(),this.setState({interval:setInterval((function(){return e()}),3e4)})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval)}},{key:"render",value:function(){var e=this.prepareSeat,t=this.props.requests;return Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h3",{children:"Pick a seat"}),Object(Z.jsxs)("small",{id:"pickHelp",className:"form-text text-muted ml-2",children:[Object(Z.jsx)(K.a,{color:"secondary"})," \u2013 seat is already taken"]}),Object(Z.jsxs)("small",{id:"pickHelpTwo",className:"form-text text-muted ml-2 mb-4",children:[Object(Z.jsx)(K.a,{outline:!0,color:"primary"})," \u2013 it's empty"]}),t.LOAD_SEATS&&t.LOAD_SEATS.success&&Object(Z.jsx)("div",{className:"seats",children:Object(u.a)(Array(50)).map((function(t,r){return e(r+1)}))}),t.LOAD_SEATS&&t.LOAD_SEATS.pending&&Object(Z.jsx)(ie.a,{animated:!0,color:"primary",value:50}),t.LOAD_SEATS&&t.LOAD_SEATS.error&&Object(Z.jsx)(le.a,{color:"warning",children:"Couldn't load seats..."})]})}}]),r}(c.a.Component)),Ee=ke,De=Object(i.b)((function(e){return{seats:(t=e,t.seats.data),requests:E(e)};var t}),(function(e){return{loadSeats:function(){return e(F())}}}))(Ee),Ae=function(e){Object(W.a)(r,e);var t=Object(Q.a)(r);function r(){var e;Object(I.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={order:{client:"",email:"",day:1,seat:""},isError:!1},e.updateSeat=function(t,r){var a=e.state.order;t.preventDefault(),e.setState({order:Object(d.a)(Object(d.a)({},a),{},{seat:r})})},e.updateTextField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(k.a)({},n,c))})},e.updateNumberField=function(t){var r=t.target,a=e.state.order,c=r.value,n=r.name;e.setState({order:Object(d.a)(Object(d.a)({},a),{},Object(k.a)({},n,parseInt(c)))})},e.submitForm=function(){var t=Object(h.a)(O.a.mark((function t(r){var a,c,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state.order,c=e.props,n=c.addSeat,s=c.loadSeats,r.preventDefault(),!(a.client&&a.email&&a.day&&a.seat)){t.next=10;break}return t.next=6,n(a);case 6:s(),e.setState({order:{client:"",email:"",day:1,seat:""},isError:!1}),t.next=11;break;case 10:e.setState({isError:!0});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(M.a)(r,[{key:"render",value:function(){var e=this.updateSeat,t=this.updateTextField,r=this.updateNumberField,a=this.submitForm,c=this.props,n=c.requests,s=c.newseat,o=this.state,i=o.order,l=o.isError;return Object(Z.jsx)(ye.a,{className:"order-ticket-form",onSubmit:a,children:Object(Z.jsxs)(je.a,{children:[Object(Z.jsxs)(ue.a,{xs:"12",md:"6",children:[l&&Object(Z.jsx)(le.a,{color:"warning",children:"There are some errors in you form. Have you fill all the fields? Maybe you forgot to choose your seat?"}),n.ADD_SEAT&&n.ADD_SEAT.error&&!l&&Object(Z.jsx)(le.a,{color:"danger",children:n.ADD_SEAT.error}),n.ADD_SEAT&&n.ADD_SEAT.success&&!l&&Object(Z.jsxs)(le.a,{color:"success",children:["You've booked your ticket! Seat no. ",s.seat," reserved! Check you email in order to make a payment."]}),n.ADD_SEAT&&n.ADD_SEAT.pending&&Object(Z.jsx)(ie.a,{animated:!0,className:"mb-5",color:"primary",value:75}),Object(Z.jsxs)(ve.a,{children:[Object(Z.jsx)(ge.a,{for:"clientEmail",children:"Name"}),Object(Z.jsx)(Se.a,{type:"text",value:i.client,name:"client",onChange:t,id:"clientName",placeholder:"John Doe"})]}),Object(Z.jsxs)(ve.a,{children:[Object(Z.jsx)(ge.a,{for:"clientEmail",children:"Email"}),Object(Z.jsx)(Se.a,{type:"email",value:i.email,name:"email",onChange:t,id:"clientEmail",placeholder:"johndoe@example.com"})]}),Object(Z.jsxs)(ve.a,{children:[Object(Z.jsx)(ge.a,{for:"clientDay",children:"Select which day of festivals are you interested in:"}),Object(Z.jsxs)(Se.a,{type:"select",value:i.day,name:"day",onChange:r,id:"exampleSelect",children:[Object(Z.jsx)("option",{children:"1"}),Object(Z.jsx)("option",{children:"2"}),Object(Z.jsx)("option",{children:"3"})]}),Object(Z.jsx)("small",{id:"dayHelp",className:"form-text text-muted",children:"Every day of the festival uses individual ticket. You can book only one ticket at the time."})]}),Object(Z.jsx)(ve.a,{check:!0,children:Object(Z.jsxs)(ge.a,{check:!0,children:[Object(Z.jsx)(Se.a,{required:!0,type:"checkbox"})," I agree with ",Object(Z.jsx)("a",{href:"#",children:"Terms and conditions"})," and ",Object(Z.jsx)("a",{href:"#",children:"Privacy Policy"}),"."]})}),Object(Z.jsx)(K.a,{color:"primary",className:"mt-3",children:"Submit"})]}),Object(Z.jsx)(ue.a,{xs:"12",md:"6",children:Object(Z.jsx)(De,{chosenDay:i.day,chosenSeat:i.seat,updateSeat:e})})]})})}}]),r}(c.a.Component),Te=Ae,we=Object(i.b)((function(e){return{requests:E(e),newseat:(t=e,t.seats.seat)};var t}),(function(e){return{addSeat:function(t){return e(function(e){return function(){var t=Object(h.a)(O.a.mark((function t(r){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(R({name:"ADD_SEAT"})),t.prev=1,t.next=4,m.a.post("".concat(x,"/seats"),e);case 4:a=t.sent,r({payload:a,type:q}),r(C({name:"ADD_SEAT"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(L({name:"ADD_SEAT",error:t.t0.response.data.message}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))},loadSeats:function(){return e(F())}}}))(Te),Ne=function(){return Object(Z.jsxs)(ce.a,{children:[Object(Z.jsx)("h1",{children:"Order a ticket"}),Object(Z.jsx)(we,{})]})},qe=function(e){Object(W.a)(r,e);var t=Object(Q.a)(r);function r(){return Object(I.a)(this,r),t.apply(this,arguments)}return Object(M.a)(r,[{key:"render",value:function(){return Object(Z.jsx)(ae,{children:Object(Z.jsxs)(J.c,{children:[Object(Z.jsx)(J.a,{path:"/",exact:!0,component:me}),Object(Z.jsx)(J.a,{path:"/prices",exact:!0,component:fe}),Object(Z.jsx)(J.a,{path:"/order-a-ticket",exact:!0,component:Ne}),Object(Z.jsx)(J.a,{component:xe})]})})}}]),r}(c.a.Component),Re=qe,Ce=(r(98),r(99),function(){return Object(Z.jsx)(i.a,{store:P,children:Object(Z.jsx)(o.a,{children:Object(Z.jsx)(Re,{})})})});s.a.render(Object(Z.jsx)(Ce,{}),document.getElementById("root"))},89:function(e,t,r){},90:function(e,t,r){},91:function(e,t,r){},92:function(e,t,r){},99:function(e,t,r){}},[[100,1,2]]]);
//# sourceMappingURL=main.869cebb3.chunk.js.map