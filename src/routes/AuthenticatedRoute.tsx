import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/Auth/Auth';
import routes from '.';

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to={routes.SIGN_UP} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
