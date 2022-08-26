import NextLink from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const Link = ({ children, href = "#", ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <a {...props} className="bg-secondary-200 text-secondary-700">
        {children}
      </a>
    </NextLink>
  );
};
