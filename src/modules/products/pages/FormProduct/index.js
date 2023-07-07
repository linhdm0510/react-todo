import { Col, Form, Row } from 'antd';
import './styles.scss';
export const FormProduct = () => {
	return (
		<>
			<Form>
				<Row>
					<Col span={6}>img</Col>
					<Col span={2}></Col>
					<Col span={16}>form</Col>
				</Row>
			</Form>
		</>
	);
};
