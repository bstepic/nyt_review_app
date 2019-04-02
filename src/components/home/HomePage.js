import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Navigation from "./partials/Navigation";
import Search from "./partials/Search";
import ResultsList from "./partials/ResultsList";

class HomePage extends Component {
    state = {
        searchTermData: null
    };

    /**
     * On logout button click, clear local storage, redirect user to login page
     */
    logout = () => {
        localStorage.clear();
        this.props.history.push("/login");
    };

    /**
     * Get search term data from search component, pass it down to results list component
     * @param searchTermData
     */
    getSearchTerm = (searchTermData) => {
        this.setState({
            searchTermData
        })
    };

    render() {
        return (
            <div>
                <Navigation logout={this.logout}/>
                <Container className="home-page-container">
                    <Row>
                        <Col>
                            <Search getSearchTerm={this.getSearchTerm}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ResultsList searchTermData={this.state.searchTermData}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomePage;
