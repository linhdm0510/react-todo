import { Modal, Button } from 'antd';
import './style.scss';

export const ModalProduct = ({ isEdit, isShow, handleSubmit, handleCancel, children }) => {
	return (
		<>
			<Modal
				title={isEdit ? 'Edit Product' : 'Create new Product'}
				open={isShow}
				onOk={() => handleSubmit()}
				onCancel={() => handleCancel()}
				footer={[
					<Button
						key="back"
						onClick={() => handleCancel()}
					>
						{isEdit ? 'Cancel' : 'Back'}
					</Button>,
					<Button
						key="submit"
						type="primary"
						onClick={() => handleSubmit()}
					>
						{isEdit ? 'Save' : 'Submit'}
					</Button>,
				]}
			>
				<div>{children}</div>
			</Modal>
		</>
	);
};
