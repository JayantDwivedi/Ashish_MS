import { Button as MuiButton, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

interface IButtonProps extends ButtonProps {
	children: ReactNode;
}

const Button = ({ children, sx = {}, ...props }: IButtonProps) => (
	<MuiButton
		sx={{ ...sx, minWidth: '124px', textTransform: 'capitalize' }}
		{...props}
	>
		{children}
	</MuiButton>
);

export default Button;
