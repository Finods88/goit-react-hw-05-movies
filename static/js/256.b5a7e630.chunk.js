"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[256],{603:function(e,r,t){t.d(r,{Df:function(){return c},Ku:function(){return u},Pg:function(){return o},Ph:function(){return s},fI:function(){return h}});var n=t(340).Z.create({baseURL:"https://api.themoviedb.org/3"}),a="c26eca08a64a6a03a8df2e5238182fb9",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjZlY2EwOGE2NGE2YTAzYThkZjJlNTIzODE4MmZiOSIsInN1YiI6IjY1ZDhjODA5YTI4NGViMDE2Mjg3ZTU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ts9EjcunI1qs_Yb1bgAlRZi5af6C2r92M3HBC_X1lGk",c=function(){return n.get("/trending/movie/day",{headers:{Authorization:"Bearer ".concat(i)}})},s=function(e){var r={headers:{Authorization:"Bearer ".concat(i)},params:{query:e}};return n.get("/search/movie",r)},o=function(e){return n.get("/movie/".concat(e),{params:{api_key:a}},{headers:{Authorization:"Bearer ".concat(i)}})},u=function(e){return n.get("/movie/".concat(e,"/credits"),{params:{api_key:a}},{headers:{Authorization:"Bearer ".concat(i)}})},h=function(e){return n.get("/movie/".concat(e,"/reviews"),{params:{api_key:a}},{headers:{Authorization:"Bearer ".concat(i)}})}},256:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(861),a=t(439),i=t(757),c=t.n(i),s=t(791),o=t(87),u=t(603),h={trendingWrapper:"trendingMovies_trendingWrapper__KE6Bq",listItem:"trendingMovies_listItem__DK8aB"},l=t(184),f=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],i=r[1],f=(0,s.useState)(!1),d=(0,a.Z)(f,2),p=d[0],m=d[1],v=(0,s.useState)(null),g=(0,a.Z)(v,2),_=g[0],j=g[1];(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,u.Df)();case 4:t=e.sent,n=t.data,i(null!==(r=n.results)&&void 0!==r&&r.length?n.results:[]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var I=t.map((function(e){var r=e.id,t=e.title;return(0,l.jsx)("li",{className:h.listItem,children:(0,l.jsx)(o.rU,{to:"/movies/".concat(r),state:{from:"/"},children:t})},r)}));return(0,l.jsxs)("div",{className:h.trendingWrapper,children:[(0,l.jsx)("h3",{children:"Trending today"}),_&&(0,l.jsx)("p",{className:h.error,children:_}),p&&(0,l.jsx)("p",{children:"...Loading"}),Boolean(I.length)&&(0,l.jsx)("ol",{className:h.list,children:I})]})},d=function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(f,{})})}}}]);
//# sourceMappingURL=256.b5a7e630.chunk.js.map