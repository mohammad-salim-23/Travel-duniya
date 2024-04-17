import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import auth from "../firebase/firebase.config";
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser=(email,password) => {
      return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
      });
      return()=>{
        unSubscribe();
      }
    },[user])

  const authInfo = {
    user,
    createUser,
    signIn
    
  }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;