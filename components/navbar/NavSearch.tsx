"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "../ui/input";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const searchParam = searchParams.get("search");
  const handleSearchInput = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`?${params.toString()}`);
  }, 500);
  useEffect(() => {
    if (!searchParam) {
      setSearch("");
    }
  }, [searchParam]);
  return (
    <Input
      value={search}
      type="search"
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearchInput(e.target.value);
      }}
      placeholder="search product..."
      className="max-w-xs dark:bg-muted "
    />
  );
}
export default NavSearch;
