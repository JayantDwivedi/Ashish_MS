import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#212B44',
			contrastText: '#fff',
		},
		secondary: {
			main: '#4F47A6',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 5,
				},
			},
		},
	},
});

export default theme;
