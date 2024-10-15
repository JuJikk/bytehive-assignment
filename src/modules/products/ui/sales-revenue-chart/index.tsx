import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {ChartContainer, Title} from "./styles.ts";
import {useGetCustomers} from "../../../../api/endpoint.ts";

const data = [
    { month: 'Jan', newCustomers: 4000, upCrossSelling: 2400 },
    { month: 'Feb', newCustomers: 3000, upCrossSelling: 1398 },
    { month: 'Mar', newCustomers: 2000, upCrossSelling: 9800 },
    { month: 'Apr', newCustomers: 2780, upCrossSelling: 3908 },
    { month: 'May', newCustomers: 1890, upCrossSelling: 4800 },
    { month: 'Jun', newCustomers: 2390, upCrossSelling: 3800 },
    { month: 'Jul', newCustomers: 3490, upCrossSelling: 4300 },
    { month: 'Aug', newCustomers: 3490, upCrossSelling: 4300 },
    { month: 'Sep', newCustomers: 4000, upCrossSelling: 2400 },
    { month: 'Oct', newCustomers: 3000, upCrossSelling: 1398 },
    { month: 'Nov', newCustomers: 2000, upCrossSelling: 9800 },
    { month: 'Dec', newCustomers: 2780, upCrossSelling: 3908 },
];

export default function SalesRevenueChart() {
    const {data: products} = useGetCustomers()

    console.log(products, "products")
    return (
        <ChartContainer>
            <Title>Sales Revenue</Title>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={data}>
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