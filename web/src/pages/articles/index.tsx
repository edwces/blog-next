import { GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import * as matter from "gray-matter";
import { ArticleList } from "../../components/article/ArticleList";

type ArticlesProps = { articles: ArticleMetadata[] };

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  return (
    <div className="p-20 flex-grow">
      <ArticleList articles={articles} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  const files = await fs.readdir(process.env.ARTICLES_PATH!);
  const articles = files.map((filename) => {
    return matter.read(path.join(process.env.ARTICLES_PATH!, filename))
      .data as ArticleMetadata;
  });

  return { props: { articles: JSON.parse(JSON.stringify(articles)) } };
};

export default Articles;
