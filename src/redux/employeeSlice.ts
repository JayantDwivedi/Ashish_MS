import { createSlice } from '@reduxjs/toolkit';
import { addEmployee, employee } from 'services/employee';

export interface IEmployeeState {
	employeeData: any;
	isLoading: boolean;
	addEmp: any;
}

const initialState: IEmployeeState = {
	employeeData: [],
	isLoading: false,
	addEmp: [],
};

export const employeeSlice = createSlice({
	name: 'employee',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(employee.pending, state => {
			state.isLoading = false;
		});
		builder.addCase(employee.fulfilled, (state, action) => {
			state.isLoading = true;
			state.employeeData = action.payload;
		});
		builder.addCase(employee.rejected, state => {
			state.isLoading = false;
		});

		builder.addCase(addEmployee.pending, state => {
			state.isLoading = false;
		});
		builder.addCase(addEmployee.fulfilled, (state, action) => {
			state.isLoading = true;
			state.addEmp = action.payload;
		});
		builder.addCase(addEmployee.rejected, state => {
			state.isLoading = false;
		});
	},
});

export default employeeSlice.reducer;
