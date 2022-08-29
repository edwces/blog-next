import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ArticleMetadata } from "../../types/article-metadata";
import * as path from "path";
import matter from "gray-matter";
import { ArticleLayout } from "../../components/layouts/ArticleLayout";
import { getArticleSlugs } from "../../utils/article.utils";
import { evaluateSync } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import provider, { useMDXComponents } from "@mdx-js/react";
import runtime from "react/jsx-runtime";

type ArticleProps = { data: ArticleMetadata; content: string };

const Article: NextPage<ArticleProps> = ({ data, content }) => {
  // Compile and Evaluate JSX from MDX content
  const MDX = evaluateSync(content, {
    ...provider,
    ...runtime,
    useMDXComponents: useMDXComponents,
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
  } as any);

  return (
    <ArticleLayout meta={data}>
      <MDX.default />
    </ArticleLayout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const mdxPath = path.join(process.env.ARTICLES_PATH!, `${params!.slug}.mdx`);

  const { data, content } = matter.read(mdxPath);

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getArticleSlugs(process.env.ARTICLES_PATH!);
  const params = slugs.map((slug) => ({ params: { slug } }));

  return { paths: params, fallback: false };
};

export default Article;
