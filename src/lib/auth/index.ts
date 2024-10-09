import axios from "axios";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const logIn = async (email: string, password: string) => {
    try {
        const res = await axios.post(
            `${BACKEND_URL}/api/auth/login`,
            {
                email,
                password,
            },
        )
        localStorage.setItem('user_access_token', JSON.stringify(res.data.token))
        return res;
    } catch {
        throw new Error("Failed to sign in")
    }
}