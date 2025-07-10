"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import styled from "styled-components";
import PriceInput from "@/components/atoms/PriceInput";
import Button from "@/components/atoms/Button";

const PriceFilterWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [minPrice, setMinPrice] = useState(
    () => searchParams.get("minPrice") || ""
  );

  const [maxPrice, setMaxPrice] = useState(
    () => searchParams.get("maxPrice") || ""
  );

  const updateUrlParams = useCallback(() => {
    if (minPrice > maxPrice) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    const updateParam = (key: string, value: string) => {
      if (value) params.set(key, value);
      else params.delete(key);
    };

    updateParam("minPrice", minPrice);
    updateParam("maxPrice", maxPrice);
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  }, [router, searchParams, minPrice, maxPrice]);

  return (
    <PriceFilterWrapper>
      <PriceInput
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <PriceInput
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Button onClick={updateUrlParams} disabled={minPrice > maxPrice}>
        Apply
      </Button>
    </PriceFilterWrapper>
  );
}
