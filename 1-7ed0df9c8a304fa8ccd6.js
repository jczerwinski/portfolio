(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(144),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(162),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(46);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(229),r=n.n(a),i=n(230),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var u=new r.a(o.a);var c=u.rhythm,l=u.scale},157:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(218),c=n.n(u),l=(n(225),n(227),n(147)),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{marginBottom:Object(l.a)(2.5),textAlign:"center"}},o.a.createElement("p",null,o.a.createElement(c.a,{email:"jamie.czerwinski@gmail.com",size:100,className:"rounded-circle"})),o.a.createElement("p",null,"Hey! My name is ",o.a.createElement("strong",null,"Jamie Czerwinski"),". Welcome to my site!"))},t}(o.a.Component);t.a=s},158:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(145),c=(n(167),n(75),n(234)),l=(n(235),n(168)),s=[{name:"About",link:"/about"},{name:"CV",link:"/cv"},{name:"Portfolio",link:"/portfolio"},{name:"Blog",link:"/"}],d=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1,active:s.find(function(e){return e.link===t.location.pathname})},n}return r()(t,e),t.prototype.render=function(){return o.a.createElement(u.StaticQuery,{query:"459041758",render:function(e){return o.a.createElement(l.c,{expand:"sm"},o.a.createElement(l.b,null,o.a.createElement(l.d,{tag:u.Link,to:"/",className:"mr-auto"},e.site.siteMetadata.title)))},data:c})},t}(o.a.Component),p=(n(242),n(147)),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children;return o.a.createElement("div",null,o.a.createElement(d,{location:t}),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(24),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},n))},t}(o.a.Component);t.a=f},162:function(e,t,n){var a;e.exports=(a=n(176))&&a.default||a},176:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(71),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},234:function(e){e.exports={data:{site:{siteMetadata:{title:"jczerwinski.github.io/portfolio"}}}}},235:function(e,t,n){},242:function(e,t,n){}}]);
//# sourceMappingURL=1-7ed0df9c8a304fa8ccd6.js.map