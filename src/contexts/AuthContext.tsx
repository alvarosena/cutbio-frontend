import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
  avatar_url: string;
  username: string
  email: string,
}

interface Link {
  id: string;
  name: string;
  url: string;
}

interface SignCrendentials {
  email: string,
  password: string,
}

interface AuthContextData {
  signIn(credentials: SignCrendentials): Promise<void>;
  user: User,
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'cutbio.token': token } = parseCookies();
    const { 'cutbio.username': username } = parseCookies();
    const url = `/api/users/${username}`;

    if (token) {
      api.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => setUser(res.data[0]))

    }
  }, []);

  async function signIn({ email, password }: SignCrendentials) {
    try {
      const response = await api.post('/api/users/sessions/auth', {
        email,
        password
      })

      const { token } = response.data;
      const { username } = response.data.user;
      setCookie(undefined, 'cutbio.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      });

      setCookie(undefined, 'cutbio.username', username);


      window.location.href = '/profile';

    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}