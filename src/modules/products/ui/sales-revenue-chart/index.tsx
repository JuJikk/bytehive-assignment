import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {ChartContainer, Title} from "./styles.ts";
import {useGetApiSalesRevenue} from "../../../../api/endpoint.ts";

export default function SalesRevenueChart() {
    const {data: revenue} = useGetApiSalesRevenue()
    return (
        <ChartContainer>
            <Title>Sales Revenue</Title>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={revenue}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Legend align="right" verticalAlign="top" />
                    <Line
                        type="monotone"
                        dataKey="newCustomers"
                        stroke="#6366F1"
                        strokeWidth={2}
                        dot={false}
                        name="New Customers"
                    />
                    <Line
                        type="monotone"
                        dataKey="upCrossSelling"
                        stroke="#4338CA"
                        strokeWidth={2}
                        dot={false}
                        name="Up/Cross-Selling"
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
}