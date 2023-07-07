import { Select } from 'antd';
import { Controller } from 'react-hook-form';
import './styles.scss';

export default function FormSelection(props) {
	const { form, name, label, placeholder, options } = props;
	const errorMessage = form?.formState?.errors?.[name]?.message || '';
	const status = errorMessage ? 'error' : undefined;
	return (
		<div className="selection-group">
			<label className="selection-group__label">{label}</label>
			<Controller
				control={form.control}
				name={name}
				render={({ field }) => (
					<Select
						{...field}
						status={status}
						placeholder={placeholder}
						className="selection-group__body"
						options={options || []}
					/>
				)}
			/>
			<div className="error-message selection-group__message">{errorMessage}</div>
		</div>
	);
}
