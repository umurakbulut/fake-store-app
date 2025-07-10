"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

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

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    params.set("page", "1");
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Wrapper>
      <Select value={currentSort} onChange={handleChange}>
        <option value="">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </Select>
    </Wrapper>
  );
}
