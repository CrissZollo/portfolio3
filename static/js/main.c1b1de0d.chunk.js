(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Save_Erica.c2fbe9db.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Monkey_Space_Shooter.b89299cc.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/minecraft.82c3a38e.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ecclesia.fe19eac8.png"},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(7),c=i.n(s),r=(i(12),i(2)),o=i(3),l=i(5),h=i(4),u=(i(13),[]),d=(i(14),i(0)),m=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var a;return Object(r.a)(this,i),(a=t.call(this,e)).handleClick=function(){a.setState({clicked:!a.state.clicked})},a.state={clicked:!0},a}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("nav",{className:"navbarItems",children:[Object(d.jsx)("h1",{className:"navbar-logo",children:"Christoffer"}),Object(d.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(d.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(d.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:u.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("a",{className:e.cName,href:e.url,children:e.title})},t)}))})]})}}]),i}(a.Component),p={SAVE_ERICA:i(16).default,MONKEY_SHOOTER:i(17).default,MINECRAFT:i(18).default,ECCLESIA:i(19).default},f=[{title:"Save Erica",url:"https://crisszollo.github.io/save-erica/",image:p.SAVE_ERICA,information:"This is a game about choices, you engange with the story by telling Erica what to do in different scenario. You will make difficult choices. The game has multiple endings, and you need to make the right decisions. This project was made in javascript and Jquery"},{title:"Monkey Business",url:"https://crisszollo.github.io/monkey-space-shooter-phaser/",image:p.MONKEY_SHOOTER,information:"Shoot through the jungle with Monkey Business! The game genre is Space Shooter and the player need to shoot cocunuts to get throug the jungle and win the game by gettinh the right amount of score. The game is made in the frameworkd Phaser from Phaser.io."},{title:"Minecraft Wiki",url:"http://85.24.194.62/",image:p.MINECRAFT,information:"A minecraft wiki made for my own server on minecraft. This site let's you create poi (points of interests) create available trades and see how much everthing will cost and some other things. To log in use username 'Tester' and password Testing123"},{title:"Ecclesia",url:"https://play.google.com/store/apps/details?id=ecclesia.apk",image:p.ECCLESIA,information:"This is an app built for a church in Sweden. In the app, people from the church can view events, chat and take attendance. Pupils can check in on any church in Sweden with a generated Qr-code or with geolocation. The App is avaliable on ios and andriod."}],j=(i(20),function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={title:e.props.title,url:e.props.url,image:e.props.image,information:e.props.information,index:e.props.index,display:"none"},e}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"project-card",onMouseEnter:function(){e.setState({display:"block"})},onMouseLeave:function(){e.setState({display:"none"})},children:Object(d.jsxs)("div",{className:"inforamtion row",children:[Object(d.jsx)("img",{className:"project-image project project".concat(this.state.index),src:this.state.image,alt:this.state.title}),Object(d.jsxs)("div",{className:"text text".concat(this.state.index),style:{display:this.state.display},children:[Object(d.jsx)("h2",{children:this.props.title}),Object(d.jsx)("p",{children:this.props.information}),Object(d.jsxs)("a",{href:this.state.url,children:["Test out ",this.state.title]})]})]})})}}]),i}(a.Component)),b=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){var e={title:"",url:"",image:"",information:""};return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h1",{children:"Projects"}),Object(d.jsx)("p",{className:"smallInfo",children:Object(d.jsx)("small",{children:"*Hover projects to read more about them."})}),f.map((function(t,i){return(i+1)%2===0?Object(d.jsxs)("div",{className:"row cardRow",children:[Object(d.jsx)(j,{title:e.title,url:e.url,image:e.image,information:e.information,index:i-1}),Object(d.jsx)(j,{title:t.title,url:t.url,image:t.image,information:t.information,index:i})]},i):i+1===f.length&&(i+1)%2!==0?Object(d.jsx)("div",{className:"row cardRow",children:Object(d.jsx)(j,{title:t.title,url:t.url,image:t.image,information:t.information,index:i})},i):(e={title:t.title,url:t.url,image:t.image,information:t.information},!1)}))]})}}]),i}(a.Component),g=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)(b,{})]})}}]),i}(a.Component),O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.c1b1de0d.chunk.js.map