"use client";

import { IProduct } from "@/types/product";
import styled from "styled-components";
import ProductRating from "@/components/atoms/ProductRating";
import ProductPrice from "@/components/atoms/ProductPrice";
import StyledImage from "@/components/atoms/Image";

interface IProductDetailProps {
  product: IProduct;
}

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  flex: 1 1 300px;
  display: flex;
  justify-content: center;
`;

const ProductDetailImage = styled(StyledImage)`
  height: auto;
  max-height: 400px;
`;

const Content = styled.div`
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #444;
  line-height: 1.6;
`;

const ProductDetailRating = styled(ProductRating)`
  justify-content: flex-start;
`;

export default function ProductDetail({ product }: IProductDetailProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProductDetailImage src={product.image} alt={product.title} />
      </ImageWrapper>
      <Content>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductDetailRating>
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </ProductDetailRating>
      </Content>
    </Wrapper>
  );
}
