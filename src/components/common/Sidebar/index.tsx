import { Dashboard } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const MenuItems: any[] = [
	{ id: 1, name: 'Dashboard', url: '/dashboard', icon: <Dashboard /> },
];

const Sidebar = () => {
	const route = useLocation();
	return (
		<Box
			sx={{
				background: '#212B44',
				height: '90vh',
				width: '20%',
				position: 'fixed',
				left: 0,
				top: '10vh',
				color: 'white',
			}}
		>
			{MenuItems?.map((item: any) => (
				// active wala
				<Link
					to={item?.url}
					style={{ color: 'white', textDecoration: 'none' }}
					key={item.id}
				>
					<Box
						sx={{
							display: 'flex',
							padding: '1rem 1.5rem',
							cursor: 'pointer',
							background: route?.pathname?.includes(item.url) ? '#00B593' : '',
							'&:hover': {
								backgroundColor: 'rgba(0,181,147,.6)',
							},
						}}
					>
						{item.icon}
						<Typography sx={{ marginLeft: '10px', fontSize: '16px' }}>
							{item.name}
						</Typography>
					</Box>
				</Link>
			))}
		</Box>
	);
};

export default Sidebar;
