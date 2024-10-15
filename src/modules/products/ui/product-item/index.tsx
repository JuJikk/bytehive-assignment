import {
  ProductCategory,
  ProductImage,
  ProductInfo,
  ProductItemWrapper,
  ProductName,
  ProductRank,
  ProductSales,
  ProductSalesNumber,
  ProductSalesText,
  SalesAndPlace,
} from "../top-seling/styles.ts";
import { ProductsType } from "../../types";

const ProductItem = ({ product }: { product: ProductsType }) => {
  return (
    <ProductItemWrapper>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductInfo>
        <ProductName>{product.title}</ProductName>
        <ProductCategory>in {product.category}</ProductCategory>
      </ProductInfo>
      <SalesAndPlace>
        <ProductSales>
          <ProductSalesNumber>{product.purchasesQuantity}</ProductSalesNumber>
          <ProductSalesText>in sales</ProductSalesText>
        </ProductSales>
        <ProductRank>#{product.leaderboardPosition}</ProductRank>
      </SalesAndPlace>
    </ProductItemWrapper>
  );
};

export default ProductItem;
