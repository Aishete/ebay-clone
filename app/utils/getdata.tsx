
import productData from '../../data/product.json';

export function getAllProducts() {
  return productData;
}

export function getProductById(id: number) {
  return productData.find(product => product.id === id);
}
