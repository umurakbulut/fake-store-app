"use client";

import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 2rem 0;
`;

interface IProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: IProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Nav>
      {pages.map((page) => (
        <Link
          key={page}
          href={`/products?page=${page}`}
          style={{
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
            background: page === currentPage ? "#000" : "#fff",
            color: page === currentPage ? "#fff" : "#000",
            fontWeight: 500,
          }}
        >
          {page}
        </Link>
      ))}
    </Nav>
  );
}
