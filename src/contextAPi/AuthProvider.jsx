import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase.config";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  //   const authValue = { name: "sakib" };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("No logged In user");
        return;
      }
      console.log("observe current user");
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authValue = { user, loading, createUser, userSignIn, logOut };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
