import { Avatar, Col, Drawer, Row } from 'antd';
import { StarTwoTone } from '@ant-design/icons';
import { SPAN_DETAIL as span } from '../../../product.constant';
import './styles.scss';
export const DetailProduct = ({ isShow, onClose, data }) => {
	return (
		<div className="drawer-detail">
			<Drawer
				title="Product Details"
				placement="right"
				closable={false}
				onClose={() => onClose()}
				open={isShow}
			>
				<div className="image-detail">
					<Avatar
						size={50}
						src={data.img_default}
					></Avatar>
				</div>
				<Row>
					<Col span={span.title}>Title:</Col>
					<Col
						span={span.content}
						offset={span.space}
					>
						{data.title}
					</Col>
				</Row>
				<Row>
					<Col span={span.title}>Price:</Col>
					<Col
						span={span.content}
						offset={span.space}
					>
						{data.price}
					</Col>
				</Row>
				<Row>
					<Col span={span.title}>Rating:</Col>
					<Col
						span={span.content}
						offset={span.space}
					>
						{data.rating} <StarTwoTone twoToneColor="#eb2f96" />
					</Col>
				</Row>
				<Row>
					<Col span={span.title}>Discount percentage:</Col>
					<Col
						span={span.content}
						offset={span.space}
					>
						{data.discountPercentage}%
					</Col>
				</Row>
				<Row>
					<Col span={span.title}>Description:</Col>
					<Col
						span={span.content}
						offset={span.space}
					>
						{data.description}%
					</Col>
				</Row>
			</Drawer>
		</div>
	);
};
