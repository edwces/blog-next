import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";
import { ArticleMetadata } from "../types/article-metadata";
import { Links } from "../types/links";

export const getArticleSlugs = async (dirname: string) => {
  const files = await fs.readdir(dirname);
  const slugs = files.map((file) => {
    const meta = matter.read(path.join(dirname, file));
    const uri = meta.data.title.replaceAll(" ", "-");
    return uri;
  });
  return slugs;
};

export const getRSSFeedFromArticles = async (articles: ArticleMetadata[]) => {
  return `<rss xmlns:blogChannel="${Links.URL}" version="2.0">
      <channel>
        <title>Edwces Blog</title>
        <link>${Links.URL}</link>
        <description>Edwces Blog</description>
        <language>en-us</language>
        <ttl>20</ttl>
        ${articles.map(
          (article) => `
          <item>
            <title>${article.title}</title>
            <link>${`${Links.URL}/${article.title}`}</link>
            <description>${article.description}</description>
            <author>${article.author}</author>
            <pubDate>${
              new Date(article.date).toISOString().split("T")[0]
            }</pubDate>
          </item>
        `
        )}
      </channel>
      </rss>
        `;
};
