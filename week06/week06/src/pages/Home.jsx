import ProductList from "../components/ProductList";
import SortToggle from "../components/SortToggle"; // 나중에 구현
import styled from "styled-components";
import { useState } from "react";
import { products } from "../data/products";

export default function Home() {
  const [sortOrder, setSortOrder] = useState("low");

  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "low" ? a.price - b.price : b.price - a.price
  );

  return (
    <Container>
      <Logo>TAYLOR<br />SWIFT</Logo>
      <SortToggle sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ProductList products={sortedProducts} />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Logo = styled.h1`
  font-family: 'serif';
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 1.1;
  letter-spacing: 2px;
  margin-bottom: 40px;
  text-align: left;
`;

