import * as React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useLocation, useHistory } from 'react-router-dom';
import './layout.scss';
import DevPortalHome from './../../Pages/DevportalHome';
import ApprovedSoftware from './../../Pages/ApprovedSoftware/ApprovedSoftware';
import PendingApproval from './../../Pages/PendingApproval/PendingApproval';

interface Props {
  children: React.ReactNode;
}
const Layout: React.FunctionComponent<Props> = (props: Props) => {
  const history = useHistory();
  const locator = history.location.pathname === '/login';
  console.log(locator);
  return (
    <>
      <div style={{ display: 'flex' }}>
        {locator ? null : <Sidebar />}
        {/* <Sidebar /> */}
        <DevPortalHome />
        {props.children}
      </div>
    </>
  );
};
interface ChildProps {}

const Dashboard: React.FC<ChildProps> = (props) => {
  const location = useLocation();

  const locator = location.pathname;

  const locationComponentFinder = (locator: string): any => {
    const component = [];
    if (locator === '/dev-home') {
      component.push(<DevPortalHome />);
    } else if (locator === '/approved-software') {
      component.push(<ApprovedSoftware />);
    } else if (locator === '/pending-approval') {
      component.push(<PendingApproval />);
    }
    return component;
  };

  return (
    <>
      <Layout>{locationComponentFinder(locator)} </Layout>
    </>
  );
};

export default Dashboard;
