import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'config/axiosInstance';
import { toast } from 'react-hot-toast';
import { adminLogin } from 'utils/apiEndpoints';
import { saveToLocal } from 'utils/localStorage';

const login = createAsyncThunk('login', async (payload: any) => {
	const { data } = payload;
	try {
		const res: any = await axiosInstance.post(adminLogin, data);
		if (res?.success) {
			saveToLocal('token', res?.data?.token);
			saveToLocal('firstName', res?.data?.firstName);
			saveToLocal('lastName', res?.data?.LastName);
			toast.success('You have successfully logged in!');
			return res?.data?.data;
		}
		throw res;
	} catch (error: any) {
		return error;
	}
});
export default login;
