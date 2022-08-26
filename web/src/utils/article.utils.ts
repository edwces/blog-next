import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

export const getArticleSlugs = async (dirname: string) => {
  const files = await fs.readdir(dirname);
  const slugs = files.map((file) => {
    const meta = matter.read(path.join(dirname, file));
    const uri = encodeURI(meta.data.title);
    return uri;
  });
  return slugs;
};
