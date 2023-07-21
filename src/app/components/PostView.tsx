import { PostData } from "@/types/PostMetadata";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import { PostType } from "../lib/postsEnum";

export default function PostView(props: PostData) {
  return (
    <div dir={props.lang === "heb" ? "rtl" : "ltr"}>
      <h1 className="text-5xl font-bold text-center text-violet-600">
        {props.title}
      </h1>
      <p className="text-2xl text-slate-800 text-center">{props.author}</p>
      <p className="text-slate-400 text-center">{props.date}</p>
      {props.image && (
        <Image
          className="mx-auto"
          src={props.image}
          width={500}
          height={500}
          alt={`image-${props.slug}`}
        />
      )}
      <article className="prose lg:prose-xl text-justify font-medium">
        <Markdown>{props.content}</Markdown>
      </article>
    </div>
  );
}
