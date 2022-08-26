import { ArticleMetadata } from "../../types/article-metadata";
import { ArticleItem } from "./ArticleItem";

type ArticleListProps = { articles?: ArticleMetadata[] };

export const ArticleList = ({ articles = [] }: ArticleListProps) => {
  return (
    <ul className="grid gap-5 grid-cols-1 lg:grid-cols-2">
      {articles.map((article) => (
        <li key={article.title + article.title}>
          <ArticleItem {...article} />
        </li>
      ))}
    </ul>
  );
};
