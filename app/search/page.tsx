import SearchResult from "./components/search-result";
import SearchInput from "./components/search-input";

import { Suspense } from "react";

export default async function SearchBar({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const param = await searchParams;
  const query = param.q as string;
  return (
    <div className=" relative m-auto  w-full max-w-[500px] mt-5">
      <SearchInput />

      {query && (
        <div className=" shadow-2xl z-20 absolute top-22  border border-gray-600 w-full h-auto rounded-lg p-4">
          <Suspense fallback={<p> Loading...</p>}>
            <SearchResult key={query} query={query} />
          </Suspense>{" "}
        </div>
      )}
    </div>
  );
}
