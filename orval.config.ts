import * as process from "node:process";

const BACKEND_URL = process.env.VITE_BACKEND_URL ?? "https://interview-api-8icc.onrender.com";

export default({
    revenue: {
        input: {
            target: `${BACKEND_URL}/api-docs-config`,
        },
        output: {
            baseUrl: BACKEND_URL,
            target: './src/api/endpoint.ts',
            mock: true,
            prettier: true,
            client: "react-query",
            mode: "split",
            override: {
                mutator: {
                    path: './src/api/mutator/custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
    },
})