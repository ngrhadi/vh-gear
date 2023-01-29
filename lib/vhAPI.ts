import axios from "axios";

const configurations = {
  VH_API_DOMAIN : "https://api.vaulthunters.gg/gear/"
}

export const API = axios.create({
  baseURL: configurations.VH_API_DOMAIN,
});
