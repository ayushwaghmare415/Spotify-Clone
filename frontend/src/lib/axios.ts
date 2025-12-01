import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
	withCredentials: true,
});

// This will be set by the AuthProvider
let getTokenFn: (() => Promise<string | null>) | null = null;

export const setGetToken = (fn: () => Promise<string | null>) => {
	getTokenFn = fn;
};

// Add a request interceptor to attach the token
axiosInstance.interceptors.request.use(
	async (config) => {
		if (getTokenFn) {
			const token = await getTokenFn();
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
		}
		return config;
	},
	(error) => Promise.reject(error)
);
