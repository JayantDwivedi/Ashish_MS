import { createSlice } from '@reduxjs/toolkit';
import login from 'services/login';

export interface ILoginState {
	loginData: any;
	isLoading: boolean;
}

const initialState: ILoginState = {
	loginData: [],
	isLoading: false,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.isLoading = false;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = true;
			state.loginData = action.payload;
		});
		builder.addCase(login.rejected, state => {
			state.isLoading = false;
		});
	},
});

export default loginSlice.reducer;
