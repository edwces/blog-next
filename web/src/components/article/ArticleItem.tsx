import Link from "next/link";
import { ArticleMetadata } from "../../types/article-metadata";

type ArticleItemProps = Pick<
  ArticleMetadata,
  "description" | "title" | "date" | "author"
>;

export const ArticleItem = ({
  title,
  description,
  date,
  author,
}: ArticleItemProps) => {
  return (
    <article className="p-4 rounded-lg bg-white border-2 hover:border-violet-500">
      <Link href={`/articles/${title}`} passHref>
        <a className="flex flex-col gap-1 justify-start">
          <h1 className="font-header font-bold text-2xl">{title}</h1>
          <p className="font-medium">
            {author} on {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-500">{description}</p>
        </a>
      </Link>
    </article>
  );
};
