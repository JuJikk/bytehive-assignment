import {ProductItem, ProductWrapper} from "./styles.ts";

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
