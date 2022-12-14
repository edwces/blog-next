import { GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import * as matter from "gray-matter";
import { ArticleList } from "../../components/article/ArticleList";
import { getRSSFeedFromArticles } from "../../utils/article.utils";
import Head from "next/head";

type ArticlesProps = { articles: ArticleMetadata[] };

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Edwces - Articles</title>
        <meta name="description" content="List of all my articles" />
      </Head>
      <div className="py-8 px-5 sm:px-10 sm:py-14 md:px-20 md:py-20 flex-grow">
        <ArticleList articles={articles} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  const files = await fs.readdir(process.env.ARTICLES_PATH!);
  const sortByLatest = (a: ArticleMetadata, b: ArticleMetadata) =>
    new Date(b.date).getTime() - new Date(a.date).getTime();

  const articles = files
    .map((filename) => {
      return matter.read(path.join(process.env.ARTICLES_PATH!, filename))
        .data as ArticleMetadata;
    })
    .sort(sortByLatest);
  const rss = await getRSSFeedFromArticles(articles);
  const xmlContent = `<?xml version="1.0" encoding="UTF-8" ?>${rss}`;
  await fs.writeFile("./public/rss.xml", xmlContent);

  return { props: { articles: JSON.parse(JSON.stringify(articles)) } };
};

export default Articles;
