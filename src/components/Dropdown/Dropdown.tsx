import { Dropdown, DropdownButton, Accordion } from "react-bootstrap";
import dashboard from "./../../images/dashboard.svg";
import unapproved from "./../../images/unapproved.svg";
import pending from "./../../images/pendin.svg";
import approved from "./../../images/approved.svg";

import { useHistory } from "react-router";
import "./dropdown.scss";
import { versions } from "process";
const Dropdownn = () => {
  const url = "/devportal-home";
  const url1 = "/approved-software";
  const url2 = "/pending-approval";
  const url3 = "/approved-software";

  const history = useHistory();
  const locator = history.location.pathname === "/login";

  const routerName =
    history.location.pathname === "/approved-software"
      ? "New/Unapproved"
      : history.location.pathname === "/pending-approval"
      ? "Pending Approval"
      : "Dashboard";

  const routerImg =
    history.location.pathname === "/approved-software"
      ? unapproved
      : history.location.pathname === "/pending-approval"
      ? pending
      : dashboard;

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
    <div className="dropDiv">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {" "}
            <div className="sidebar__wrapper-li">
              {" "}
              <img
                className="sidebar__wrapper-img img-width"
                src={routerImg}
                alt=""
              />{" "}
              {routerName}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <nav className="sidebar__wrapper to-left">
              <ul className="sidebar__wrapper-ul">
                <li
                  onClick={dashboardLink}
                  className="sidebar__wrapper-li border-bottom"
                >
                  {" "}
                  <img
                    className="sidebar__wrapper-img"
                    src={dashboard}
                    alt=""
                  />{" "}
                  Dashboard{" "}
                </li>

                <li onClick={newApprovedLink} className="sidebar__wrapper-li">
                  {" "}
                  <img
                    className="sidebar__wrapper-img"
                    src={unapproved}
                    alt=""
                  />{" "}
                  New/Unapproved
                </li>
                <li
                  onClick={pendingApprovalLink}
                  className="sidebar__wrapper-li"
                >
                  {" "}
                  <img
                    className="sidebar__wrapper-img"
                    src={pending}
                    alt=""
                  />{" "}
                  Pending Approval
                </li>
                <li onClick={ApprovedSWLink} className="sidebar__wrapper-li">
                  {" "}
                  <img
                    className="sidebar__wrapper-img"
                    src={approved}
                    alt=""
                  />{" "}
                  Approved
                </li>
              </ul>
            </nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Dropdownn;
