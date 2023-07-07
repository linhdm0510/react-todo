import axios from '../../plugins/axios';

const PRODUCT_URL = '/products';

export const productService = {
	getList(params) {
		return axios.get(PRODUCT_URL, { params });
	},

	deleteProduct(id) {
		return axios.delete(`${PRODUCT_URL}/${id}`);
	},

	addProduct(payload) {
		return axios.post(`${PRODUCT_URL}/add`, payload);
	},

	updateProduct(payload) {
		return axios.put(`${PRODUCT_URL}/${payload.params}`, payload.body);
	},

	getProductCategories() {
		return axios.get(`${PRODUCT_URL}/categories`);
	},

	getDetailProduct(id) {
		return axios.get(`${PRODUCT_URL}/${id}`);
	},
};
