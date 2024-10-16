import Axios, { AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({
  baseURL: "https://interview-api-8icc.onrender.com",
});

const getToken = () => localStorage.getItem("user_access_token");

export const customInstance = async <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const token = getToken();

  const authConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
    cancelToken: source.token,
  };

  const { data } = await AXIOS_INSTANCE({
    ...authConfig,
    ...options,
  });
  return data;
};
