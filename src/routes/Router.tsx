import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Authenticate from '../modules/Authenticate';
import Home from '../modules/Home';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnAuthenticatedRoute from './UnAuthenticatedRoute';
import routes from '.';

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<AuthenticatedRoute />}>
        <Route path={routes.HOME} element={<Home />} />
      </Route>
      <Route path="/" element={<UnAuthenticatedRoute />}>
        <Route path={routes.LOGIN} element={<Authenticate isLogin />} />
        <Route path={routes.SIGN_UP} element={<Authenticate />} />
      </Route>
    </Routes>
  </HashRouter>
);
export default Router;
