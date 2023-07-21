import PostView from "@/app/components/PostView";
import { getPostContent, getPostMetadata } from "@/app/lib/getPostsActions";
import { PostType } from "@/app/lib/postsEnum";

export default function StoriesPage(props: any) {
  const slug = props.params.slug;
  const content = getPostContent(slug, PostType.Stories);
  return <PostView key={slug} {...content} />;
}

export async function generateStaticParams() {
  const posts = getPostMetadata(PostType.Stories);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
