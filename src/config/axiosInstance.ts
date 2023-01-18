import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
axiosInstance.interceptors.request.use(
	config => config,
	err => Promise.reject(err)
);
axiosInstance.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error)
);

export const axiosInstanceEmployee = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL_EMP,
	headers: {
		'Content-Type': 'application/json',
	},
});
axiosInstanceEmployee.interceptors.request.use(
	config => config,
	err => Promise.reject(err)
);
axiosInstanceEmployee.interceptors.response.use(
	response => response.data,
	error => Promise.reject(error)
);
