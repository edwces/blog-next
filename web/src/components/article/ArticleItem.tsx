import Link from "next/link";
import { ArticleMetadata } from "../../types/article-metadata";

type ArticleItemProps = Pick<ArticleMetadata, "description" | "title" | "date">;

export const ArticleItem = ({ title, description, date }: ArticleItemProps) => {
  return (
    <article className="p-4 rounded-lg bg-white shadow-md">
      <Link href={`/articles/${title}`} passHref>
        <a className="flex flex-col justify-start">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{description}</p>
        </a>
      </Link>
    </article>
  );
};
