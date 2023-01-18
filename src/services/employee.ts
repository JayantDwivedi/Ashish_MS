import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstanceEmployee } from 'config/axiosInstance';
import { addEmployeeUrl, getEmployeesUrl } from 'utils/apiEndpoints';

export const employee = createAsyncThunk('employee', async () => {
	try {
		const res: any = await axiosInstanceEmployee.get(getEmployeesUrl);
		if (res?.success) {
			return res?.data;
		}
		throw res;
	} catch (error: any) {
		return error;
	}
});

export const addEmployee = createAsyncThunk(
	'addEmployee',
	async (payload: any) => {
		try {
			const { data } = payload;
			const res: any = await axiosInstanceEmployee.post(addEmployeeUrl, data);
			if (res?.success) {
				return res?.data;
			}
			throw res;
		} catch (error: any) {
			return error;
		}
	}
);
