"use client";

import styled from "styled-components";
import StyledImage from "@/components/atoms/Image";
import { IProduct } from "@/types/product";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  min-height: 48px;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #222;
  margin: 0.25rem 0;
`;

const Rating = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  return (
    <Card>
      <StyledImage src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price}</Price>
      <Rating>
        <span>⭐</span>
        <span>{product.rating.rate}</span>
      </Rating>
    </Card>
  );
}
