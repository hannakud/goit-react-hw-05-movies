"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{419:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(87),a="MoviesListItem_MoviesListItem__vYwX6",i="MoviesListItem_poster__DTRMw",s="MoviesListItem_text__0V9SN",o=r(184),u=function(e){var t=e.id,r=e.title,u=e.overview,c=e.poster;return(0,o.jsxs)("li",{className:a,children:[(0,o.jsx)("img",{className:i,src:c,alt:r}),(0,o.jsx)("h4",{children:r}),(0,o.jsx)("p",{className:s,children:u}),(0,o.jsx)(n.Link,{to:"/movies/".concat(t),children:"Show details"})]})},c="MoviesList_MoviesList__jqSLr",p=function(e){var t=e.movies;return(0,o.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,r=e.title,n=e.overview,a=e.poster;return(0,o.jsx)(u,{id:t,title:r,overview:n,poster:a},t)}))})}},544:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),s=r.n(i),o=r(673),u=r(419),c=r(791),p=r(952),v=r(795),f=r(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],i=t[1],l=(0,c.useState)(!1),d=(0,a.Z)(l,2),m=d[0],h=d[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,p.z5)();case 4:t=e.sent,console.log(t),i(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v.Am.error(" Sorry, there is mistake in server");case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsx)(f.Fragment,{children:m?(0,f.jsx)(o.Z,{}):(0,f.jsx)(u.Z,{movies:r})})}},952:function(e,t,r){r.d(t,{IQ:function(){return f},IR:function(){return p},Jh:function(){return l},fh:function(){return v},z5:function(){return c}});var n=r(861),a=r(757),i=r.n(a),s=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e0b2738922ecba49fdf80e5e8d9f9891"}}),o="https://image.tmdb.org/t/p/w154/",u="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",c=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){var t=e.id,r=e.title,n=e.overview,a=e.poster_path;return{id:t,title:r,overview:n,poster:a?o+a:""}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){var t=e.id,r=e.title,n=e.overview,a=e.poster_path;return{id:t,title:r,overview:n,poster:a?o+a:u}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,o,c,p,v,f,l,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,a=n.id,o=n.genres,c=n.title,p=n.release_date,v=n.overview,f=n.poster_path,l=n.vote_average,console.log(r.data),d=new Date(p),m=isNaN(d)?"Unknown":d.getFullYear(),e.abrupt("return",{id:a,title:c,releaseYear:m,overview:v,poster:f?"https://image.tmdb.org/t/p/w300/"+f:u,genres:o.map((function(e){return e.name})),rating:l});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){var t=e.id,r=e.name,n=e.character,a=e.profile_path;return{id:t,character:n,profile:a?o+a:u,name:r}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,content:e.content,author:e.author}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.8756f380.chunk.js.map