import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";

type BlockQuoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export const BlockQuote = (props: BlockQuoteProps) => {
  return (
    <blockquote
      {...props}
      className="bg-black-2 pl-4 border-l-4 border-interactive"
    ></blockquote>
  );
};
