(this["webpackJsonpeuro-predicter"]=this["webpackJsonpeuro-predicter"]||[]).push([[0],{309:function(e,t,n){},311:function(e,t,n){},365:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(14),o=n.n(a),c=(n(309),n(125)),s=n.n(c),l=n(285),u=n(286),d=n(15),p=(n(311),n(198)),f=n.n(p),h=n(24),m=n(293),w=n(122),x=n.n(w),g=function(e,t){return e.homeScore===t.homeScore&&e.awayScore===t.awayScore},y=function(e,t){return e.homeScore>e.awayScore&&t.homeScore>t.awayScore||e.homeScore===e.awayScore&&t.homeScore===t.awayScore||e.homeScore<e.awayScore&&t.homeScore<t.awayScore},S=n(30);function j(e){var t=e.group,n=e.results,r=e.players,i=n.filter((function(e){return e.type===t}));return Object(S.jsx)(m.a,{style:{maxWidth:"700px",margin:"5px"},elevation:3,children:Object(S.jsx)(x.a,{columns:[{title:"Tid",field:"time",width:"60px"},{title:"Hjemmelag",field:"homeTeam",width:"75px"},{title:"",field:"homeScore",width:"30px"},{title:"",field:"awayScore",width:"30px"},{title:"Bortelag",field:"awayTeam",width:"75px"}],detailPanel:function(e){var t=r.map((function(t){var n=t.predictions.find((function(t){return t.id===e.id}));return{name:t.name,homeScore:null===n||void 0===n?void 0:n.homeScore,awayScore:null===n||void 0===n?void 0:n.awayScore}}));return Object(S.jsx)(x.a,{style:{width:"310px",marginLeft:"10px"},columns:[{title:"Navn",field:"name",width:"90px"},{title:e.homeTeam,field:"homeScore",width:"29px"},{title:e.awayTeam,field:"awayScore",width:"29px"}],data:t,options:{showTitle:!1,paging:!1,search:!1,sorting:!1,toolbar:!1,header:!1,padding:"dense",rowStyle:function(t){return{backgroundColor:""===e.homeScore.toString()?"":g(e,t)?"green":y(e,t)?"orange":"red"}}}})},data:Object(h.a)(i),title:t,onRowClick:function(e,t,n){return n?n():{}},options:{paging:!1,search:!1,sorting:!1,header:!1,tableLayout:"fixed"}})})}function v(e){var t=e.results,n=e.players,r=t.filter((function(e){return""!==e.awayScore.toString()})),i=n.map((function(e){var t=0,n=0,i=0;return e.predictions.forEach((function(e){var a=r.find((function(t){return t.id===e.id}));a&&(g(e,a)?t++:y(e,a)?n++:i++)})),{name:e.name,score:t,winner:n,wrong:i,points:3*t+2*n}}));return Object(S.jsx)(m.a,{style:{maxWidth:"700px",margin:"5px"},elevation:3,children:Object(S.jsx)(x.a,{columns:[{title:"Navn",field:"name",width:"70px"},{title:"Riktig resultat",field:"score",width:"70px"},{title:"Riktig vinner",field:"winner",width:"70px"},{title:"Bom",field:"wrong",width:"70px"},{title:"Peong",field:"points",width:"70px"}],data:i.sort((function(e,t){return e.points>t.points?-1:e.points===t.points?0:1})),title:"Sammenlagt",options:{paging:!1,search:!1,sorting:!1,tableLayout:"fixed"}})})}var b=["yngve","tobias","wilberg","ra"],O=["Group A","Group B","Group C","Group D","Group E","Group F"];var k=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)([]),o=Object(d.a)(a,2),c=o[0],p=o[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(s.a.mark((function e(){var t,n,r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=Object(l.a)(b),e.prev=2,a=s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value,e.next=3,f.a.parse("".concat("/euro-predicter","/").concat(n,".csv"),{header:!0,download:!0,skipEmptyLines:!0,complete:function(e){t.push({name:n,predictions:e.data.sort((function(e,t){return e.time>t.time?-1:e.time===t.time?0:1}))})}});case 3:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=9;break}return e.delegateYield(a(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),n.e(e.t1);case 14:return e.prev=14,n.f(),e.finish(14);case 17:i(t),f.a.parse("".concat("/euro-predicter","/results.csv"),{header:!0,download:!0,skipEmptyLines:!0,complete:function(e){p(e.data)}});case 19:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{style:{width:"100%",display:"flex",flexWrap:"wrap"},children:Object(S.jsx)(v,{results:c,players:n})}),Object(S.jsx)("div",{style:{width:"100%",display:"flex",flexWrap:"wrap"},children:n.length>0&&c.length>0&&O.map((function(e){return Object(S.jsx)(j,{group:e,results:c,players:n},e)}))})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,397)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};o.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(k,{})}),document.getElementById("root")),T()}},[[365,1,2]]]);
//# sourceMappingURL=main.947f6cc7.chunk.js.map