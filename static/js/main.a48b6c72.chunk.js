(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),o=t(2),r=t.n(o),c=(t(14),t(3)),l=t(4),s=t(6),u=t(5),m=t(7),d=(t(15),function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={items:[]},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/forecast?q=Yogyakarta,id&mode=json&appid=b22d1b99608da5b551220c1984e26dea&units=metric").then(function(e){return e.json()}).then(function(e){return e.list.map(function(e){return{dateTime:"".concat(e.dt_txt),temp:"".concat(e.main.temp),tempMin:"".concat(e.main.temp_min),tempMax:"".concat(e.main.temp_max),weather:"".concat(e.weather[0].main)}})}).then(function(n){return e.setState({items:n,isLoaded:!1})}).catch(function(e){return console.log("parsing failed",e)})}},{key:"render",value:function(){var e=this.state.items;return i.a.createElement("div",{className:"component"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{style:{textAlign:"center"}},"Prakiraan Cuaca Yogyakarta"),i.a.createElement("table",{className:"table"},i.a.createElement("thead",{className:"thead-dark"},i.a.createElement("tr",null,i.a.createElement("th",null,"Date Time"),i.a.createElement("th",null,"Temp"),i.a.createElement("th",null,"Temp Min"),i.a.createElement("th",null,"Temp Max"),i.a.createElement("th",null,"Weather"))),i.a.createElement("tbody",null,e.length>0?e.map(function(e){var n=e.dateTime,t=e.temp,a=e.tempMax,o=e.tempMin,r=e.weather;return i.a.createElement("tr",null,i.a.createElement("th",null,n),i.a.createElement("td",null,t),i.a.createElement("td",null,o),i.a.createElement("td",null,a),i.a.createElement("td",null,r))}):null))))}}]),n}(a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(d,{items:[{name:"Apel",color:"merah",img:"merah.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque ipsum vitae turpis blandit, ac venenatis ipsum faucibus. Etiam ullamcorper mattis erat in posuere. Etiam turpis neque, imperdiet at mi semper, dignissim rhoncus purus."},{name:"Banana",color:"Kuning",img:"kuning.jpg",desc:"Pisang merupakan salah satu buah yang mengandung banyak manfaat. Buah pisang dipercaya dapat mencegah kanker karena memiliki kandungan antikarsionogen. maybe. im not sure too"},{name:"Daun",color:"Hjau",img:"hjau.jpg",desc:"test2"},{name:"Laut",color:"Biru",img:"biru.jpg",desc:"test3"},{name:"Calculator",color:"Calculator",img:""},{name:"Profile",color:"Profile",img:""},{name:"Main",color:"Main",img:""}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/responsi_web3_13387",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/responsi_web3_13387","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):h(n,e)})}}()},8:function(e,n,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a48b6c72.chunk.js.map