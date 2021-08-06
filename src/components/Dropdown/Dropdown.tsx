import { Dropdown, DropdownButton } from "react-bootstrap";
import "./dropdown.scss";
const Dropdownn = () => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Dropdownn;
