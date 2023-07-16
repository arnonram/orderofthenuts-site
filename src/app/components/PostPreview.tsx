import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

export default function postPreview(props: PostMetadata) {
  return (
    <div
      key={props.slug}
      className="border border-slate-200 p-4 rounded-md shadow-md bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h2 className="font-bold text-violet-600 hover:underline">
          {props.slug}
        </h2>
      </Link>
      <p className="text-sm text-slate-400">{props.date}</p>
      <p className="test-slate-700">{props.subtitle}</p>
    </div>
  );
}
