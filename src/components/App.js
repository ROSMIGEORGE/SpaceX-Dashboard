import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import '../scss/style.scss';
import history from '../history';
import LoginPage from './LoginPage';

const App = () => {
    return(
        <div className="app">
            <Router history={history}>
                <Switch>
                    <Route path="/" component={LoginPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;