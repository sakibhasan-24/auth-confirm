import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  //   const authValue = { name: "sakib" };
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const authValue = { user, createUser };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
