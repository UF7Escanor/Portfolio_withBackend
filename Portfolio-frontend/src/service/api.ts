import axios from "axios";

// Prefer explicit API URL; otherwise use relative paths so Vite dev proxy can forward `/api` to backend
const BASE_URL = import.meta.env.VITE_API_URL ?? import.meta.env.VITE_FAKE_STORE_API_URL ?? "";

export const fsClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach Authorization header automatically when token is present in localStorage
fsClient.interceptors.request.use((config) => {
    try {
        const token = localStorage.getItem("userToken");
        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (e) {
        // ignore (e.g., SSR or no localStorage)
    }
    return config;
});

// Ensure FormData requests are sent with the proper multipart Content-Type (browser will set boundary).
fsClient.interceptors.request.use((config) => {
    try {
        if (config.data && typeof FormData !== "undefined" && config.data instanceof FormData) {
            // remove default json content-type so browser/axios can set multipart/form-data with boundary
            if (config.headers) {
                // header names may differ in casing; delete common variants
                delete (config.headers as any)["Content-Type"];
                delete (config.headers as any)["content-type"];
            }
        }
    } catch (e) {
        // ignore
    }
    return config;
});


