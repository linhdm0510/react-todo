import { Modal, message } from 'antd';
import './styles.scss';
import { useForm } from 'react-hook-form';
import FormInputText from '../../../../../components/Form/InputText';
import FormSelection from '../../../../../components/Form/Selection';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { productService } from '../../../products.service';

export default function FormModal(props) {
	const formSchema = yup.object({
		title: yup.string().max(255).required('Title is required'),
		category: yup.string().required('Category is required'),
	});
	const form = useForm({
		defaultValues: {
			title: '',
			category: '',
		},
		resolver: yupResolver(formSchema),
	});
	const [categoryOptions, setCategoryOptions] = useState([]);

	const title = props.productId ? 'Edit Product' : 'Create new Product';

	useEffect(() => {
		if (!props.isShow) return;
		const getCategoryOption = async () => {
			const response = await productService.getProductCategories();
			const categories = (response?.data || []).map((value) => ({ value, label: value }));
			setCategoryOptions(categories);
		};

		const getProductDetail = async () => {
			const response = await productService.getDetailProduct(props.productId);
			if (response.success) {
				const productDetail = response.data || {};
				form.setValue('title', productDetail.title || '');
				form.setValue('category', productDetail.category || '');
			} else {
				message.error('Product does not exist.');
				props.handleCancel();
			}
		};
		getCategoryOption();
		if (props.productId) {
			getProductDetail();
		}
	}, [props.isShow, props.productId]);

	const submit = async (data) => {
		const response = props.productId
			? await productService.updateProduct(props.productId, data)
			: await productService.addProduct(data);
		if (response?.success) {
			const successMessage = props.productId ? 'Update product successfully' : 'Add product successfully';
			message.success(successMessage);
			handleCancel();
			props.getListProduct();
		} else {
			message.error('Add product failed.');
		}
	};

	const handleCancel = () => {
		if (typeof props.handleCancel === 'function') {
			form.reset();
			props.handleCancel();
		}
	};
	return (
		<Modal
			title={title}
			open={props.isShow}
			onOk={form.handleSubmit(submit)}
			onCancel={handleCancel}
		>
			<FormInputText
				label="Title"
				name="title"
				placeholder="Please enter the title"
				form={form}
			/>
			<FormSelection
				label="Category"
				name="category"
				placeholder="Please enter the category"
				options={categoryOptions}
				form={form}
			/>
		</Modal>
	);
}
