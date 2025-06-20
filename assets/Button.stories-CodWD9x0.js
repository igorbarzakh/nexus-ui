import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-UkoqZfr8.js";const a=({children:A,variant:D="primary",size:_="medium",disabled:m=!1,onClick:I,className:E="",type:M="button"})=>{const W="ui-button",$=`ui-button--${D}`,k=`ui-button--${_}`,F=[W,$,k,m?"ui-button--disabled":"",E].filter(Boolean).join(" ");return e.jsx("button",{type:M,className:F,onClick:I,disabled:m,children:A})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const K={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:"Кнопка с различными вариантами стилей, размерами и состояниями."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"],description:"Вариант стиля кнопки"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер кнопки"},disabled:{control:{type:"boolean"},description:"Отключенное состояние"},children:{control:{type:"text"},description:"Содержимое кнопки"}},tags:["autodocs"]},r={args:{children:"Primary Button",variant:"primary",size:"medium"}},t={args:{children:"Secondary Button",variant:"secondary",size:"medium"}},s={args:{children:"Outline Button",variant:"outline",size:"medium"}},n={args:{children:"Small Button",variant:"primary",size:"small"}},i={args:{children:"Large Button",variant:"primary",size:"large"}},o={args:{children:"Disabled Button",variant:"primary",size:"medium",disabled:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"})]}),parameters:{docs:{description:{story:"Все варианты кнопок в одном ряду."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{variant:"primary",size:"small",children:"Small"}),e.jsx(a,{variant:"primary",size:"medium",children:"Medium"}),e.jsx(a,{variant:"primary",size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"Все размеры кнопок для сравнения."}}}};var c,u,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,v,g;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,B,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium'
  }
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var x,h,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small'
  }
}`,...(z=(h=n.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var S,j,C;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large'
  }
}`,...(C=(j=i.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var T,q,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var O,V,L;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все варианты кнопок в одном ряду.'
      }
    }
  }
}`,...(L=(V=l.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var N,P,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  }}>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все размеры кнопок для сравнения.'
      }
    }
  }
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Q=["Primary","Secondary","Outline","Small","Large","Disabled","AllVariants","AllSizes"];export{d as AllSizes,l as AllVariants,o as Disabled,i as Large,s as Outline,r as Primary,t as Secondary,n as Small,Q as __namedExportsOrder,K as default};
