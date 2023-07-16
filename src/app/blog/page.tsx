import { getPostMetadata } from "../components/getPostsMetadata";
import PostPreview from "../components/PostPreview";

export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-col-2 gap-4">
      <h1 className="font-bold text-4xl">Blogs</h1>
      {postPreview}
    </div>
  );
}
