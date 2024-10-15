import { api } from "../../../shared/api";

export const logIn = async (email: string, password: string) => {
  try {
    const response = await api.post("/api/auth/login", { email, password });
    localStorage.setItem("user_access_token", response.data.token);
    return response;
  } catch {
    throw new Error("Failed to sign in");
  }
};
