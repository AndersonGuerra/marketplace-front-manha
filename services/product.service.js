import api from "../api";

export default {
  async getProducts() {
    const result = await api.get("/products");
    return result.data;
  },
  async getProduct(id) {
    const result = await api.get(`/products/${id}`);
    return result.data;
  },
  async createProduct(data) {
    data.createdAt = new Date().toLocaleString();
    data.image = "https://i.dummyjson.com/data/products/4/thumbnail.jpg";
    const result = await api.post("/products", data);
    return result.data;
  },
};
