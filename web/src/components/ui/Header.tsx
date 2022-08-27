import { DetailedHTMLProps, HTMLAttributes } from "react";

type HeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const H1 = (props: HeaderProps) => {
  return (
    <h1
      className="my-8 text-secondary-600 font-header font-bold text-4xl"
      {...props}
    />
  );
};

const H2 = (props: HeaderProps) => {
  return <h2 className="my-4 font-header font-semibold text-2xl" {...props} />;
};

export const Header = {
  H1,
  H2,
};
