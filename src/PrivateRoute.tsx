import { ReactChild, ReactChildren } from 'react';
import { Navigate } from 'react-router-dom';
// import { getFromLocal } from 'utils/localStorage';

export interface IPrivateRoute {
	children?: ReactChildren | ReactChild | any;
	isPrivate: boolean;
}
const PrivateRoute = ({ children, isPrivate }: IPrivateRoute) => {
	// const isTokenSaved = getFromLocal('token');
	const isTokenSaved = true;

	if (!isTokenSaved && isPrivate) {
		return <Navigate to='/' />;
	}
	return children;
};

PrivateRoute.defaultProps = {
	children: '',
};
export default PrivateRoute;
