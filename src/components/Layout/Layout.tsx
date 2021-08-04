import * as React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import './layout.scss' 
import DevPortalHome from './../../Pages/DevportalHome'

interface Props {
	children: React.ReactNode;
	// toggleShowSidebar: () => void;
	// showSidebar: boolean;
}
const Layout: React.FunctionComponent<Props> = (props: Props) => {
	return (
		<>
			<div style={{ display: 'flex' }}>
                <Sidebar   />
                <DevPortalHome/>
				{props.children}
			</div>
		</>
	);
};
interface ChildProps {
	// toggleShowSidebar: () => void;
	// showSidebar: boolean;
}

const Dashboard: React.FC<ChildProps> = (props) => {
	const location = useLocation();

	const locator = location.pathname;

	const locationComponentFinder = (locator: string): any => {
		const component = [];
		if (locator === '/dev-home') {
			component.push(<DevPortalHome/>);
		}
		return component;
	};

	return (
		<>
			<Layout 
			 
			>
				{locationComponentFinder(locator)}{' '}
			</Layout>
		</>
	);
};

export default Dashboard;
