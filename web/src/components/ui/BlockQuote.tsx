import { BlockquoteHTMLAttributes, DetailedHTMLProps } from "react";

type BlockQuoteProps = DetailedHTMLProps<
  BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>;

export const BlockQuote = (props: BlockQuoteProps) => {
  return (
    <blockquote
      {...props}
      className="bg-lighter pl-4 border-l-4 border-secondary"
    ></blockquote>
  );
};
