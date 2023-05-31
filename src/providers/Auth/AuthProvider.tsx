import axios from 'axios';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import env from '../../env';

interface UserInfo {
  email?: string | null;
  token?: string | null;
}

interface IAuthState extends UserInfo {
  isAuthenticated: boolean;
  signUp: (email: string, password: string, recaptchaValue?: string | null) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthState>({
  isAuthenticated: false,
  signUp: async () => {},
  login: async () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: sessionStorage.getItem('email'),
    token: sessionStorage.getItem('token'),
  });

  const signUp = (email: string, password: string, recaptchaValue?: string | null) =>
    axios
      .post(`${env.API_ENDPOINT}/auth/signup`, { email, password, recaptchaValue })
      .then(({ data }) => {
        setUserInfo({ email, token: data.access_token });
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('token', data.access_token);
      })
      .catch(() => console.log('[Signup] Failed to signup user'));

  const login = (email: string, password: string) =>
    axios
      .post(`${env.API_ENDPOINT}/auth/signin`, { email, password })
      .then(({ data }) => {
        setUserInfo({ email, token: data.access_token });
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('token', data.access_token);
      })
      .catch(() => console.log('[Login] Failed to signup user'));

  const authState: IAuthState = {
    ...userInfo,
    isAuthenticated: Boolean(userInfo.email) && Boolean(userInfo.token),
    signUp,
    login,
  };

  return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
