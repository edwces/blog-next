import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "path";
import matter from "gray-matter";
import { ArticleLayout } from "../../components/layouts/ArticleLayout";
import { getArticleSlugs } from "../../utils/article.utils";
import dynamic from "next/dynamic";

type ArticleProps = { data: ArticleMetadata; name: string };

const Article: NextPage<ArticleProps> = ({ data, name }) => {
  const MDX = dynamic(() => import(`../../articles/${name}.mdx`));

  return (
    <ArticleLayout meta={data}>
      <MDX />
    </ArticleLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxPath = path.join(process.env.ARTICLES_PATH!, `${params!.slug}.mdx`);

  const { data } = matter.read(mdxPath);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      name: params!.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getArticleSlugs(process.env.ARTICLES_PATH!);
  const params = slugs.map((slug) => ({ params: { slug } }));

  return { paths: params, fallback: false };
};

export default Article;
