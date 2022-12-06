import api from "../api";

export default {
  async getProducts() {
    const result = await api.get("/products");
    console.log(result, "ahoy")
    return result.data;
  },
};
