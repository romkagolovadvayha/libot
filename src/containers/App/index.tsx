import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Pages } from '../Pages/Routes';
import configureStore from '../../redux/stores/configureStore';
import { createBrowserHistory } from "history";
const customHistory = createBrowserHistory();

const store = configureStore({});

export function App() {
    return (
        <>
            <Provider store={store}>
                <Router history={customHistory}>
                    <Switch>
                        {Pages.map((page, index) => (
                            <Route
                                exact
                                path={page.link}
                                component={page.component}
                                key={page.code}
                            />
                        ))}
                    </Switch>
                </Router>
            </Provider>
        </>
    );
}
