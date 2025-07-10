"use client";

import styled from "styled-components";
import ProductCard from "@/components/molecules/ProductCard";
import { IProduct } from "@/types/product";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface IProps {
  products: IProduct[];
}

export default function ProductGrid({ products }: IProps) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
