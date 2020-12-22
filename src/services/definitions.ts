import dotenv from "dotenv";
import { PORT } from "../server";

dotenv.config();

export const ServerHostname = process.env.NODE_ENV === "development" ? `http://localhost:${PORT || 7000}` : "https://shopify-image-repository-api.herokuapp.com";
export const ClientHostname = process.env.NODE_ENV === "development" ? `http://localhost:${3000}` : "https://shopify-image-repository.herokuapp.com";
