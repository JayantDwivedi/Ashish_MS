import { Dashboard } from '@mui/icons-material';
import { appUrls } from 'constants/urls';
import AuthLayout from 'layout/Auth';
import CommonLayout from 'layout/Common';
import Login from 'views/auth/Login';
import SignUp from 'views/auth/Signup';

//  make a route constant file move all constant over there
const routes = [
	{
		layout: AuthLayout,
		path: '',
		isPrivate: false,
		children: [
			{
				component: Login,
				path: appUrls.base,
				isPrivate: false,
			},
			{
				component: SignUp,
				path: appUrls.signup,
				isPrivate: false,
			},
		],
	},
	{
		layout: CommonLayout,
		path: '',
		isPrivate: true,
		children: [
			{
				component: Dashboard,
				path: appUrls.dashboard,
				isPrivate: true,
			},
		],
	},
];

export default routes;
