import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBsrpx3I.js";const r=({children:m,href:c,variant:d="primary",size:p="medium",target:o="_self",rel:u,className:y="",onClick:f})=>{const h="ui-link",k=`ui-link--${d}`,v=`ui-link--${p}`,x=[h,k,v,y].filter(Boolean).join(" "),L=o==="_blank"?"noopener noreferrer":u;return e.jsx("a",{href:c,className:x,target:o,rel:L,onClick:f,children:m})};r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:"",defaultValue:{value:"'_self'",computed:!1}},rel:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const z={title:"Components/Link",component:r,parameters:{layout:"centered",docs:{description:{component:"Ссылка с различными вариантами стилей, размерами и настройками."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","underline"],description:"Вариант стиля ссылки"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер ссылки"},target:{control:{type:"select"},options:["_self","_blank","_parent","_top"],description:"Цель открытия ссылки"},href:{control:{type:"text"},description:"URL ссылки"},children:{control:{type:"text"},description:"Текст ссылки"}},tags:["autodocs"]},a={args:{children:"Primary Link",href:"https://example.com",variant:"primary",size:"medium"}},n={args:{children:"Secondary Link",href:"https://example.com",variant:"secondary",size:"medium"}},i={args:{children:"Underline Link",href:"https://example.com",variant:"underline",size:"medium"}},s={args:{children:"External Link",href:"https://example.com",variant:"primary",size:"medium",target:"_blank"},parameters:{docs:{description:{story:"Ссылка, открывающаяся в новой вкладке."}}}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:[e.jsx(r,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(r,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(r,{href:"#",variant:"underline",children:"Underline Link"})]}),parameters:{docs:{description:{story:"Все варианты ссылок для сравнения."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:[e.jsx(r,{href:"#",variant:"primary",size:"small",children:"Small Link"}),e.jsx(r,{href:"#",variant:"primary",size:"medium",children:"Medium Link"}),e.jsx(r,{href:"#",variant:"primary",size:"large",children:"Large Link"})]}),parameters:{docs:{description:{story:"Все размеры ссылок для сравнения."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Link',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Link',
    href: 'https://example.com',
    variant: 'secondary',
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Underline Link',
    href: 'https://example.com',
    variant: 'underline',
    size: 'medium'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'External Link',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium',
    target: '_blank'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ссылка, открывающаяся в новой вкладке.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexDirection: 'column'
  }}>
      <Link href="#" variant="primary">
        Primary Link
      </Link>
      <Link href="#" variant="secondary">
        Secondary Link
      </Link>
      <Link href="#" variant="underline">
        Underline Link
      </Link>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все варианты ссылок для сравнения.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexDirection: 'column'
  }}>
      <Link href="#" variant="primary" size="small">
        Small Link
      </Link>
      <Link href="#" variant="primary" size="medium">
        Medium Link
      </Link>
      <Link href="#" variant="primary" size="large">
        Large Link
      </Link>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все размеры ссылок для сравнения.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const S=["Primary","Secondary","Underline","External","AllVariants","AllSizes"];export{l as AllSizes,t as AllVariants,s as External,a as Primary,n as Secondary,i as Underline,S as __namedExportsOrder,z as default};
