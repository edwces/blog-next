import Head from "next/head";
import { ReactNode } from "react";
import { ArticleMetadata } from "../../types/article-metadata";
import { ArticleTitle } from "../article/ArticleTitle";

interface ArticleLayoutProps {
  children: ReactNode;
  meta: ArticleMetadata;
}

export const ArticleLayout = ({ children, meta }: ArticleLayoutProps) => {
  return (
    <section className="p-10">
      <Head>
        <title>{meta.description}</title>
      </Head>
      <div className="flex flex-col gap-1">
        <ArticleTitle {...meta} />
        {children}
      </div>
    </section>
  );
};
