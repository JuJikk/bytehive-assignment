import {ProductWrapper} from "./styles.ts";
import {ProductItem} from "../product-item-skeleton/styles.ts";

const TopSellingSkeleton = () => {
    return (
        <ProductWrapper>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </ProductWrapper>
    );
};

export default TopSellingSkeleton;
