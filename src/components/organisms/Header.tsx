"use client";

import Link from "next/link";
import styled from "styled-components";
import { useCart } from "@/contexts/CartContext";
import { StyledLink } from "@/components/molecules/StyledLink";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

const CartBadge = styled.span`
  background: #000;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.875rem;
  margin-left: 6px;
`;

export default function Header() {
  const { items } = useCart();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderWrapper>
      <StyledLink href="/products">MyStore</StyledLink>
      <Nav>
        <StyledLink href="/products">Products</StyledLink>
        <StyledLink href="#">
          Cart
          {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
        </StyledLink>
      </Nav>
    </HeaderWrapper>
  );
}
