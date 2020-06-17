declare const graphql: (query: TemplateStringsArray) => void;

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "*.svg" {
  let SVGComponent: (props: any) => JSX.Element;
  export default SVGComponent;
}

declare module "*.yaml" {
  let SVGComponent: (props: any) => JSX.Element;
  export default SVGComponent;
}
