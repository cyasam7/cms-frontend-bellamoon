import React, { useEffect, useState, useCallback, useMemo } from "react";
import { getToken, setToken, deleteToken } from "../Helper/AuthHelper";
import Axios from "axios";
const Context = React.createContext();
export function AuthContext({ children }) {
  const [User, setUser] = useState("");
  const [Auth, setAuth] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      setLoading(true);
      if (!getToken()) {
        setAuth("");
        setUser("");
        setLoading(false);
        return;
      }
      try {
        const { data } = await Axios.get("/auth/whoami");
        console.log(data);
        setUser(data._id);
        setAuth(true);
      } catch (error) {
        setUser("");
        setToken("");
        setAuth(false);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);
  async function LogIn(email, password) {
    const { data } = await Axios({
      url: "/auth/sign-in",
      auth: {
        username: email,
        password,
      },
      method: "POST",
    });
    setUser(data.user._id);
    setAuth(true);
    setToken(data.token);
  }
  function LogOut() {
    deleteToken();
    setUser("");
    setAuth(false);
  }
  const value = useMemo(() => {
    return {
      LogIn,
      LogOut,
      Auth,
      Loading,
      User,
    };
  }, [Auth, Loading, User]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export const useAuth = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("Debe estar dentro del contexto Auth");
  }
  return context;
};
