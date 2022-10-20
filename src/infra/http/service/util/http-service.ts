import { APIS } from "@/util/constants";
import axios from "axios";

export const httpHubSpot = axios.create({
  baseURL: APIS.API_HUBSPOT,
});
