import { API_URLS } from '../config/apiConfig';

export const fetchProducts = async () => {
  try {
    const res = await fetch(API_URLS.GET_PRODUCTS);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await res.json();
    return json.products;
  } catch (error) {
    console.error('Fetch products failed:', error);
    throw error;
  }
};