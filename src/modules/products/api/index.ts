import { useQuery } from "@tanstack/react-query";
import {apiAuth} from "../../../shared/api";

export const useGetProductsData = () => {
    return useQuery({
        queryKey: ["productsData"],
        queryFn: async () => {
            const response = await apiAuth.get('/api/products')
            return response.data
        },
    })
}