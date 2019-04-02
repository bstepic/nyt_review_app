import React, {Component} from 'react';
import ResultItem from "./ResultItem";
import NothingFound from "./NothingFound";
import axios from 'axios';

import {API_KEY} from "../../../helpers/Constants";
import LoadingMask from "../../LoadingMask";

class ResultsList extends Component {
    state = {
        by: '',
        searchData: null,
        loading: false
    };

    /**
     * Based on search data from local state, maps search data items or returns nothing found component
     * @return {*}
     */
    getResults = () => {
        const {searchData, by} = this.state;
        if (searchData.length) {
            const searchResults = searchData.map(
                (item, index) => {
                    return (
                        <ResultItem key={index}
                                    data={item}
                                    type={by}/>
                    );
                }
            );
            return (
                <div>
                    <small className="results-found">results found:{searchData.length}</small>
                    {searchResults}
                </div>
            )
        }
        else {
            return <NothingFound/>
        }
    };

    /**
     * Handles reloading of results list component, if it gets new props, reloads the component with new data
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState){
        if (this.state.searchData === prevState.searchData) {
            if (!this.state.loading) {
                this.setState({loading: true});
            }
            this.getSearchData();
        }
    }

    /**
     * Checking if there is any search data passed. If true, retrieves data from API
     */
    getSearchData = () => {
        const {searchTermData} = this.props;
        if (searchTermData) {
            this.searchTerm(searchTermData);
        }
    };

    /**
     * Async call to API, gets data based on search term data
     * @param searchTermData
     * @return {Promise<void>}
     */
    searchTerm = async (searchTermData) => {
        let {by, term} = searchTermData;
        if (by === 'author') {
            term = term.replace(/\s+/g, "%20");
        }
        const response = await axios.get(`reviews.json?${by}=${term}&api-key=${API_KEY}`);
        if (response.data) {
            this.getData(by, response.data.results);
        }
    };

    /**
     * Sets state with search data coming from the API call
     * @param by
     * @param searchData
     */
    getData = (by, searchData) => {
        this.setState({
            by,
            searchData,
            loading: false
        })
    };

    /**
     * Returns loading mask component
     * @return {*}
     */
    getLoadingMask = () => {
        return (
            <LoadingMask/>
        )
    };

    render(){
        let {searchData, loading} = this.state;
        return (
            <React.Fragment>
                {searchData && !loading ? this.getResults() : ''}
                {loading ? this.getLoadingMask() : ''}
            </React.Fragment>
        );
    }
}

export default ResultsList;
