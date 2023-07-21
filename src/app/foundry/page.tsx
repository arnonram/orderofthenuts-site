import Link from "next/link";
import Image from "next/image";

export default function FoundryPage() {
  return (
    <div>
      <h1 className="font-bold text-3xl ">Our Games</h1>
      <p>
        We play using{" "}
        <Link
          href="https://foundryvtt.com/"
          className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
        >
          FoundryVTT
          <Image
            src="/images/fvtt.png"
            width={50}
            height={50}
            alt="FoundryVTT"
            className="inline-block ps-2"
          />
        </Link>
      </p>
      <ul>
        <li className="border border-slate-200 p-4 m-2 rounded-md shadow-md">
          <Link
            href="http://apocalypse.orderofthenuts.club/"
            className="font-bold text-2xl text-blue-600  hover:underline"
          >
            Princes of the Apocalypse
          </Link>
          <p className="text-sm text-black italic">by Yoav</p>
          <Link href="http://apocalypse.orderofthenuts.club/">
            <Image
              src="/images/foundry/pota.jpg"
              width={500}
              height={500}
              alt="pota"
            />
          </Link>
        </li>
        <li className="border border-slate-200 p-4 m-2 rounded-md shadow-md">
          <Link
            href="http://foundry.orderofthenuts.club/"
            className="font-bold text-2xl text-blue-600  hover:underline"
          >
            The Fouling Stone
          </Link>
          <p className="italic text-sm font-bold text-blue-600">
            a{" "}
            <Link
              href="https://www.edge-studio.net/categories-games/midnight/"
              className="hover:underline"
            >
              Midnight
            </Link>{" "}
            story
          </p>
          <p className="text-sm italic">by Arnon</p>

          <Link href="http://foundry.orderofthenuts.club/">
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
