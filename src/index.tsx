import './styles/main.scss';

import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import theme from 'utils/mui-theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<App />
				<Toaster position='top-right' toastOptions={{ duration: 5000 }} />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
