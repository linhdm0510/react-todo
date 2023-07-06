import { useEffect, useState } from 'react';
import { productService } from '../../products.service';
import { getColumnsProduct } from '../../product.constant';
import { Table, message } from 'antd';

export default function ProductListPage() {
	const [productsList, setProductsList] = useState([]);

	const handleEdit = (product) => {
		console.log('product: ', product);
	};

	const handleDelete = async (productID) => {
		setProductID(productID);
		const res = await productService.deleteProduct(productID);
		if (res.success) {
			message.success('Delete product successfully !');
			getListProduct();
		} else message.error('Delete failed.');
	};

	const [columns, setColumns] = useState(() => getColumnsProduct({ handleEdit, handleDelete }));
	const [total, setTotal] = useState();
	const [productID, setProductID] = useState();
	const [pagination, setPagination] = useState({
		pageSize: 10,
		currentPage: 1,
	});

	const getListProduct = async () => {
		const response = await productService.getList({
			limit: pagination.pageSize,
			skip: pagination.pageSize * (pagination.currentPage - 1),
		});
		if (response?.success) {
			const mappingData = (response?.products || []).map((el) => {
				return {
					key: el?.id,
					id: el?.id,
					title: el?.title,
					price: el?.price,
					rating: el?.rating,
					discountPercentage: el?.discountPercentage,
					img_default: el?.images?.[0],
					images: el?.images,
					description: el?.description,
				};
			});
			setProductsList(mappingData || []);
			setTotal(response?.total || 0);
		}
	};
	useEffect(() => {
		getListProduct();
	}, [pagination]);

	const handleTableChange = (pagination) => {
		setPagination({ pageSize: pagination.pageSize, currentPage: pagination.current });
	};

	return (
		<>
			<Table
				dataSource={productsList}
				columns={columns}
				pagination={{ pageSize: pagination.pageSize, total: total, showSizeChanger: true }}
				onChange={handleTableChange}
			/>
		</>
	);
}
