import axios from "axios";
import {
  Configuration,
  VendorApiFactory,
  OrderApiFactory,
  UserApiFactory,
  ProductApiFactory,
  SupportApiFactory,
  CustomersApiFactory,
  AuthApiFactory,
  AdminApiFactory,
  FAQApiFactory,
  ContentApiFactory,
  EarningsApiFactory,
  DeliveryPersonsApiFactory,
} from "../../api-client";
import { tokenExpiration, TokenMetadata } from "@/lib/tokenExpiration";

const API_BASE_URL = "https://pardomart-node-api-vaje.onrender.com/api/v1/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const configuration = new Configuration({
  basePath: API_BASE_URL,
  baseOptions: {
    headers: {
      "Content-Type": "application/json",
    },
  },
});

// Add request interceptor to validate token before making requests
axiosInstance.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem("authToken");

    if (stored) {
      try {
        const metadata: TokenMetadata = JSON.parse(stored);

        // If token is expired, clear it and prevent the request
        if (tokenExpiration.isTokenExpired(metadata.timestamp)) {
          tokenExpiration.clearToken();
          delete config.headers["Authorization"];

          // Dispatch custom event to notify auth context
          window.dispatchEvent(new CustomEvent("tokenExpired"));

          return Promise.reject({
            response: {
              status: 401,
              data: {
                message: "Your session has expired. Please log in again.",
              },
            },
          });
        }
      } catch (error) {
        console.error("Failed to validate token:", error);
        tokenExpiration.clearToken();
        delete config.headers["Authorization"];
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Add response interceptor to handle 401 responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenExpiration.clearToken();
      window.dispatchEvent(new CustomEvent("tokenExpired"));
    }
    return Promise.reject(error);
  },
);

export const vendorApi = VendorApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const orderApi = OrderApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const userApi = UserApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const productApi = ProductApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const supportApi = SupportApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const customersApi = CustomersApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const authApi = AuthApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const adminApi = AdminApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const faqApi = FAQApiFactory(configuration, API_BASE_URL, axiosInstance);
export const earningsApi = EarningsApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);
export const deliveryPersonsApi = DeliveryPersonsApiFactory(
  configuration,
  API_BASE_URL,
  axiosInstance,
);

export { axiosInstance, configuration };
