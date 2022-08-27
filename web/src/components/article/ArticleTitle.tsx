import { ArticleMetadata } from "../../types/article-metadata";

type ArticleTitleProps = Pick<ArticleMetadata, "title" | "date" | "author">;

export const ArticleTitle = ({ title, date, author }: ArticleTitleProps) => {
  return (
    <header>
      <div className="flex flex-col gap-1">
        <h1 className="text-secondary-600 font-header font-bold text-6xl">
          {title}
        </h1>
        <p className="text-gray-400">
          {author} on {new Date(date).toLocaleDateString()}
        </p>
      </div>
    </header>
  );
};
