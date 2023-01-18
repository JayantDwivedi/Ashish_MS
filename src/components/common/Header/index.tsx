import { Avatar, Box, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { appUrls } from 'constants/urls';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, stringAvatar } from 'utils/helper';

const Header = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const navigate = useNavigate();
	// need to change this to the mouse event
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (input: string) => {
		if (input === 'profile') navigate(appUrls.profile);
		if (input === 'logout') {
			logout();
			navigate(appUrls.base);
		}
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				background: '#212B44',
				height: '10vh',
				position: 'fixed',
				top: 0,
				width: '100%',
				color: 'white',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				zIndex: 9,
			}}
		>
			<Box
				sx={{ width: '50px', marginLeft: '2%', cursor: 'pointer' }}
				onClick={() => navigate(appUrls.dashboard)}
			>
				Logo
			</Box>

			<Box sx={{ paddingRight: '2rem', display: 'flex' }}>
				<Stack sx={{ marginRight: '10px', textAlign: 'right' }}>
					<Typography>User Name</Typography>
					<Typography variant='caption'>Admin</Typography>
				</Stack>
				<Avatar
					{...stringAvatar('User Name')}
					onClick={handleClick}
					aria-hidden='true'
					sx={{ cursor: 'pointer' }}
				/>
				<Menu
					id='basic-menu'
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
				>
					<MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
				</Menu>
			</Box>
		</Box>
	);
};

export default Header;
