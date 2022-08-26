import { DetailedHTMLProps, HTMLAttributes } from "react";

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export const Paragraph = (props: ParagraphProps) => {
  return <p className="my-2" {...props}></p>;
};
