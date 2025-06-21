import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBsrpx3I.js";const a=({children:c,variant:u="primary",size:p="medium",disabled:m=!1,onClick:y,className:v="",type:g="button"})=>{const f="ui-button",B=`ui-button--${u}`,b=`ui-button--${p}`,x=[f,B,b,m?"ui-button--disabled":"",v].filter(Boolean).join(" ");return e.jsx("button",{type:g,className:x,onClick:y,disabled:m,children:c})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const j={title:"Components/Button",component:a,parameters:{layout:"centered",docs:{description:{component:"Кнопка с различными вариантами стилей, размерами и состояниями."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline"],description:"Вариант стиля кнопки"},size:{control:{type:"select"},options:["small","medium","large"],description:"Размер кнопки"},disabled:{control:{type:"boolean"},description:"Отключенное состояние"},children:{control:{type:"text"},description:"Содержимое кнопки"}},tags:["autodocs"]},r={args:{children:"Primary Button",variant:"primary",size:"medium"}},t={args:{children:"Secondary Button",variant:"secondary",size:"medium"}},s={args:{children:"Outline Button",variant:"outline",size:"medium"}},n={args:{children:"Small Button",variant:"primary",size:"small"}},i={args:{children:"Large Button",variant:"primary",size:"large"}},o={args:{children:"Disabled Button",variant:"primary",size:"medium",disabled:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"})]}),parameters:{docs:{description:{story:"Все варианты кнопок в одном ряду."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{variant:"primary",size:"small",children:"Small"}),e.jsx(a,{variant:"primary",size:"medium",children:"Medium"}),e.jsx(a,{variant:"primary",size:"large",children:"Large"})]}),parameters:{docs:{description:{story:"Все размеры кнопок для сравнения."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const C=["Primary","Secondary","Outline","Small","Large","Disabled","AllVariants","AllSizes"];export{d as AllSizes,l as AllVariants,o as Disabled,i as Large,s as Outline,r as Primary,t as Secondary,n as Small,C as __namedExportsOrder,j as default};
