import Link from "next/link";

export default function Home() {
  return (
    <div className="font-medium font-sans text-xl">
      <div className="py-8">
        <p>
          The Order of the Nuts is an order of brave nuts who go furth and try
          not to trip on the way there...
        </p>
        <p>
          Our games can be found{" "}
          <Link
            href="/foundry"
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            here
          </Link>
        </p>
      </div>
      <hr className="my-12 h-2 border-t-0 bg-purple-300 opacity-100 dark:opacity-50" />
      <div className="py-8">
        <p>
          Other than that, this is also a place for me to write down some stuff:{" "}
          <Link
            href="/blogs"
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            blogs
          </Link>{" "}
          and{" "}
          <Link
            href="/stories"
            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
          >
            stories
          </Link>
        </p>
      </div>
    </div>
  );
}
