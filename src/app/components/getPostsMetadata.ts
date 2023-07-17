import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";
import fs from "fs";

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "_posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  return markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image,
    };
  });
};
