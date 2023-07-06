import { Button, Space } from 'antd';

export const COLUMS_PRODUCT = [
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
				<Button>Edit</Button>
			</Space>
		),
	},
];
