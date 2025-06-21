import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBsrpx3I.js";const a=({value:m="",placeholder:y,type:f="text",size:v="medium",variant:x="default",disabled:u=!1,required:g=!1,name:h,id:w,className:b="",onChange:c,onFocus:T,onBlur:z,onKeyDown:j})=>{const I="ui-input",S=`ui-input--${v}`,q=`ui-input--${x}`,E=[I,S,q,u?"ui-input--disabled":"",b].filter(Boolean).join(" "),D=C=>{c&&c(C.target.value)};return e.jsx("input",{type:f,value:m,placeholder:y,className:E,disabled:u,required:g,name:h,id:w,onChange:D,onFocus:T,onBlur:z,onKeyDown:j})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const R={title:"Components/Input",component:a,parameters:{layout:"centered",docs:{description:{component:"Поле ввода с различными типами, вариантами стилей и размерами."}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Тип поля ввода"},variant:{control:{type:"select"},options:["default","error","success"],description:"Вариант стиля поля"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер поля"},disabled:{control:{type:"boolean"},description:"Отключенное состояние"},required:{control:{type:"boolean"},description:"Обязательное поле"},placeholder:{control:{type:"text"},description:"Плейсхолдер"},value:{control:{type:"text"},description:"Значение поля"}},tags:["autodocs"]},r={args:{placeholder:"Введите текст",type:"text",variant:"default",size:"medium"}},t={args:{placeholder:"example@email.com",type:"email",variant:"default",size:"medium"}},s={args:{placeholder:"Введите пароль",type:"password",variant:"default",size:"medium"}},l={args:{placeholder:"Поле с ошибкой",type:"text",variant:"error",size:"medium"}},n={args:{placeholder:"Поле с успехом",type:"text",variant:"success",size:"medium"}},i={args:{placeholder:"Отключенное поле",type:"text",variant:"default",size:"medium",disabled:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Small input",size:"small"}),e.jsx(a,{placeholder:"Medium input",size:"medium"}),e.jsx(a,{placeholder:"Large input",size:"large"})]}),parameters:{docs:{description:{story:"Все размеры полей ввода для сравнения."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Default variant",variant:"default"}),e.jsx(a,{placeholder:"Error variant",variant:"error"}),e.jsx(a,{placeholder:"Success variant",variant:"success"})]}),parameters:{docs:{description:{story:"Все варианты полей ввода для сравнения."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column",width:"300px"},children:[e.jsx(a,{placeholder:"Text input",type:"text"}),e.jsx(a,{placeholder:"Email input",type:"email"}),e.jsx(a,{placeholder:"Password input",type:"password"}),e.jsx(a,{placeholder:"Number input",type:"number"}),e.jsx(a,{placeholder:"Tel input",type:"tel"}),e.jsx(a,{placeholder:"URL input",type:"url"})]}),parameters:{docs:{description:{story:"Различные типы полей ввода."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите текст',
    type: 'text',
    variant: 'default',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'example@email.com',
    type: 'email',
    variant: 'default',
    size: 'medium'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите пароль',
    type: 'password',
    variant: 'default',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Поле с ошибкой',
    type: 'text',
    variant: 'error',
    size: 'medium'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Поле с успехом',
    type: 'text',
    variant: 'success',
    size: 'medium'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Отключенное поле',
    type: 'text',
    variant: 'default',
    size: 'medium',
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const M=["Default","Email","Password","Error","Success","Disabled","AllSizes","AllVariants","DifferentTypes"];export{o as AllSizes,p as AllVariants,r as Default,d as DifferentTypes,i as Disabled,t as Email,l as Error,s as Password,n as Success,M as __namedExportsOrder,R as default};
