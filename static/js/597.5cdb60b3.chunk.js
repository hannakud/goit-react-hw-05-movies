"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,r,t){t.r(r),t.d(r,{default:function(){return x}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(673),u="MovieCard_wrapper__UNKq4",o="MovieCard_poster__B9RSd",p=t(184),v=function(e){var r=e.title,t=e.releaseYear,n=e.overview,a=e.poster,s=e.genres,i=e.rating;return(0,p.jsxs)("div",{className:u,children:[(0,p.jsx)("img",{className:o,src:a,alt:r}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[r," (",t,")"]}),(0,p.jsxs)("div",{children:["User score: ",(10*i).toFixed(0),"%"]}),(0,p.jsx)("h4",{children:"Overview"}),(0,p.jsx)("p",{children:n}),s.length&&(0,p.jsxs)("div",{children:[(0,p.jsx)("h4",{children:"Genres"}),(0,p.jsx)("p",{children:s.join("  ")})]})]})]})},l=t(791),d=t(689),f=t(87),h=t(795),m=t(952),w="MovieDetails_list__dbNMP",x=function(){var e=(0,d.UO)().movieId,r=(0,l.useState)(!1),t=(0,a.Z)(r,2),s=t[0],u=t[1],o=(0,l.useState)(!1),x=(0,a.Z)(o,2),g=x[0],j=x[1];(0,l.useEffect)((function(){var r=function(){var r=(0,n.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u(!0),r.next=4,(0,m.fh)(e);case 4:t=r.sent,console.log(t),j(t),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),h.Am.error(" Sorry, there is mistake in server");case 12:return r.prev=12,u(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]);var _=g.title,k=g.releaseYear,b=g.overview,y=g.poster,Z=g.genres,N=g.rating;return(0,p.jsxs)("div",{children:[g&&(0,p.jsx)(v,{title:_,releaseYear:k,poster:y,genres:Z,overview:b,rating:N}),(0,p.jsxs)("ul",{className:w,children:[(0,p.jsx)("li",{children:(0,p.jsx)(f.Link,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(f.Link,{to:"reviews",children:"Reviews"})})]}),(0,p.jsx)(l.Suspense,{fallback:s&&(0,p.jsx)(c.Z,{}),children:(0,p.jsx)(d.j3,{})})]})}},952:function(e,r,t){t.d(r,{IQ:function(){return l},IR:function(){return p},Jh:function(){return d},fh:function(){return v},z5:function(){return o}});var n=t(861),a=t(757),s=t.n(a),i=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e0b2738922ecba49fdf80e5e8d9f9891"}}),c="https://image.tmdb.org/t/p/w154/",u="https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png",o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){var r=e.id,t=e.title,n=e.overview,a=e.poster_path;return{id:r,title:t,overview:n,poster:a?c+a:""}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?query=".concat(r));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){var r=e.id,t=e.title,n=e.overview,a=e.poster_path;return{id:r,title:t,overview:n,poster:a?c+a:u}})));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n,a,c,o,p,v,l,d,f,h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"?"));case 2:return t=e.sent,n=t.data,a=n.id,c=n.genres,o=n.title,p=n.release_date,v=n.overview,l=n.poster_path,d=n.vote_average,console.log(t.data),f=new Date(p),h=isNaN(f)?"Unknown":f.getFullYear(),e.abrupt("return",{id:a,title:o,releaseYear:h,overview:v,poster:l?"https://image.tmdb.org/t/p/w300/"+l:u,genres:c.map((function(e){return e.name})),rating:d});case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/credits?"));case 2:return t=e.sent,e.abrupt("return",t.data.cast.map((function(e){var r=e.id,t=e.name,n=e.character,a=e.profile_path;return{id:r,character:n,profile:a?c+a:u,name:t}})));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/reviews?"));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,content:e.content,author:e.author}})));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.5cdb60b3.chunk.js.map