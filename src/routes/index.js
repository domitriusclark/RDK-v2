import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main/Main';
import Counter from '../components/Counter/Counter';
import IncrementForm from '../components/Counter/IncrementForm';

export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/counter" component={Counter} />
                        <Route path="/form" component={IncrementForm} />
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}