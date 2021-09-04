import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Pages} from '../Pages/Routes';
import configureStore from '../../redux/stores/configureStore';
import {createBrowserHistory} from "history";
import styles from './styles';
import {Global, css} from '@emotion/react';

const customHistory = createBrowserHistory();

const store = configureStore({});

export function App() {
    return (
        <>
            <Global styles={styles}/>
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
