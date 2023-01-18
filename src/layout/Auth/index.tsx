import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'row',
			background: 'linear-gradient(#778899, #000000)',
		}}
	>
		<Box
			sx={{
				width: { lg: '60%', md: '60%', xs: '0%' },
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<img src='/auth/login.png' alt='' width='100%' />
		</Box>
		<Box
			sx={{ width: { lg: '40%', md: '40%', xs: '100%' }, background: 'white' }}
		>
			<Outlet />
		</Box>
	</Box>
);

export default AuthLayout;
