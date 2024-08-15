import { api } from "../api";

export const ProductService = {
  getProducts: async () => {
    const res = await api.get(
      `/tractor`
    );

    return res.data;
  },

  getProductsById: async ({ id }) => {
    const res = await api.get(
      `/tractor/${id}`
    )

    return res.data
  }
};