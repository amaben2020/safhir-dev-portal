import "./sidebar.scss";
import dashboard from "./../../images/dashboard.svg";
import pending from "./../../images/pendin.svg";
import approved from "./../../images/approved.svg";
import unapproved from "./../../images/unapproved.svg";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const url = "/devportal-home";
  const url1 = "/approved-software";
  const url2 = "/pending-approval";
  const url3 = "/approved-software";

  const history = useHistory();

  const dashboardLink = () => {
    return history.push(url);
  };

  const newApprovedLink = () => {
    return history.push(url1);
  };

  const pendingApprovalLink = () => {
    return history.push(url2);
  };

  const ApprovedSWLink = () => {
    return history.push(url3);
  };

  return (
    <div className="sidebar">
      <nav className="sidebar__wrapper">
        <ul className="sidebar__wrapper-ul">
          <li
            onClick={dashboardLink}
            className="sidebar__wrapper-li border-bottom"
          >
            {" "}
            <img className="sidebar__wrapper-img" src={dashboard} alt="" />{" "}
            Dashboard{" "}
          </li>

          <h2 className="sidebar-h2">Applications</h2>

          <li onClick={newApprovedLink} className="sidebar__wrapper-li">
            {" "}
            <img
              className="sidebar__wrapper-img"
              src={unapproved}
              alt=""
            />{" "}
            New/Unapproved
          </li>
          <li onClick={pendingApprovalLink} className="sidebar__wrapper-li">
            {" "}
            <img className="sidebar__wrapper-img" src={pending} alt="" />{" "}
            Pending Approval
          </li>
          <li onClick={ApprovedSWLink} className="sidebar__wrapper-li">
            {" "}
            <img className="sidebar__wrapper-img" src={approved} alt="" />{" "}
            Approved
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
