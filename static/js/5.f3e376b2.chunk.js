(this["webpackJsonpreact-burger-builder"]=this["webpackJsonpreact-burger-builder"]||[]).push([[5],{103:function(e,r,n){"use strict";n.r(r);var t=n(0),a=n.n(t),i=n(4),c=n(14),u=n(12),o=(n(99),function(e){var r=Object.entries(e.ingredients).map((function(e){var r=Object(u.a)(e,2);return{name:r[0],amount:r[1]}})).map((function(e,r){var n=e.name,t=e.amount;return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid gray",padding:"5px"},key:r},n," (",t,")")}));return a.a.createElement("div",{className:"Order"},"Ingredients: ",r,a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null," USD ",e.price.toFixed(2)," ")))}),d=n(34),s=n(10),l=n(33);r.default=Object(i.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(s.d(r,n))}}}))(Object(d.a)((function(e){var r=e.onFetchOrders,n=e.token,i=e.userId;Object(t.useEffect)((function(){r(n,i)}),[r,n,i]);var c=a.a.createElement(l.a,null);return e.loading||(c=e.orders.map((function(e){return a.a.createElement(o,{key:e.id,ingredients:e.ingredients,price:+e.price})}))),a.a.createElement("div",null,c)}),c.a))},99:function(e,r,n){}}]);
//# sourceMappingURL=5.f3e376b2.chunk.js.map