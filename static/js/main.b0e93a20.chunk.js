(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=n(4),l=n.n(i),s=n(7),m=n(8),u=n(9);n(16),n(17);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{d:"M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667 S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732 c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667 c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"}))),v=r.a.createElement("g",null),p=r.a.createElement("g",null),h=r.a.createElement("g",null),g=r.a.createElement("g",null),b=r.a.createElement("g",null),O=r.a.createElement("g",null),N=r.a.createElement("g",null),y=r.a.createElement("g",null),S=r.a.createElement("g",null),I=r.a.createElement("g",null),j=r.a.createElement("g",null),w=r.a.createElement("g",null),x=r.a.createElement("g",null),T=r.a.createElement("g",null),C=r.a.createElement("g",null),_=function(e){var t=e.svgRef,n=e.title,a=f(e,["svgRef","title"]);return r.a.createElement("svg",E({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 511.999 511.999",style:{enableBackground:"new 0 0 511.999 511.999"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,d,v,p,h,g,b,O,N,y,S,I,j,w,x,T,C)},k=r.a.forwardRef((function(e,t){return r.a.createElement(_,E({svgRef:t},e))})),M=(n.p,function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search-box-title"},"Movie title"),r.a.createElement("div",{className:"search-box-container"},r.a.createElement(k,{className:"search-icon"}),r.a.createElement("input",{type:"search",placeholder:"Please type the movie title",className:"search-box",onChange:e.handleChange}))))}),D=(n(18),n(19),Object(a.createContext)({addNominations:function(){},movie:[],searchField:"",nominations:[]})),R=function(e){var t=Object(a.useContext)(D),n=t.nominations,c=t.addNominations;return r.a.createElement("div",{className:"movie-item"},r.a.createElement("li",{className:"movie-content"},"".concat(e.title," (").concat(e.year,")")),r.a.createElement("button",{disabled:void 0!==n.find((function(t){return t.imdbID===e.id})),onClick:function(){return c(e)}},"Nominate"))},F=function(){var e=Object(a.useContext)(D),t=e.movies,n=e.searchField;return r.a.createElement("div",{className:"results-container"},r.a.createElement("div",{className:"results-content"},r.a.createElement("h3",null,'Results for "'.concat(n,'"')),t.map((function(e){return r.a.createElement(R,{key:e.imdbID,id:e.imdbID,title:e.Title,year:e.Year})}))))},A=(n(20),n(21),Object(a.createContext)({removeNominations:function(){},nominations:[]})),P=function(e){var t=Object(a.useContext)(A).removeNominations,n=e.title,c=e.year;return r.a.createElement("div",{className:"nomination-item"},r.a.createElement("li",{className:"nomination-content"},"".concat(n," (").concat(c,")")),r.a.createElement("button",{onClick:function(){return t(e)}},"Remove"))},L=function(){var e=Object(a.useContext)(A).nominations;return Object(a.useEffect)((function(){5===e.length&&alert("Congratulations! You have 5 nominations!")}),[e]),r.a.createElement("div",{className:"nominations-container"},r.a.createElement("div",{className:"nominations-content"},r.a.createElement("h3",null,"Nominations"),e.map((function(e){return r.a.createElement(P,{key:e.imdbID,id:e.imdbID,title:e.Title,year:e.Year})}))))},B=n(3),H={SET_MOVIE:"SET_MOVIE",SET_SEARCHFIELD:"SET_SEARCHFIELD",SET_NOMINATIONS:"SET_NOMINATIONS"},J={movies:[],searchField:"",nominations:JSON.parse(localStorage.getItem("nominations"))||[]},V=function(e,t){switch(t.type){case H.SET_MOVIE:return Object(B.a)({},e,{movies:t.payload});case H.SET_SEARCHFIELD:return Object(B.a)({},e,{searchField:t.payload});case H.SET_NOMINATIONS:return localStorage.setItem("nominations",JSON.stringify(t.payload)),Object(B.a)({},e,{nominations:t.payload});default:return e}},Y=function(e){return{type:H.SET_MOVIE,payload:e}},z=function(e){return{type:H.SET_NOMINATIONS,payload:e}},W=function(){var e=Object(a.useReducer)(V,J),t=Object(u.a)(e,2),n=t[0],c=t[1],o=n.movies,i=n.searchField,E=n.nominations;return Object(a.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(i,"&apikey=ffa0edf2"));case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).hasOwnProperty("Search")?c(Y(n.Search)):c(Y([]));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"The Shoppies"),r.a.createElement(M,{handleChange:function(e){c(function(e){return{type:H.SET_SEARCHFIELD,payload:e}}(e.target.value))}}),r.a.createElement("div",{className:"container"},r.a.createElement(D.Provider,{value:{movies:o,searchField:i,nominations:E,addNominations:function(e){c(z([].concat(Object(m.a)(E),[o.find((function(t){return t.imdbID===e.id}))])))}}},r.a.createElement(F,null)),r.a.createElement(A.Provider,{value:{nominations:E,removeNominations:function(e){c(z(E.filter((function(t){return t.imdbID!==e.id}))))}}},r.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b0e93a20.chunk.js.map