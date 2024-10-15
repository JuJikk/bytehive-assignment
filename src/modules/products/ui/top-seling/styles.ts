import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding: 0.8rem;
`;

export const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ProductItemWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0.45rem 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const ProductCategory = styled.p`
  font-size: 0.85rem;
  color: #6b7280;
  margin: 4px 0 0 0;
`;

export const ProductSales = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SalesAndPlace = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
`;

export const ProductSalesNumber = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #10b981;
`;

export const ProductSalesText = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #6c737f;
`;

export const ProductRank = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  background-color: #f3f4f6;
  padding: 8px 10px;
  border-radius: 12px;
  height: fit-content;
  margin: auto 0;
`;

export const SeeAllLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  padding: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
`;
