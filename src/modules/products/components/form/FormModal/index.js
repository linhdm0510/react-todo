import { Modal, Row } from 'antd';
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
	// getProductCategories

	const title = props.productId ? 'Edit Product' : 'Create new Product';

	useEffect(() => {
		const getCategoryOption = async () => {
			const response = await productService.getProductCategories();
			console.log('response', response);
			setCategoryOptions([]);
		};
		getCategoryOption();
	}, [props.isShow]);

	const submit = (data) => {
		console.log('data', data);
		console.log('form', form);
	};

	const handleCancel = () => {
		if (typeof props.handleCancel === 'function') {
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
