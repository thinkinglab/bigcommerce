import axios from "axios";

const easydrugApi = axios.create({
  baseURL: "https://api.bigcommerce.com/stores/cv9lqceyer/v3/catalog",
});

easydrugApi.defaults.headers.common["Accept"] = "application/json";
easydrugApi.defaults.headers.common["Content-Type"] = "application/json";
easydrugApi.defaults.headers.common["X-Auth-Token"] =
  "fs8uhl5uo8hh7qi0okmf5iydhidxxhf";

export default easydrugApi;
