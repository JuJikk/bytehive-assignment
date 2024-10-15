import { useQueryClient } from "@tanstack/react-query";
import {
  GridContainer,
  HeaderArea,
  SyncButton,
} from "../../modules/layout/ui/dashboard-layout/styles.ts";
import CachedIcon from "@mui/icons-material/Cached";
import SalesRevenueChart from "../../modules/products/ui/sales-revenue-chart";
import TopSellingProducts from "../../modules/products/ui/top-seling";

const Ecommerce = () => {
  const queryClient = useQueryClient();

  const handleUpdateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ["productsData"] });
  };

  return (
    <>
      <HeaderArea>
        <h1
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            fontWeight: "bold",
            marginBottom: "24px",
          }}
        >
          E-commerce
        </h1>
        <SyncButton onClick={handleUpdateQueries}>
          {" "}
          <CachedIcon style={{ marginRight: "0.5rem" }} /> Sync Data{" "}
        </SyncButton>
      </HeaderArea>
      <GridContainer>
        <SalesRevenueChart />
        <TopSellingProducts />
      </GridContainer>
    </>
  );
};

export default Ecommerce;
