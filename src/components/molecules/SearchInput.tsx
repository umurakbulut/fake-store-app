"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

const Wrapper = styled.form`
  display: flex;
  gap: 8px;
`;

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (query) params.set("query", query);
    else params.delete("query");

    params.set("page", "1");
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
}
