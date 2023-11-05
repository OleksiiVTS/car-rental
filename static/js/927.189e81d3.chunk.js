"use strict";(self.webpackChunkcar_rental=self.webpackChunkcar_rental||[]).push([[927],{4949:function(n,e,i){i(2791);e.Z=i.p+"static/media/sprite.a9ab1437019718a7e6790492147b8da0.svg"},6963:function(n,e,i){i.d(e,{Z:function(){return T}});var r,t,a,o,l,c,p,s,d,x,h,u=i(9439),g=i(2791),f=i(4949),b=i(9434),m=i(8831),Z=i(3329),j=function(n){var e=n.data,i=n.closeModal,r=(0,b.I0)(),t=e.rentalConditions.split("\n"),a=t[0].split(":");return(0,g.useEffect)((function(){document.body.style.overflow="hidden";var n=function(n){"Escape"===n.code&&i()};return window.addEventListener("keydown",n),function(){document.body.style.overflow="unset",window.removeEventListener("keydown",n)}}),[r,i]),(0,Z.jsx)(m.qE,{name:"backdrop",onClick:function(n){var e;(null===(e=n.target.attributes.name)||void 0===e?void 0:e.nodeValue)&&i()},children:(0,Z.jsxs)(m.wu,{children:[(0,Z.jsx)(m.fb,{width:16,height:16,onClick:i,children:(0,Z.jsx)("use",{href:f.Z+"#cross"})}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(m.zm,{children:(0,Z.jsx)(m.qB,{src:e.img,alt:"General view of the car"})}),(0,Z.jsxs)(m.a2,{children:[(0,Z.jsx)("p",{children:e.make}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(m.QN,{children:e.model}),","]}),(0,Z.jsx)("p",{children:e.year})]}),(0,Z.jsxs)(m.GU,{children:[e.address.replace(/,/g," |")," | ",e.rentalCompany," |"," ",e.make," | ",e.model," | ",e.type," |"," ",e.mileage.toLocaleString("en-IN")," | ",e.fuelConsumption," |"," ",e.engineSize]}),(0,Z.jsx)(m.lg,{children:e.description}),(0,Z.jsx)(m.em,{children:"Accessories and functionalities:"}),(0,Z.jsxs)(m.GU,{children:[(0,Z.jsx)("p",{children:e.accessories.join(" | ")}),(0,Z.jsx)("p",{children:e.functionalities.join(" | ")})]}),(0,Z.jsx)(m.em,{children:"Rental Conditions:"}),(0,Z.jsxs)(m.jn,{children:[(0,Z.jsxs)("li",{children:[a[0],":",(0,Z.jsx)(m.QN,{children:a[1]})]}),(0,Z.jsx)("li",{children:t[1]}),(0,Z.jsx)("li",{children:t[2]}),(0,Z.jsx)("li",{children:(0,Z.jsxs)("p",{children:["Mileage:"," ",(0,Z.jsx)(m.QN,{children:e.mileage.toLocaleString("en-IN")})]})}),(0,Z.jsx)("li",{children:(0,Z.jsxs)("p",{children:["Price: ",(0,Z.jsx)(m.QN,{children:e.rentalPrice})]})})]})]}),(0,Z.jsx)(m.ec,{target:"_blank",rel:"noreferrer",href:"https://support.google.com/chrome/thread/230556846?hl=ru",children:"Rental car"})]})})},w=i(2570),v=i(168),y=i(6444),k=y.ZP.div(r||(r=(0,v.Z)(["\n  position: relative;\n  max-width: 274px;\n\n  padding: 5px;\n\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px;\n"]))),P=y.ZP.img(t||(t=(0,v.Z)(["\n  border-radius: 12px;\n"]))),M=y.ZP.label(a||(a=(0,v.Z)(["\n  cursor: pointer;\n  position: absolute;\n  appearance: none;\n  top: 16px;\n  right: 16px;\n  width: 18px;\n  height: 18px;\n"]))),C=y.ZP.input(o||(o=(0,v.Z)(["\n  position: absolute;\n  appearance: none;\n"]))),z=y.ZP.div(l||(l=(0,v.Z)(["\n  margin-top: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n"]))),S=y.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  height: 53px;\n"]))),B=y.ZP.span(p||(p=(0,v.Z)(["\n  color: rgba(52, 112, 255, 1);\n"]))),F=y.ZP.div(s||(s=(0,v.Z)(["\n  margin-top: 8px;\n  max-height: 40px;\n  color: rgba(18, 20, 23, 0.5);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n"]))),N=y.ZP.button(d||(d=(0,v.Z)(["\n  transition-property: background-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  margin-top: 28px;\n  width: 100%;\n  height: 44px;\n  color: white;\n  background-color: rgba(52, 112, 255, 1);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px;\n\n  &:hover {\n    box-shadow: none;\n    background-color: rgba(11, 68, 205, 1);\n  }\n"]))),L=function(n){var e=n.car,i=n.handelClick,r=(0,w.n)(),t=r.addCarToFavorite,a=r.dellCarFromFavorite,o=r.isFavoriteCars.includes(e);return(0,Z.jsxs)(k,{children:[(0,Z.jsx)(P,{src:e.img,alt:"General view of the car"}),(0,Z.jsxs)(M,{children:[(0,Z.jsx)(C,{type:"checkbox",id:e.id,checked:o,onChange:function(){o?a(e):t(e)}}),(0,Z.jsx)("svg",{width:18,height:18,children:o?(0,Z.jsx)("use",{href:f.Z+"#dislike"}):(0,Z.jsx)("use",{href:f.Z+"#like"})})]}),(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(S,{children:[(0,Z.jsx)("p",{children:e.make}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(B,{children:e.model}),","]}),(0,Z.jsx)("p",{children:e.year})]}),(0,Z.jsx)("div",{children:(0,Z.jsx)("p",{children:e.rentalPrice})})]}),(0,Z.jsxs)(F,{children:[e.address.replace(/,/g," |")," | ",e.rentalCompany," | ",e.make," |"," ",e.model," | ",e.type," | ",e.mileage.toLocaleString("en-IN")]}),(0,Z.jsx)(N,{type:"button",onClick:function(){return i(e)},children:"Learn more"})]})},E=y.ZP.div(x||(x=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  height: auto;\n"]))),I=y.ZP.ul(h||(h=(0,v.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  column-gap: 29px;\n  row-gap: 50px;\n  padding: 0 10px;\n  width: 1440px;\n"]))),T=function(n){var e=n.data,i=void 0===e?[]:e,r=(0,g.useState)(!1),t=(0,u.Z)(r,2),a=t[0],o=t[1],l=(0,g.useState)({}),c=(0,u.Z)(l,2),p=c[0],s=c[1],d=function(n){s(n),o(!0)};return(0,Z.jsxs)(E,{children:[a&&(0,Z.jsx)(j,{data:p,closeModal:function(){return o(!1)}}),(0,Z.jsx)(I,{children:i.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(L,{car:n,handelClick:d})},n.id)}))})]})}},117:function(n,e,i){i.d(e,{Z:function(){return V}});var r,t,a,o,l,c,p,s,d,x,h,u,g,f,b,m=i(3433),Z=i(9439),j=i(2791),w=i(4949),v=i(5984),y=i(5705),k=i(2570),P=i(168),M=i(6444),C=i(8831),z=(0,M.ZP)(y.J9)(r||(r=(0,P.Z)([""]))),S=(0,M.ZP)(C.fb)(t||(t=(0,P.Z)(["\n  display: none;\n  @media screen and (max-width: 930px) {\n    display: block;\n  }\n"]))),B=(0,M.ZP)(y.l0)(a||(a=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  gap: 18px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  @media screen and (max-width: 930px) {\n    position: absolute;\n    top: 0;\n    left: ",";\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n\n    padding: 14px;\n    height: 100%;\n\n    background-color: #fff;\n    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n    border-radius: 12px;\n    z-index: 3;\n  }\n"])),(function(n){return"true"===n.mode?"0":"-410px"})),F=M.ZP.label(o||(o=(0,P.Z)(["\n  position: relative;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.3;\n  color: rgba(138, 138, 137, 1);\n"]))),N=M.ZP.span(l||(l=(0,P.Z)(["\n  pointer-events: none;\n  position: absolute;\n  bottom: 16px;\n  left: 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n  color: rgba(18, 20, 23, 1);\n"]))),L=(0,M.ZP)(N)(c||(c=(0,P.Z)(["\n  left: 75px;\n"]))),E=M.ZP.div(p||(p=(0,P.Z)(["\n  display: flex;\n"]))),I=(0,M.ZP)(y.gN)(s||(s=(0,P.Z)(["\n  transition-property: all;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  /* appearance: none; */\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n\n  border: none;\n  min-width: 160px;\n  height: 48px;\n  outline: none;\n  margin-top: 8px;\n  padding: 14px 49px 14px 14px;\n  background-color: rgba(247, 247, 251, 1);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px;\n\n  &:hover {\n    background-color: #c1c1c536;\n  }\n"]))),T=(0,M.ZP)(I)(d||(d=(0,P.Z)(["\n  padding: 14px 20px 14px 39px;\n  min-width: auto;\n"]))),G=M.ZP.option(x||(x=(0,P.Z)(["\n  cursor: pointer;\n  /* appearance: none; */\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  color: rgba(18, 20, 23, 0.425);\n\n  &:hover {\n    color: rgb(18, 20, 23);\n  }\n"]))),Q=M.ZP.input(h||(h=(0,P.Z)(["\n  transition-property: all;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.1;\n\n  border: none;\n  width: 160px;\n  height: 48;\n  outline: none;\n  margin-top: 8px;\n  padding: 14px;\n  background-color: rgba(247, 247, 251, 1);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px 0 0 12px;\n\n  &:hover {\n    background-color: #c1c1c536;\n  }\n"]))),q=(0,M.ZP)(Q)(u||(u=(0,P.Z)(["\n  border-radius: 0 12px 12px 0;\n"]))),U=M.ZP.button(g||(g=(0,P.Z)(["\n  transition-property: background-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 24px;\n  width: 136px;\n  height: 48px;\n  color: white;\n  background-color: rgba(52, 112, 255, 1);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px;\n\n  &:hover {\n    box-shadow: none;\n    background-color: rgba(11, 68, 205, 1);\n  }\n"]))),_=M.ZP.div(f||(f=(0,P.Z)(["\n  margin-bottom: 20px;\n  max-width: 1440px;\n  padding: 0 15px;\n"]))),A=(0,M.ZP)(U)(b||(b=(0,P.Z)(["\n  width: 100%;\n  color: black;\n  background-color: rgb(247, 247, 251);\n  display: none;\n\n  &:hover {\n    background-color: #c1c1c536;\n  }\n\n  @media screen and (max-width: 930px) {\n    display: block;\n  }\n"]))),R=i(3329),V=function(n){var e=n.data,i=(0,j.useState)("false"),r=(0,Z.Z)(i,2),t=r[0],a=r[1],o=(0,j.useState)([]),l=(0,Z.Z)(o,2),c=l[0],p=l[1],s=(0,j.useState)([]),d=(0,Z.Z)(s,2),x=d[0],h=d[1],u=(0,j.useState)({minMileage:"",maxMileage:""}),g=(0,Z.Z)(u,2),f=g[0],b=g[1];(0,j.useEffect)((function(){var n=(0,m.Z)(new Set(e.map((function(n){return n.make}))));p(n);var i=(0,m.Z)(new Set(e.map((function(n){return n.rentalPrice.slice(1)}))));h(i);var r=(0,m.Z)(new Set(e.map((function(n){return n.mileage})))),t=Math.min.apply(Math,(0,m.Z)(r)).toLocaleString("en-IN"),a=Math.max.apply(Math,(0,m.Z)(r)).toLocaleString("en-IN");b({minMileage:t,maxMileage:a})}),[e]);var P=(0,k.n)().addDataToFilter,M=(0,y.TA)({initialValues:{carBrand:"",price:"",fromMileage:f.minMileage,toMileage:f.minMileage},onSubmit:function(n){var e=n.carBrand,i=n.fromMileage,r=n.price,t=n.toMileage;""===e&&""===i&&""===r&&""===t||(n.toMileage<n.fromMileage?alert('Sorry. The "From" price cannot be greater than the "To" price.'):(P(n),a("false")))}}),C=parseFloat(f.minMileage).toFixed(3),V=M.values.toMileage?parseFloat(M.values.toMileage).toFixed(3):"",D=M.values.fromMileage?parseFloat(M.values.fromMileage).toFixed(3):"";return(0,R.jsxs)("div",{children:[(0,R.jsx)(_,{children:(0,R.jsx)(A,{onClick:function(){return a("true")},type:"button",children:"Open Filter"})}),(0,R.jsx)(z,{children:(0,R.jsxs)(B,{mode:t,onSubmit:M.handleSubmit,children:[(0,R.jsx)(S,{width:16,height:16,onClick:function(){return a("false")},children:(0,R.jsx)("use",{href:w.Z+"#cross"})}),(0,R.jsxs)(F,{htmlFor:"carBrand",children:[!M.values.carBrand&&(0,R.jsx)(N,{children:"Enter the mark"}),"Car brand",(0,R.jsx)("br",{}),(0,R.jsxs)(I,{id:"carBrand",as:"select",name:"carBrand",onChange:M.handleChange,onBlur:M.handleBlur,value:M.values.carBrand,children:[(0,R.jsx)(G,{value:""}),c.map((function(n){return(0,R.jsx)(G,{value:n,children:n},(0,v.x0)())}))]})]}),(0,R.jsxs)(F,{htmlFor:"price",children:[(0,R.jsx)(N,{children:"To:"}),(0,R.jsx)(L,{children:" $"}),"Price/ 1 hour",(0,R.jsx)("br",{}),(0,R.jsxs)(T,{id:"price",as:"select",name:"price",onChange:M.handleChange,onBlur:M.handleBlur,value:M.values.price,children:[(0,R.jsx)(G,{value:""}),x.sort((function(n,e){return n-e})).map((function(n){return(0,R.jsx)(G,{value:n,children:n},(0,v.x0)())}))]})]}),(0,R.jsxs)(F,{htmlFor:"mileage / km",children:["Car mileage / km",(0,R.jsx)("br",{}),(0,R.jsxs)(E,{children:[(0,R.jsx)(Q,{id:"fromMileage",type:"number",name:"fromMileage",onChange:M.handleChange,onBlur:M.handleBlur,value:D,step:"0.100",placeholder:"From: ".concat(f.minMileage.toLocaleString("en-IN")),min:C}),(0,R.jsx)(q,{id:"toMileage",type:"number",name:"toMileage",onChange:M.handleChange,onBlur:M.handleBlur,value:V,step:"0.100",placeholder:"To: ".concat(f.maxMileage.toLocaleString("en-IN")),min:C})]})]}),(0,R.jsx)(U,{type:"submit",children:"Search"})]})})]})}},8831:function(n,e,i){i.d(e,{GU:function(){return k},QN:function(){return y},a2:function(){return v},ec:function(){return z},em:function(){return M},fb:function(){return m},jn:function(){return C},lg:function(){return P},qB:function(){return w},qE:function(){return b},wu:function(){return Z},zm:function(){return j}});var r,t,a,o,l,c,p,s,d,x,h,u,g=i(168),f=i(6444),b=f.ZP.div(r||(r=(0,g.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(18, 20, 23, 0.5);\n  z-index: 1;\n"]))),m=f.ZP.svg(t||(t=(0,g.Z)(["\n  cursor: pointer;\n  transition-property: fill;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  fill: black;\n\n  &:hover {\n    fill: #00000092;\n  }\n"]))),Z=f.ZP.div(a||(a=(0,g.Z)(["\n  position: relative;\n  width: 461px;\n  height: auto;\n  padding: 40px;\n  background-color: rgba(255, 255, 255, 1);\n  border-radius: 24px;\n"]))),j=f.ZP.div(o||(o=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  background-image: radial-gradient(\n    circle,\n    rgb(0, 0, 0),\n    rgba(52, 113, 255, 0.842)\n  );\n  width: 100%;\n  height: auto;\n  border-radius: 12px;\n"]))),w=f.ZP.img(l||(l=(0,g.Z)(["\n  width: auto;\n  height: 248px;\n  border-radius: 12px;\n"]))),v=f.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 14px;\n\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.3;\n"]))),y=f.ZP.span(p||(p=(0,g.Z)(["\n  color: rgba(52, 112, 255, 1);\n"]))),k=f.ZP.div(s||(s=(0,g.Z)(["\n  margin-top: 8px;\n  /* max-width: 277px; */\n  max-height: 40px;\n  color: rgba(18, 20, 23, 0.5);\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n"]))),P=f.ZP.p(d||(d=(0,g.Z)(["\n  margin-top: 14px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),M=f.ZP.h4(x||(x=(0,g.Z)(["\n  margin-top: 24px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),C=f.ZP.ul(h||(h=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 50px;\n  row-gap: 18px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n"]))),z=f.ZP.a(u||(u=(0,g.Z)(["\n  transition-property: background-color;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin-top: 24px;\n  width: 168px;\n  height: 44px;\n  color: white;\n  background-color: rgba(52, 112, 255, 1);\n  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);\n  border-radius: 12px;\n\n  &:hover {\n    box-shadow: none;\n    background-color: rgba(11, 68, 205, 1);\n  }\n"])))}}]);
//# sourceMappingURL=927.189e81d3.chunk.js.map