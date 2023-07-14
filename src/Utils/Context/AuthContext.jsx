import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../Firebase/Firebase.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setcurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  async function login(email, pass) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate("/profile/info");
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
    setLoading(false);
  }
  async function signup(email, pass, name) {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, pass);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      await setDoc(doc(db, "Users", auth.currentUser.uid), {
        email,
        name,
        watchlist:[]
      });

      navigate("/profile/info");
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
    setLoading(false);
  }

  async function LogininWIthGoogle() {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);

      await setDoc(doc(db, "Users", auth.currentUser.uid), {
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      });

      navigate("/profile/info");
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    setLoading(false);
  }
  async function logout() {
    
    try {
      await signOut(auth);
      navigate("/login");
    } catch (e) {
      console.log(e.message)
      toast.error("Cannot Logout");
    }
  }

  async function resetPassword(email) {
    try {
      toast.promise(
        async () => {
          await sendPasswordResetEmail(auth, email);
        },
        {
          pending: "Sending Email",
          success: "Email Sent ",
          error: "Email Not Found",
        }
      );
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      setLoading(false);
    });

    return () => unSubscribe;
  }, [currentUser]);
  return (
    <AuthContext.Provider
      value={{
        loading,
        signup,
        LogininWIthGoogle,
        login,
        resetPassword,
        currentUser,
        logout
      }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
}
