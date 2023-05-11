import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../providers/Auth/Auth';
import routes from '.';

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to={routes.HOME} />;

  return <Outlet />;
};

export default AuthenticatedRoute;
