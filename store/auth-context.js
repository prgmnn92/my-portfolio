import { createContext, useContext } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn: async () => {},
  signInWithGoogle: async () => {},
  createUser: async () => {},
  logout: async () => {},
});

const AuthProvider = ({ children }) => {
  const auth = useFirebaseAuth();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
};
export const useAuth = () => useContext(authUserContext);

export default AuthProvider;
