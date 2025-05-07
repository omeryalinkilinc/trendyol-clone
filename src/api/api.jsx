import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products; // ← bu satır eksikti
  } catch (error) {
    console.log("Ürünleri çekerken hata oluştu:", error);
    return []; // ← hata durumunda boş dizi dön
  }
};
