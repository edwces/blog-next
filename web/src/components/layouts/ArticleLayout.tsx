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
    <section className="p-20">
      <Head>
        <title>{meta.title}</title>
        <meta property="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content="article" />
        <meta property="og:article:published_time" content={meta.date} />
        <meta property="og:article:author" content={meta.author} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Article",
            headline: meta.title,
            datePublished: meta.date,
            description: meta.description,
            author: [
              {
                "@type": "Person",
                name: meta.author,
              },
            ],
          })}
        </script>
      </Head>
      <div className="flex flex-col gap-1">
        <ArticleTitle {...meta} />
        {children}
      </div>
    </section>
  );
};
