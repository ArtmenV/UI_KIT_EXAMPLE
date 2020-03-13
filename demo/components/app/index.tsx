import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../header';
import MainPage from '../../pages/main';
import FormsPage from '../../pages/forms';
import ElementsPage from '../../pages/elements';
import OtherPage from '../../pages/other';

import 'assets/styles-general.less';
import './i18n';

export default (): JSX.Element => (
    <BrowserRouter>
        <Header />
        <Route
            path="/demo"
            exact
        >
            <MainPage />
        </Route>
        <Route
            path="/demo/elements"
            exact
        >
            <ElementsPage />
        </Route>
        <Route
            path="/demo/forms"
            exact
        >
            <FormsPage />
        </Route>
        <Route
            path="/demo/other"
            exact
        >
            <OtherPage />
        </Route>
    </BrowserRouter>
);
