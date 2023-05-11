import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../modules/Home';
import SignUp from '../modules/SignUp';
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
        <Route path={routes.SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  </HashRouter>
);
export default Router;
