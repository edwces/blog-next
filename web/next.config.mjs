import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import defineMDXConfig from "@next/mdx";

const withMDX = defineMDXConfig({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypeHighlight],
    providerImportSource: "@mdx-js/react",
  },
});

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return withMDX(config);
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
