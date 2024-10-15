export default({
    revenue: {
        input: './orval-schemas/revenue-data.yaml',
        output: {
            target: './src/api/endpoint.ts',
            mock: true,
            prettier: true,
            client: "react-query",
            mode: "split",
        },
    },
})