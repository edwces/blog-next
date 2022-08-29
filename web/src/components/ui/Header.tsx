import { DetailedHTMLProps, HTMLAttributes } from "react";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1 = (props: HeaderProps) => {
  return <h1 className="my-8 font-header font-bold text-6xl" {...props} />;
};

const H2 = ({ children, ...props }: HeaderProps) => {
  const anchor = (children as string).replaceAll(" ", "-");

  return (
    <h2
      className="my-4 text-primary font-header font-semibold text-2xl"
      id={anchor}
      {...props}
    >
      <a className="hover:border-b-2 hover:border-primary" href={`#${anchor}`}>
        {children}
      </a>
    </h2>
  );
};

export const Header = {
  H1,
  H2,
};
