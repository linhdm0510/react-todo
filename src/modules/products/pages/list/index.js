import { useEffect, useMemo, useState } from 'react';
import { productService } from '../../products.service';
import { getColumnsProduct } from '../../product.constant';
import { Button, Table, message } from 'antd';
import FormModal from '../../components/form/FormModal';
import { DetailProduct } from '../../components/form/Drawer';

export default function ProductListPage() {
	const [productsList, setProductsList] = useState([]);
	const [isShow, setIsShow] = useState(false);
	const [isShowDetail, setIsShowDetail] = useState(false);
	const [productId, setProductId] = useState(null);
	const [isDelete, setIsDelete] = useState(false);

	const handleEdit = (product) => {
		setProductId(product.id);
		setIsShow(true);
	};

	const handleDelete = async (product) => {
		setProductId(product.id);
		const res = await productService.deleteProduct(product.id);
		if (res.success) {
			message.success('Delete product successfully!');
			getListProduct();
			setIsDelete(false);
		} else message.error('Delete failed.');
	};

	const onClickDelete = () => {
		setIsDelete(true);
	};

	useEffect(() => {
		if (isShow || isDelete) setIsShowDetail(!isShow && !isDelete);
	}, [isShow, isDelete]);

	const [columns, setColumns] = useState(() => getColumnsProduct({ handleEdit, handleDelete, onClickDelete }));
	const [total, setTotal] = useState();
	const [pagination, setPagination] = useState({
		pageSize: 10,
		currentPage: 1,
	});
	const [dataDetail, setDataDetail] = useState({});

	const getListProduct = async () => {
		const response = await productService.getList({
			limit: pagination.pageSize,
			skip: pagination.pageSize * (pagination.currentPage - 1),
		});
		if (response?.success) {
			const mappingData = (response?.data?.products || []).map((el) => {
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
			setTotal(response?.data?.total || 0);
		}
	};
	useEffect(() => {
		getListProduct();
	}, [pagination]);

	const handleTableChange = (pagination) => {
		setPagination({ pageSize: pagination.pageSize, currentPage: pagination.current });
	};

	const handleCreate = () => {
		setIsShow(true);
	};

	const handleCancel = () => {
		setIsShow(false);
		setProductId(null);
	};

	const handleClickRow = (data) => {
		setDataDetail(data);
		setIsShowDetail(true);
	};

	const closeDrawer = () => {
		setDataDetail({});
		setIsShowDetail(false);
	};

	return (
		<div>
			<div className="btn-primary">
				<Button
					size="middle"
					type="primary"
					onClick={handleCreate}
				>
					Create new Product
				</Button>
			</div>
			<Table
				dataSource={productsList}
				columns={columns}
				pagination={{ pageSize: pagination.pageSize, total: total, showSizeChanger: true }}
				scroll={{ y: 700 }}
				onChange={handleTableChange}
				onRow={(record, rowIndex) => {
					return {
						onClick: (event) => {
							handleClickRow(record);
						},
					};
				}}
			/>
			{isShow && (
				<FormModal
					productId={productId}
					isShow={isShow}
					handleCancel={handleCancel}
					handleCreate={handleCreate}
					getListProduct={getListProduct}
				/>
			)}
			{isShowDetail && (
				<DetailProduct
					isShow={isShowDetail}
					onClose={() => closeDrawer()}
					data={dataDetail}
				></DetailProduct>
			)}
		</div>
	);
}
