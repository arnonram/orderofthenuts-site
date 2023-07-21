import Link from "next/link";

export default function Home() {
  return (
    <div className="font-medium font-sans text-xl">
      <p>
        The Order of the Nuts is an order of brave nuts who go furth and try not
        to trip on the way there...
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
      <p>
        Other than that, this is also a place for me to write down some stuff:
        stories and blogs
      </p>
    </div>
  );
}
