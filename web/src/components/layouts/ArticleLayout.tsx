import Head from "next/head";
import { ReactNode } from "react";
import { ArticleMetadata } from "../../types/article-metadata";

interface ArticleLayoutProps {
  children: ReactNode;
  meta: ArticleMetadata;
}

export const ArticleLayout = ({ children, meta }: ArticleLayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.description}</title>
      </Head>
      {children}
    </>
  );
};
