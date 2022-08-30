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
    <article className="transition ease-in-out duration-150 group p-5 border-2 border-primary hover:border-secondary">
      <Link href={`/articles/${title.replaceAll(" ", "-")}`} passHref>
        <a className="flex flex-col gap-1 justify-start">
          <h1 className="transition ease-in-out duration-150 font-header font-bold text-2xl group-hover:text-secondary">
            {title}
          </h1>
          <p className="font-medium">
            {author} on {new Date(date).toLocaleDateString()}
          </p>
          <p className="text-dimmed">{description}</p>
        </a>
      </Link>
    </article>
  );
};
