"use client";

import StyledImage from "@/components/atoms/Image";
import Card from "@/components/atoms/Card";
import ProductTitle from "@/components/atoms/ProductTitle";
import ProductPrice from "@/components/atoms/ProductPrice";
import ProductRating from "@/components/molecules/ProductRating";
import { IProduct } from "@/types/product";

interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  return (
    <Card>
      <StyledImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ProductRating>
        <span>⭐</span>
        <span>{product.rating.rate}</span>
      </ProductRating>
    </Card>
  );
}
