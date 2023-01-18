import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterSlice from './counterSlice';
import employeeSlice from './employeeSlice';
import loginSlice from './loginSlice';
import modalsSlice from './modalsSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		login: loginSlice,
		employee: employeeSlice,
		modals: modalsSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
