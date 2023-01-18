import { Typography } from '@mui/material';
import { FC } from 'react';

interface IErrorMsg {
	message: string | undefined;
	error: boolean | undefined;
}
const ErrorMsg: FC<IErrorMsg> = ({ message = '', error = false }) => {
	if (error) {
		<Typography variant='caption' sx={{ color: 'red' }}>
			{message}
		</Typography>;
	}
	return null;
};

export default ErrorMsg;
