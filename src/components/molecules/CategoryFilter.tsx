"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";

const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolyline points='20,50 70,100 120,50' fill='none' stroke='%23333' stroke-width='15' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;

  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const categories = [
  { label: "All", value: "" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelry", value: "jewelery" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const currentSort = searchParams.get("sort") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (currentSort) {
      params.set("sort", currentSort);
    }

    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <Select value={currentCategory} onChange={handleChange}>
      {categories.map((cat) => (
        <option key={cat.value} value={cat.value}>
          {cat.label}
        </option>
      ))}
    </Select>
  );
}
