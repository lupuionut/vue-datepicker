import{y as p,s as i,h as o,g as s,b as c}from"./vue-datepicker.es.f6a996e8.js";import{_ as l,f as D,I as u,C as f,j as r,r as k,o as w,c as M,b as _}from"./app.9132655d.js";const v=D({components:{Datepicker:p},setup(){const e=u(new Date),a=f(),t=r(()=>i(new Date(o(new Date),s(new Date)),2)),n=r(()=>c(new Date(o(new Date),s(new Date)),2));return{date:e,dark:a,minDate:t,maxDate:n}}}),h={class:"demo-wrap"};function x(e,a,t,n,g,V){const d=k("Datepicker");return w(),M("div",h,[_(d,{modelValue:e.date,"onUpdate:modelValue":a[0]||(a[0]=m=>e.date=m),placeholder:"Select Date",dark:e.dark,"min-date":e.minDate,"max-date":e.maxDate,"prevent-min-max-navigation":""},null,8,["modelValue","dark","min-date","max-date"])])}var C=l(v,[["render",x],["__file","MinMaxDemo.vue"]]);export{C as default};