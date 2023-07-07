import { Button, Popconfirm, Space } from 'antd';

export const getColumnsProduct = ({ handleEdit, handleDelete }) => [
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: 'Price',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: 'Rating',
		dataIndex: 'rating',
		key: 'rating',
	},
	{
		title: 'Discount percentage',
		dataIndex: 'discountPercentage',
		key: 'discountPercentage',
	},
	{
		title: '',
		dataIndex: 'action',
		key: 'action',
		render: (_, record) => (
			<Space size="small">
				<Button onClick={() => handleEdit(record)}>Edit</Button>
				<Popconfirm
					title="Delete the product"
					description="Are you sure to delete this product?"
					okText="Yes"
					onConfirm={() => handleDelete(record)}
					cancelText="No"
				>
					<Button danger>Delete</Button>
				</Popconfirm>
			</Space>
		),
	},
];

export const SPAN_DETAIL = {
	title: 10,
	content: 12,
	space: 2,
};
