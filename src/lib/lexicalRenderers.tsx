import Link from "next/link";
import {
  defaultElementRenderers,
  HeadingNode,
  LinkNode,
  ListNode,
  ParagraphNode,
  QuoteNode,
} from "@atelier-disko/payload-lexical-react-renderer";

type ElementRendererProps = {
  children: React.ReactNode;
};

export const customElementRenderers = {
  ...defaultElementRenderers,
  heading: (props: ElementRendererProps & Omit<HeadingNode, "children">) => {
    const Component = props.tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    if (props.tag === "h2") {
      return <h2 className="text-2xl font-bold mt-6 mb-4">{props.children}</h2>;
    } else if (props.tag === "h3") {
      return <h3 className="text-xl font-bold mt-4 mb-4">{props.children}</h3>;
    } else if (props.tag === "h4") {
      return <h4 className="text-lg font-bold mt-4 mb-4">{props.children}</h4>;
    } else if (props.tag === "h5") {
      return (
        <h5 className="text-base font-bold mt-4 mb-4">{props.children}</h5>
      );
    } else if (props.tag === "h6") {
      return <h6 className="text-sm font-bold mt-4 mb-4">{props.children}</h6>;
    } else {
      return (
        <Component style={{ color: "#0d26fc" }}>{props.children}</Component>
      );
    }
  },
  paragraph: (
    props: ElementRendererProps & Omit<ParagraphNode, "children">,
  ) => (
    <p className="text-foreground/90 leading-relaxed mb-2    mt-1">
      {props.children}
    </p>
  ),
  quote: (props: ElementRendererProps & Omit<QuoteNode, "children">) => (
    <div className="border-l-4 border-primary/20 pl-4 py-2">
      <blockquote className="text-foreground/90 leading-relaxed mb-4 mt-2">
        {props.children}
      </blockquote>
    </div>
  ),
  code: (props: ElementRendererProps) => (
    <code className="text-foreground/90 leading-relaxed mb-4 mt-2 bg-accent p-2 rounded-md">
      {props.children}
    </code>
  ),
  link: (props: ElementRendererProps & Omit<LinkNode, "children">) => (
    <Link href={props.fields?.url ?? ""} className="text-primary underline">
      {props.children}
    </Link>
  ),
  horizontalRule: () => <hr className="my-12 border-t border-border/80" />,
  list: (props: ElementRendererProps & Omit<ListNode, "children">) => {
    const Component = props.tag as "ol" | "ul";
    return (
      <Component className="list-decimal list-inside">
        {props.children}
      </Component>
    );
  },
};
