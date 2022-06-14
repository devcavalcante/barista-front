import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';

type User = {
  email: string;
  name: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user?: User;
  isAuthenticated: boolean;
}

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
  sessionStorage.removeItem("@Barista-Token");
  sessionStorage.removeItem("@Barista-NameUser");
  sessionStorage.removeItem("@Barista-id");

}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>(); 
  const isAuthenticated = !!user;
  
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      })

      const { access_token, user} = response.data;

      sessionStorage.setItem("@Barista-Token", access_token);
      sessionStorage.setItem("@Barista-NameUser", user.name);
      sessionStorage.setItem("@Barista-id", user.id);
      
      setUser({
        email,
        name: user.name
      });

      return access_token;
  
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}