import React, {Component, Suspense } from 'react';
import { Redirect, Route, Switch,BrowserRouter } from 'react-router-dom';
import './App.css';
import routes from './routes';
import {Loader} from "./globalutilities/Loader"

const loading = () => <Loader/>;

class App extends Component{
    render() {
        return(
            <div>
                <BrowserRouter>
                <Suspense fallback={loading()}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => (
                                        <route.component {...props} />
                                    )}
                                 />
                            ) : null;
                        })}
                        <Redirect from="/" to="/" />
                    </Switch>
                </Suspense>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;
