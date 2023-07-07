import { Input } from 'antd';
import { Controller } from 'react-hook-form';
import './styles.scss';

export default function FormInputText(props) {
	const { form, name, label, placeholder } = props;
	const errorMessage = form?.formState?.errors?.[name]?.message || '';
	const status = errorMessage ? 'error' : undefined;
	return (
		<div className="input-text-group">
			<label className="input-text-group__label">{label}</label>
			<Controller
				control={form.control}
				name={name}
				render={({ field }) => (
					<Input
						{...field}
						status={status}
						placeholder={placeholder}
						className="input-text-group__body"
					/>
				)}
			/>
			<div className="error-message input-text-group__message">{errorMessage}</div>
		</div>
	);
}
