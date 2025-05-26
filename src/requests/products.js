import { dummyJson } from "../services/api";

export async function getAllProducts() {
    return await dummyJson.get('/products');
}

export async function getSingleProduct(id) {
    return await dummyJson.get(`/products/${id}`);
}