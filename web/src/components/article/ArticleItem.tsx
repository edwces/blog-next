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
    <article className="transition ease-in-out duration-150 group p-5 border-2 border-primary hover:border-secondary-600">
      <Link href={`/articles/${title}`} passHref>
        <a className="flex flex-col gap-1 justify-start">
          <h1 className="font-header font-bold text-2xl group-hover:text-secondary-600">
            {title}
          </h1>
          <p className="font-medium">
            {author} on {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-gray-400">{description}</p>
        </a>
      </Link>
    </article>
  );
};
