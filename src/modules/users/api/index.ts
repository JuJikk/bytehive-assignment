import {useQuery} from "@tanstack/react-query";
import {apiAuth} from "../../../shared/api";

export const useGetUserData = () => {
    return useQuery({
        queryKey: ["userData"],
        queryFn: async () => {
            const response = await apiAuth('/api/user');
            return response.data
        },
    })
}