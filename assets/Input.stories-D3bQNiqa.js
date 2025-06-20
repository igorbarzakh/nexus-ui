import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-UkoqZfr8.js";const a=({value:H="",placeholder:B,type:U="text",size:$="medium",variant:F="default",disabled:u=!1,required:O=!1,name:k,id:G,className:J="",onChange:c,onFocus:Q,onBlur:W,onKeyDown:X})=>{const Y="ui-input",Z=`ui-input--${$}`,ee=`ui-input--${F}`,ae=[Y,Z,ee,u?"ui-input--disabled":"",J].filter(Boolean).join(" "),re=te=>{c&&c(te.target.value)};return e.jsx("input",{type:U,value:H,placeholder:B,className:ae,disabled:u,required:O,name:k,id:G,onChange:re,onFocus:Q,onBlur:W,onKeyDown:X})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const ie={title:"Components/Input",component:a,parameters:{layout:"centered",docs:{description:{component:"Поле ввода с различными типами, вариантами стилей и размерами."}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Тип поля ввода"},variant:{control:{type:"select"},options:["default","error","success"],description:"Вариант стиля поля"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер поля"},disabled:{control:{type:"boolean"},description:"Отключенное состояние"},required:{control:{type:"boolean"},description:"Обязательное поле"},placeholder:{control:{type:"text"},description:"Плейсхолдер"},value:{control:{type:"text"},description:"Значение поля"}},tags:["autodocs"]},r={args:{placeholder:"Введите текст",type:"text",variant:"default",size:"medium"}},t={args:{placeholder:"example@email.com",type:"email",variant:"default",size:"medium"}},s={args:{placeholder:"Введите пароль",type:"password",variant:"default",size:"medium"}},l={args:{placeholder:"Поле с ошибкой",type:"text",variant:"error",size:"medium"}},n={args:{placeholder:"Поле с успехом",type:"text",variant:"success",size:"medium"}},i={args:{placeholder:"Отключенное поле",type:"text",variant:"default",size:"medium",disabled:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Small input",size:"small"}),e.jsx(a,{placeholder:"Medium input",size:"medium"}),e.jsx(a,{placeholder:"Large input",size:"large"})]}),parameters:{docs:{description:{story:"Все размеры полей ввода для сравнения."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Default variant",variant:"default"}),e.jsx(a,{placeholder:"Error variant",variant:"error"}),e.jsx(a,{placeholder:"Success variant",variant:"success"})]}),parameters:{docs:{description:{story:"Все варианты полей ввода для сравнения."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Text input",type:"text"}),e.jsx(a,{placeholder:"Email input",type:"email"}),e.jsx(a,{placeholder:"Password input",type:"password"}),e.jsx(a,{placeholder:"Number input",type:"number"}),e.jsx(a,{placeholder:"Tel input",type:"tel"}),e.jsx(a,{placeholder:"URL input",type:"url"})]}),parameters:{docs:{description:{story:"Различные типы полей ввода."}}}};var m,y,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст',
    type: 'text',
    variant: 'default',
    size: 'medium'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,x,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'example@email.com',
    type: 'email',
    variant: 'default',
    size: 'medium'
  }
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,w,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите пароль',
    type: 'password',
    variant: 'default',
    size: 'medium'
  }
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var T,z,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Поле с ошибкой',
    type: 'text',
    variant: 'error',
    size: 'medium'
  }
}`,...(j=(z=l.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var I,S,q;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Поле с успехом',
    type: 'text',
    variant: 'success',
    size: 'medium'
  }
}`,...(q=(S=n.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var E,D,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Отключенное поле',
    type: 'text',
    variant: 'default',
    size: 'medium',
    disabled: true
  }
}`,...(C=(D=i.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var V,L,N;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    width: '300px'
  }}>
      <Input placeholder="Small input" size="small" />
      <Input placeholder="Medium input" size="medium" />
      <Input placeholder="Large input" size="large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все размеры полей ввода для сравнения.'
      }
    }
  }
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,M,A;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    width: '300px'
  }}>
      <Input placeholder="Default variant" variant="default" />
      <Input placeholder="Error variant" variant="error" />
      <Input placeholder="Success variant" variant="success" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Все варианты полей ввода для сравнения.'
      }
    }
  }
}`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var K,P,_;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    width: '300px'
  }}>
      <Input placeholder="Text input" type="text" />
      <Input placeholder="Email input" type="email" />
      <Input placeholder="Password input" type="password" />
      <Input placeholder="Number input" type="number" />
      <Input placeholder="Tel input" type="tel" />
      <Input placeholder="URL input" type="url" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Различные типы полей ввода.'
      }
    }
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const oe=["Default","Email","Password","Error","Success","Disabled","AllSizes","AllVariants","DifferentTypes"];export{o as AllSizes,p as AllVariants,r as Default,d as DifferentTypes,i as Disabled,t as Email,l as Error,s as Password,n as Success,oe as __namedExportsOrder,ie as default};
