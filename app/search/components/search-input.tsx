"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useEffect, useRef, useState, useTransition } from "react";
import { Delete, Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState<string>("");
  const deboucedRef = useRef<NodeJS.Timeout>(null);

  const handleChange = (term: string) => {
    setQuery(term);
    if (deboucedRef.current) {
      clearTimeout(deboucedRef.current);
    }

    deboucedRef.current = setTimeout(() => {
      const newParams = new URLSearchParams(params);
      if (term.trim()) {
        newParams.set("q", term.trim());
      } else {
        newParams.delete("q");
      }

      console.log(params.toString() === newParams.toString());
      if (params.toString() !== newParams.toString()) {
        router.replace(`${pathname}?${newParams.toString()}`);
      }
    }, 300);
  };

  return (
    <>
      <div className=" m-auto text-center mb-3 font-bold">
        Live Search as user type with Debouncing concept
      </div>
      <InputGroup className=" border-2 h-12">
        <InputGroupInput
          value={query}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          placeholder="Search..."
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="secondary"
            onClick={() => {
              router.replace(`${pathname}`);
              setQuery("");
            }}
          >
            <Delete />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="secondary"
            className="h-10 w-10 rounded-lg"
          >
            <Search className="font-bold" strokeWidth="3px" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      {/* {isPending && <p>Searching.....</p>} */}
    </>
  );
}
