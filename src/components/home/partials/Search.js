import React, {Component} from 'react';
import {InputGroup} from "reactstrap";
import {Input} from "reactstrap";
import {InputGroupButtonDropdown} from "reactstrap";
import {DropdownToggle} from "reactstrap";
import {DropdownMenu} from "reactstrap";
import {DropdownItem} from "reactstrap";

class Search extends Component {
    state = {
        dropdownOpen: false,
        term: ''
    };

    /**
     * Handles search input changes, sets them into components state
     * @param e
     */
    handleChange = (e) => {
        this.setState({
            term: e.target.value,
        });
    };

    /**
     * Handles dropdown functionality of split button
     */
    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    /**
     * On click of author or title button, collects data from local state, sends them to parent component via props
     * @param e
     */
    onClickHandler = (e) => {
        const by = e.target.name;
        const {term} = this.state;
        if (term) {
            this.setState({
                term: '',
            });
            this.props.getSearchTerm({by, term});
        }
    };

    render() {
        const {term} = this.state;
        return (
            <InputGroup className="search-input">
                <Input
                    onChange={this.handleChange}
                    value={this.state.term}
                    placeholder="enter search term here"/>
                <InputGroupButtonDropdown
                    addonType="append"
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggleDropDown}>
                    <DropdownToggle caret outline color="info">
                        Search by...
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem
                            name="author"
                            disabled={!term}
                            onClick={this.onClickHandler}>
                            Author
                        </DropdownItem>
                        <DropdownItem
                            name="title"
                            disabled={!term}
                            onClick={this.onClickHandler}>
                            Title
                        </DropdownItem>
                    </DropdownMenu>
                </InputGroupButtonDropdown>
            </InputGroup>
        );
    }
}
export default Search;
