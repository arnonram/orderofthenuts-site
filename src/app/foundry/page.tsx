import Link from "next/link";

export default function FoundryPage() {
  return (
    <div>
      <h1 className="font-bold text-4xl">Our Games</h1>
      <ul>
        <li className="ont-bold text-blue-600 hover:underline">
          <Link href="http://apocalypse.orderofthenuts.club/">
            Princes of the Apocalypse
          </Link>
        </li>
        <li className="ont-bold text-blue-600 hover:underline">
          <Link href="http://foundry.orderofthenuts.club/">
            The Fouling Stone
          </Link>
        </li>
      </ul>
    </div>
  );
}
