import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IModalsState {
	modals: any;
}

const initialState: IModalsState = {
	modals: {},
};

export const modalsSlice = createSlice({
	name: 'modals',
	initialState,
	reducers: {
		clearAllModalsState: state => {
			state.modals = {};
		},
		setModalState: (state, action: PayloadAction<any>) => {
			const { modalState } = action.payload;
			state.modals = { ...state, ...modalState };
		},
	},
});

export const { clearAllModalsState, setModalState } = modalsSlice.actions;

export default modalsSlice.reducer;
