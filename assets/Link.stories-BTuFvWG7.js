import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-UkoqZfr8.js";const r=({children:b,href:q,variant:R="primary",size:U="medium",target:o="_self",rel:C,className:E="",onClick:N})=>{const P="ui-link",V=`ui-link--${R}`,w=`ui-link--${U}`,A=[P,V,w,E].filter(Boolean).join(" "),D=o==="_blank"?"noopener noreferrer":C;return e.jsx("a",{href:q,className:A,target:o,rel:D,onClick:N,children:b})};r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'underline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top'",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"}]},description:"",defaultValue:{value:"'_self'",computed:!1}},rel:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"Components/Link",component:r,parameters:{layout:"centered",docs:{description:{component:"Ссылка с различными вариантами стилей, размерами и настройками."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","underline"],description:"Вариант стиля ссылки"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер ссылки"},target:{control:{type:"select"},options:["_self","_blank","_parent","_top"],description:"Цель открытия ссылки"},href:{control:{type:"text"},description:"URL ссылки"},children:{control:{type:"text"},description:"Текст ссылки"}},tags:["autodocs"]},a={args:{children:"Primary Link",href:"https://example.com",variant:"primary",size:"medium"}},n={args:{children:"Secondary Link",href:"https://example.com",variant:"secondary",size:"medium"}},i={args:{children:"Underline Link",href:"https://example.com",variant:"underline",size:"medium"}},s={args:{children:"External Link",href:"https://example.com",variant:"primary",size:"medium",target:"_blank"},parameters:{docs:{description:{story:"Ссылка, открывающаяся в новой вкладке."}}}},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:[e.jsx(r,{href:"#",variant:"primary",children:"Primary Link"}),e.jsx(r,{href:"#",variant:"secondary",children:"Secondary Link"}),e.jsx(r,{href:"#",variant:"underline",children:"Underline Link"})]}),parameters:{docs:{description:{story:"Все варианты ссылок для сравнения."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column"},children:[e.jsx(r,{href:"#",variant:"primary",size:"small",children:"Small Link"}),e.jsx(r,{href:"#",variant:"primary",size:"medium",children:"Medium Link"}),e.jsx(r,{href:"#",variant:"primary",size:"large",children:"Large Link"})]}),parameters:{docs:{description:{story:"Все размеры ссылок для сравнения."}}}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Primary Link',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium'
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Link',
    href: 'https://example.com',
    variant: 'secondary',
    size: 'medium'
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var f,h,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Underline Link',
    href: 'https://example.com',
    variant: 'underline',
    size: 'medium'
  }
}`,...(k=(h=i.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var v,x,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var g,_,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(z=(_=t.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var S,j,T;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const I=["Primary","Secondary","Underline","External","AllVariants","AllSizes"];export{l as AllSizes,t as AllVariants,s as External,a as Primary,n as Secondary,i as Underline,I as __namedExportsOrder,B as default};
