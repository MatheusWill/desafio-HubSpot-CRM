import "dotenv/config";

export const LOGGER = {
  CONSOLE: { LEVEL: process.env.LOGGER_CONSOLE_LEVEL || "info" },
};

export const SERVER = {
  PORT: process.env.PORT || 3030,
  NODE_ENV: process.env.NODE_ENV || "development",
  BASE_URI: process.env.BASE_URI || "/api/v1",
};

export const APIS = {
  API_HUBSPOT: process.env.API_HUBSPOT || "",
};

export const ID = {
  ID_SHEETS: process.env.ID_SHEETS || "",
};

export const KEY = {
  KEY_API_GOOGLE: process.env.KEY_API_GOOGLE || "",
};

export const TOKEN = {
  ACCESS_TOKEN_HUBSPOT: process.env.ACCESS_TOKEN_HUBSPOT || "",
};
