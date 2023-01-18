import { phoneRegExp } from 'constants/urls';
import * as Yup from 'yup';

export const loginValidator = Yup.object({
	email: Yup.string().email('Invalid email').required('Email required'),
	password: Yup.string()
		.required('Password required')
		.min(8, 'Password is too short - should be 8 characters minimum.'),
});

export const employeeValidator = Yup.object({
	firstName: Yup.string()
		.min(3, 'Please provide full name')
		.max(50, 'Please give a short name')
		.required('First name is required'),
	lastName: Yup.string()
		.min(3, 'Please provide full name')
		.max(50, 'Please give a short name')
		.required('Last Name is required'),
	contactMobileNumber: Yup.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required('Phone number is required'),
	email: Yup.string().email('Invalid email').required('Email required'),
});

export default loginValidator;
