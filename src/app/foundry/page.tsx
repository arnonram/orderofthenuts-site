import Link from "next/link";
import Image from "next/image";

export default function FoundryPage() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Our Games</h1>
      <ul>
        <li className="font-bold text-2xl text-blue-600 hover:underline border border-slate-200 p-4 m-2 rounded-md shadow-md">
          <Link href="http://apocalypse.orderofthenuts.club/">
            Princes of the Apocalypse
            <Image
              src="/images/foundry/pota.jpg"
              width={500}
              height={500}
              alt="pota"
            />
          </Link>
        </li>
        <li className="font-bold text-2xl text-blue-600 hover:underline border border-slate-200 p-4 m-2 rounded-md shadow-md">
          <Link href="http://foundry.orderofthenuts.club/">
            The Fouling Stone
            <Image
              src="/images/foundry/midnight_foundry_image.webp"
              width={500}
              height={500}
              alt="midnight"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
