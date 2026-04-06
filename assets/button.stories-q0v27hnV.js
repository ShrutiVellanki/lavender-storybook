import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as S,e as E,u as T,f as _}from"./index-4rjIhT2C.js";import{B as t}from"./index-DUCoxzb5.js";import{c as d}from"./createLucideIcon-SuiBcxOv.js";import{L as A}from"./loader-circle-Df6fe0mS.js";import"./index-yBjzXJbu.js";import"./index-B6o7_jwP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CxI2DxH2.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],I=d("Mail",P);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],V=d("Plus",R);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],H=d("Trash2",C),U={title:"Inputs/Button",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A versatile button with six visual variants (default, secondary, destructive, outline, ghost, link) and four sizes (sm, default, lg, icon). Supports icons, loading states, and disabled styling. Forwards refs and accepts all native button attributes."}}},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"],description:"The visual style of the button."},size:{control:"select",options:["sm","default","lg","icon"],description:"The size of the button."},disabled:{control:"boolean",description:"Whether the button is disabled."}}},a={args:{children:"Button",variant:"default",onClick:_()},play:async({canvasElement:l})=>{const n=S(l).getByRole("button",{name:"Button"});await T.click(n),await E(n).toBeInTheDocument()}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"link",children:"Link"})]})},r={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon",children:e.jsx(V,{className:"h-4 w-4"})})]})},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs(t,{children:[e.jsx(I,{className:"mr-2 h-4 w-4"})," Login with Email"]}),e.jsxs(t,{variant:"destructive",children:[e.jsx(H,{className:"mr-2 h-4 w-4"})," Delete"]})]})},i={render:()=>e.jsxs(t,{disabled:!0,children:[e.jsx(A,{className:"mr-2 h-4 w-4 animate-spin"})," Please wait"]})},c={args:{children:"Disabled",disabled:!0},play:async({canvasElement:l})=>{const n=S(l).getByRole("button",{name:"Disabled"});await E(n).toHaveAttribute("disabled")}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Button",
    variant: "default",
    onClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Button"
    });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var B,b,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var j,k,N;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
    </Button>
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var D,z,L;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Disabled",
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Disabled"
    });
    await expect(button).toHaveAttribute("disabled");
  }
}`,...(L=(z=c.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};const X=["Playground","AllVariants","AllSizes","WithIcon","Loading","Disabled"];export{r as AllSizes,s as AllVariants,c as Disabled,i as Loading,a as Playground,o as WithIcon,X as __namedExportsOrder,U as default};
//# sourceMappingURL=button.stories-q0v27hnV.js.map
