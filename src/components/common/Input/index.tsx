import { TextField, TextFieldProps } from '@mui/material';

const Input = ({ label, variant = 'outlined', ...props }: TextFieldProps) => (
	<TextField
		label={label}
		variant={variant}
		inputProps={{
			autoComplete: 'off',
			form: {
				autoComplete: 'off',
			},
		}}
		autoComplete='off'
		{...props}
	/>
);

export default Input;
