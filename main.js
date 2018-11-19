import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import Layout from './Layout';
import Home from './Home.js';
import Error404 from './Error404';
import Policy from './webview/Policy.js';

import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from 'react-router-dom';

class Application extends React.Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                    <Switch>
                        <Route exact path="/" component={() => <Layout><Home/></Layout>}/>
                        <Route exact path="/policy" component={Policy}/>
                        <Route component={Error404} />
                    </Switch>
                </Router>
            </div>
        ); 
    }
}
render(<Application />, document.getElementById('app'));