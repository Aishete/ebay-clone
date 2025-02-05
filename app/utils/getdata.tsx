import data from '../../data/product.json';

export function getAllProducts() {
  return data.products;
}

export function getProductById(id: string) {
  return data.products.find(product => product.id === id);
}
