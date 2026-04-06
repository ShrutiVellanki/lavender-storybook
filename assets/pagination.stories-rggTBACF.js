import{j as g}from"./jsx-runtime-Cf8x2fCZ.js";import{r as M}from"./index-B6o7_jwP.js";import{w as C,e as i,u as V}from"./index-4rjIhT2C.js";import{P as R}from"./index-Bn1tdl-0.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CxI2DxH2.js";import"./createLucideIcon-SuiBcxOv.js";const z={title:"Information/Pagination",component:R,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Page navigation with smart ellipsis. Automatically hides when there's only one page. Supports configurable sibling count for how many page numbers appear around the current page."}}},argTypes:{currentPage:{control:{type:"number",min:1}},totalPages:{control:{type:"number",min:1}},siblingCount:{control:{type:"number",min:0,max:3}}}},t={args:{currentPage:1,totalPages:10}},n={args:{currentPage:5,totalPages:10}},r={args:{currentPage:2,totalPages:3}},s={args:{currentPage:12,totalPages:50,siblingCount:2}},o={render:()=>{const[a,e]=M.useState(1);return g.jsxs("div",{className:"space-y-4 text-center",children:[g.jsxs("p",{className:"text-sm text-muted-foreground",children:["Page ",a," of 20"]}),g.jsx(R,{currentPage:a,totalPages:20,onPageChange:e})]})},play:async({canvasElement:a})=>{const e=C(a);await i(e.getByText("Page 1 of 20")).toBeVisible();const T=e.getByRole("button",{name:/next page/i});await V.click(T),await i(e.getByText("Page 2 of 20")).toBeVisible()}},c={args:{currentPage:1,totalPages:1},parameters:{docs:{description:{story:"When there's only one page, the component renders nothing."}}},play:async({canvasElement:a})=>{const e=C(a);await i(e.queryByRole("button")).toBeNull()}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,P,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 10
  }
}`,...(d=(P=n.parameters)==null?void 0:P.docs)==null?void 0:d.source}}};var y,x,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 3
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var v,b,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentPage: 12,
    totalPages: 50,
    siblingCount: 2
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var B,f,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4 text-center">
        <p className="text-sm text-muted-foreground">Page {page} of 20</p>
        <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Page 1 of 20")).toBeVisible();
    const nextButton = canvas.getByRole("button", {
      name: /next page/i
    });
    await userEvent.click(nextButton);
    await expect(canvas.getByText("Page 2 of 20")).toBeVisible();
  }
}`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var E,N,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 1
  },
  parameters: {
    docs: {
      description: {
        story: "When there's only one page, the component renders nothing."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole("button")).toBeNull();
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const D=["Playground","MiddlePage","FewPages","ManyPages","Interactive","SinglePage"];export{r as FewPages,o as Interactive,s as ManyPages,n as MiddlePage,t as Playground,c as SinglePage,D as __namedExportsOrder,z as default};
//# sourceMappingURL=pagination.stories-rggTBACF.js.map
