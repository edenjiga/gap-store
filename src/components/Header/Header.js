import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    const { changeSearchText } = this.props;
    changeSearchText(value);
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">Inicio</Link>
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Input
                type="text"
                name="searchField"
                placeholder="Search y brand"
                onChange={this.handleChange}
              />
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
