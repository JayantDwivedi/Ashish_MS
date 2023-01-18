import { toast } from 'react-hot-toast';

import { removeFromLocal } from './localStorage';

// eslint-disable-next-line import/prefer-default-export
export const stringAvatar = (name: string) => ({
	sx: {
		backgroundColor: 'grey',
	},
	children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
});

export const logout = () => {
	removeFromLocal('token');
	removeFromLocal('firstName');
	removeFromLocal('lastName');
	toast.success('You have logged out succesfully !');
};
