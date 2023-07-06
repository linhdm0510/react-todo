import axios from '../../plugins/axios';

const PRODUCT_URL = '/products';

export const productService = {
	getList(params) {
		return axios.get(PRODUCT_URL, { params });
	},
	deleteProduct(id) {
		return axios.delete(`${PRODUCT_URL}/${id}`);
	},
};
