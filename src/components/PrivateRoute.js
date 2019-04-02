import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => {
            let component = <Component {...props} />;

            // ask if any credentials have been set into localStorage.
            // If yes, let user user go to home page
            const credentials = localStorage.getItem('credentials');
            if (!credentials) {
                component = <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }
            return component;
        }}/>
    );
};
