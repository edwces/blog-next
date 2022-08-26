import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "path";
import matter from "gray-matter";
import { ArticleLayout } from "../../components/layouts/ArticleLayout";
import dynamic from "next/dynamic";
import { getArticleSlugs } from "../../utils/article.utils";

type ArticleProps = { data: ArticleMetadata; file: string };

const Article: NextPage<ArticleProps> = ({ data, file }) => {
  const MDX = dynamic(() => import("../../articles/initial.mdx"));

  return (
    <ArticleLayout meta={data}>
      <MDX />
    </ArticleLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = matter.read(
    path.join(process.env.ARTICLES_PATH!, `${params!.slug}.mdx`)
  );
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      file: `${params!.slug}.mdx`,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getArticleSlugs(process.env.ARTICLES_PATH!);
  const params = slugs.map((slug) => ({ params: { slug } }));

  return { paths: params, fallback: false };
};

export default Article;
