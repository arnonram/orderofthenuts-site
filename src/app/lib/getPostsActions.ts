import matter from "gray-matter";
import { PostData, PostMetadata } from "../../types/PostMetadata";
import fs from "fs";
import { PostType } from "./postsEnum";

export const getPostMetadata = (location: PostType): PostMetadata[] => {
  const folder = `_posts/${location}`;
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
      location: location,
      image: matterResult.data.image,
      author: matterResult.data.author,
      lang: matterResult.data.lang,
    };
  });
};

export const getPostContent = (slug: string, location: PostType): PostData => {
  const folder = `_posts/${location}`;
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return {
    slug: slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    image: matterResult.data.image,
    content: matterResult.content,
    location: location,
    author: matterResult.data.author,
    lang: matterResult.data.lang,
  };
};
