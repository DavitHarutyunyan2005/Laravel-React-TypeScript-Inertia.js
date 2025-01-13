import{a as d,j as e,M as c}from"./app-BWfkA99c.js";import{T as u,I as m}from"./TextInput-BBUPtKBy.js";import{I as i}from"./InputLabel-BrZlFs8A.js";import{P as x}from"./PrimaryButton-DDRpVTcF.js";import{T as p}from"./TextAreaInput-BMt8sUib.js";import{A as h}from"./AuthenticatedLayout-DlqeyJiE.js";import"./ApplicationLogo-BHlR3Vcf.js";import"./transition-BOkbkL7r.js";function C(){const{data:t,setData:s,processing:l,errors:r,post:o}=d({name:"",description:""}),n=a=>{a.preventDefault(),o(route("feature.store"),{preserveScroll:!0})};return e.jsxs(h,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200",children:"Create New Feature"}),children:[e.jsx(c,{title:"Create New Feature"}),e.jsx("div",{className:"mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100 flex gap-8",children:e.jsxs("form",{onSubmit:n,className:"w-full",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx(i,{htmlFor:"name",value:"Name"}),e.jsx(u,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:a=>s("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(m,{className:"mt-2",message:r.name})]}),e.jsxs("div",{className:"mb-8",children:[e.jsx(i,{htmlFor:"description",value:"Description"}),e.jsx(p,{id:"description",rows:1,className:"mt-1 block w-full",value:t.description,onChange:a=>s("description",a.target.value)}),e.jsx(m,{className:"mt-2",message:r.name})]}),e.jsx("div",{className:"flex items-center gap-4",children:e.jsx(x,{disabled:l,children:"Save"})})]})})})]})}export{C as default};