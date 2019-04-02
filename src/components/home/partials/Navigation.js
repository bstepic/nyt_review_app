import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


class Navigation extends Component {
    state = {
        isOpen: false,
        userInfo: JSON.parse(localStorage.getItem('credentials'))
    };

    /**
     * Handles dropdown functionality of split button
     */
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const {userInfo, isOpen} = this.state;
        return (
            <React.Fragment>
                <Navbar color="light" light expand="md" className="shadow-sm fixed-top">
                    <NavbarBrand>NYT Best Seller's Reviews</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {userInfo.user}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.props.logout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigation;
