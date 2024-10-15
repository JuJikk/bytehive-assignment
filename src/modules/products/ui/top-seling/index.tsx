import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Container, ProductList, SeeAllLink, Title } from "./styles.ts";
import { useGetProductsData } from "../../api";
import { ProductsType } from "../../types";
import ProductItem from "../product-item";

const TopSellingProducts = () => {
  const { data: products, isLoading, error } = useGetProductsData();

  return (
    <Container>
      <Title>Top Selling Products</Title>
      {products && (
        <>
          <ProductList>
            {products.map((product: ProductsType) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </ProductList>
          <SeeAllLink href="#">
            See All Products
            <ArrowForwardIcon style={{ marginLeft: "8px" }} />
          </SeeAllLink>
        </>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Sorry, something went wrong</div>}
    </Container>
  );
};

export default TopSellingProducts;
