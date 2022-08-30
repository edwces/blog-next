import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link = ({ children, href = "#", ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a
        {...props}
        className="text-yellow transition ease-in-out duration-200 border-b-2 border-transparent hover:border-yellow"
      >
        {children}
      </a>
    </NextLink>
  );
};
