import React, { useEffect, useState } from 'react';
import CmpLogin from '../components/login/CmpLogin';
import CmpLogout from '../components/login/CmpLogout';
import CmpNavBar from '../components/general/CmpNavBar';
import CmpNotFound from '../components/general/CmpNotFound';
import CmpInfoUserTable from '../components/info/CmpInfoUserTable';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path={'/login'} exact>
                    <CmpLogin />
                </Route>
                <Route path={'/info'} >
                    <CmpNavBar component={CmpInfoUserTable} />
                </Route>
                <Route path={'/more'}>
                    <CmpNavBar component={CmpNotFound} />
                </Route>
                <Route path={'/logout'}>
                    <CmpNavBar component={CmpLogout} />
                </Route>
                <Redirect to={'/info'} />
            </Switch>
        </Router>
    );
};

export default AppRouter;