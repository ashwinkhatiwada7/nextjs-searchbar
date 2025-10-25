import "./globals.css";

import Link from "next/link";

export default async function Home() {
  return (
    <div className="m-auto text-center">
      <header className="h-12  mb-12 flex justify-around items-center gap-5  bg-amber-100">
        <div className="font-bold">My Ecommerce</div>
        <div className="space-x-3">
          <Link href="/">Home</Link>

          <Link href="/search" className="underline">
            Search
          </Link>
        </div>
      </header>
      click on search
    </div>
  );
}
