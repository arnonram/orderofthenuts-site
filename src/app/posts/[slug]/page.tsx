import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { getPostMetadata } from "@/app/components/getPostsMetadata";

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-violet-600">
        {post.data.title}
      </h1>
      <p className="text-slate-400 text-center">{post.data.date}</p>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getPostContent = (slug: string) => {
  const folder = "_posts";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};
