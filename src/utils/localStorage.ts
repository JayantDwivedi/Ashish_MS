export const saveToLocal = (key: string, value: any) => {
	if (typeof window === 'undefined') return;
	localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromLocal = (key: string) => {
	if (typeof window === 'undefined') return;
	localStorage.removeItem(key);
};

export const getFromLocal = (key: string) => {
	if (typeof window === 'undefined') return;
	const data = localStorage.getItem(key);
	if (data) {
		// eslint-disable-next-line consistent-return
		return JSON.parse(data);
	}
	// eslint-disable-next-line consistent-return
	return undefined;
};

export const saveUserToLocal = (data: any) => {
	const { firstName, lastName, mobile, email, language } = data;
	saveToLocal('user', { firstName, lastName, mobile, email, language });
};
export const getUserFromLocal = () => getFromLocal('token');
