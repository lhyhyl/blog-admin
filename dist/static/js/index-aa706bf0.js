import{b as D,i as F,a as L,M as p,d as M,c as N}from"./user-3-fill-2297460f.js";import{d as T,u as Z}from"./vue-router-0b23dc16.js";import{bJ as f,bG as q,cg as G,bA as P}from"./auth-0313e5d1.js";import{J as R,h as j,r as y,o as J,G as H,k as O,l as t,u as e,D as o,e as W,v as X,z as K,a1 as Q,x as n,a3 as u,j as k,C as Y,B as w,ba as ee,b9 as oe}from"./runtime-core.esm-bundler-185e3605.js";import{u as se}from"./useNav-6f64178a.js";import{c as te,a as ae,d as ne,b as le}from"./dark-2cec2c5d.js";import{u as C}from"./hooks-e73aa1dd.js";import{_ as re}from"./_plugin-vue_export-helper-c27b6911.js";import"./mitt-7f99bbc0.js";import"./app-c0ae8c6f.js";import"./index-6d140db2.js";const ie=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/,ue=R({password:[{validator:(d,c,i)=>{c===""?i(new Error("请输入密码")):ie.test(c)?i():i(new Error("密码格式应为6-18位数字、字母、符号的任意两种组合"))},trigger:"blur"}]}),de=d=>(ee("data-v-23457971"),d=d(),oe(),d),ce={class:"select-none relative"},me=["src"],pe={class:"flex-c absolute right-5 top-3"},_e={class:"login-container"},fe={class:"img"},ge={class:"login-box"},ve={class:"login-form"},he={class:"outline-none"},ye=de(()=>t("div",{class:"filings"},[t("a",{class:"change-color",href:"http://beian.miit.gov.cn/",target:"_blank"},"蜀ICP备2023007772号")],-1)),we=j({__name:"index",setup(d){const c=Z(),i=y(!1),g=y(),{initStorage:E}=te();E();const{dataTheme:v,dataThemeChange:b}=ae();b();const{title:$}=se(),a=R({username:"",password:""}),m=y(!1),x=async l=>{i.value=!0,l&&await l.validate(async(s,h)=>{if(s)m.value?f().setItem("loginInfo",a):f().removeItem("loginInfo"),q().loginByUsername(a).then(_=>{_.code==0&&G().then(()=>{c.push("/"),P("登录成功",{type:"success"})})});else return i.value=!1,h})};function I({code:l}){l==="Enter"&&x(g.value)}const z=()=>{c.push("/register")},A=()=>{a.password=""};return J(()=>{window.document.addEventListener("keypress",I);const l=T();l.query.username?(a.username=l.query.username+"",m.value=!0):f().getItem("loginInfo")&&(m.value=!0,Object.assign(a,f().getItem("loginInfo")))}),H(()=>{window.document.removeEventListener("keypress",I)}),(l,s)=>{const h=u("el-switch"),_=u("el-input"),V=u("el-form-item"),B=u("el-button"),U=u("el-checkbox"),S=u("el-form");return k(),O("div",ce,[t("img",{src:e(D),class:"wave"},null,8,me),t("div",pe,[o(h,{modelValue:e(v),"onUpdate:modelValue":s[0]||(s[0]=r=>W(v)?v.value=r:null),"inline-prompt":"","active-icon":e(ne),"inactive-icon":e(le),onChange:e(b)},null,8,["modelValue","active-icon","inactive-icon","onChange"])]),t("div",_e,[t("div",fe,[(k(),X(K(Q(e(F)))))]),t("div",ge,[t("div",ve,[o(e(L),{class:"avatar"}),o(e(p),null,{default:n(()=>[t("h2",he,Y(e($)),1)]),_:1}),o(S,{ref_key:"ruleFormRef",ref:g,model:a,rules:e(ue),size:"large"},{default:n(()=>[o(e(p),{delay:100},{default:n(()=>[o(V,{rules:[{required:!0,message:"请输入账号",trigger:"blur"}],prop:"username"},{default:n(()=>[o(_,{clearable:"",modelValue:a.username,"onUpdate:modelValue":s[1]||(s[1]=r=>a.username=r),placeholder:"账号",onClear:A,"prefix-icon":e(C)(e(M))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),o(e(p),{delay:150},{default:n(()=>[o(V,{prop:"password"},{default:n(()=>[o(_,{clearable:"","show-password":"",modelValue:a.password,"onUpdate:modelValue":s[2]||(s[2]=r=>a.password=r),placeholder:"密码","prefix-icon":e(C)(e(N))},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1}),o(e(p),{delay:250},{default:n(()=>[o(B,{class:"w-full mt-4",size:"default",type:"primary",loading:i.value,onClick:s[3]||(s[3]=r=>x(g.value))},{default:n(()=>[w(" 登录 ")]),_:1},8,["loading"])]),_:1}),o(e(p),{delay:250,class:"register"},{default:n(()=>[o(U,{modelValue:m.value,"onUpdate:modelValue":s[4]||(s[4]=r=>m.value=r)},{default:n(()=>[w("记住我")]),_:1},8,["modelValue"]),t("div",null,[w(" 没有账号？"),t("span",{class:"line",onClick:z},"去注册")])]),_:1})]),_:1},8,["model","rules"])])])]),ye])}}});const Be=re(we,[["__scopeId","data-v-23457971"]]);export{Be as default};