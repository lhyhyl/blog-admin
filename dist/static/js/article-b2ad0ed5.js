import{bo as e}from"./auth-0313e5d1.js";const s=t=>e.request("post","/api/article/getArticleList",{data:t}),a=t=>e.request("post","/api/article/add",{data:t}),c=t=>e.request("put","/api/article/update",{data:t}),u=(t,r)=>e.request("delete",`/api/article/delete/${t}/${r}`,{}),l=(t,r)=>e.request("put",`/api/article/updateTop/${t}/${r}`,{}),p=t=>e.request("put",`/api/article/revert/${t}`,{}),n=(t,r)=>e.request("put",`/api/article/isPublic/${t}/${r}`,{}),o=t=>e.request("get",`/api/article/getArticleById/${t}`,{}),d=t=>e.request("post","/api/article/titleExist",{data:t});export{a,o as b,u as d,c as e,s as g,n as i,p as r,d as t,l as u};