import { Outlet } from 'react-router-dom';
import { Layout, Space } from 'antd';

import './styles.scss';

export default function Layouts() {
	const { Header, Footer, Content } = Layout;

	// useEffect

	return (
		// <div>
		//   <h1 className="page-header">HEADER</h1>
		//   <Outlet />
		// </div>
		<Space
			direction="vertical"
			style={{ width: '100%', height: '100%' }}
			size={[100, 100]}
		>
			<Layout>
				<Header className="page-header">Header</Header>
				<Content>
					<Outlet />
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Space>
	);
}
