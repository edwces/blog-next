import { GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "node:path";
import * as fs from "node:fs/promises";
import * as matter from "gray-matter";
import { ArticleItem } from "../../components/article/ArticleItem";

type ArticlesProps = { articles: ArticleMetadata[] };

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  return (
    <div className="p-20 flex flex-col gap-5">
      {articles.map((article) => (
        <ArticleItem
          key={article.title}
          title={article.title}
          description={article.description}
          date={article.date}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async () => {
  const files = await fs.readdir(process.env.ARTICLES_PATH!);
  const mdxFiles = files.filter(
    (filename) => path.extname(filename) === ".mdx"
  );
  const articles = mdxFiles.map((filename) => {
    return matter.read(path.join(process.env.ARTICLES_PATH!, filename))
      .data as ArticleMetadata;
  });

  return { props: { articles: JSON.parse(JSON.stringify(articles)) } };
};

export default Articles;
