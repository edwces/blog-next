import { DetailedHTMLProps, HTMLAttributes } from "react";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  component: "h1" | "h2" | "h3";
};

const Custom = ({ component, ...props }: HeaderProps) => {
  const Component = component || "h1";

  return <Component className="bg-blue-600" {...props} />;
};

const H1 = (props: Omit<HeaderProps, "component">) => {
  return <Custom component="h1" className="bg-red-500" {...props} />;
};

const H2 = (props: Omit<HeaderProps, "component">) => {
  return <Custom component="h2" className="bg-green-700-500" {...props} />;
};

export const Header = {
  Custom,
  H1,
  H2,
};
