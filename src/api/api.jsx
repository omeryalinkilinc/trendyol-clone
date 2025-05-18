import axios from "axios";
import { sellers } from "../components/sellerData";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const products = response.data.products;

    const updateProducts = products.map((product) => {
      const seller = sellers[product.id % sellers.length];

      return {
        ...product,
        seller: {
          name: seller.name,
          rating: seller.rating,
          followers: seller.followers,
        },
      };
    });

    return updateProducts;
  } catch (error) {
    console.log("Ürünleri çekerken hata oluştu:", error);
    return [];
  }
};
