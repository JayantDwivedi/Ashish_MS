import Header from 'components/common/Header';
import Sidebar from 'components/common/Sidebar';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => (
	<>
		<Header />
		<div>
			<Sidebar />
			<Outlet />
		</div>
	</>
);

export default CommonLayout;
