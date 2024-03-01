import { createContext, useState, useEffect, useCallback } from "react";

import { authenticate_user } from "../utils/auth.helper";
import { Auth_Context_Type, UserType, Provider_Prop } from "../types/auth.context";




export const Auth_Context = createContext<Auth_Context_Type | null>(null);

export const Auth_Context_Provider = ({ children }: Provider_Prop) => {
  const [user, setUser] = useState<UserType>(null);
  const [formError, setFormError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    day: "",
    month: "",
    year: "",
    gender: ""

  });

  useEffect(() => {
    const user = localStorage.getItem("Chatty");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }, []);


  // this function submits the registered user form
  const handle_register_user = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      setFormError(null);

      let response = await authenticate_user("/", JSON.stringify(registerInfo));

      setIsLoading(false);

      if (response?.error) {
        return setFormError(response?.error?.message);
      }

      localStorage.setItem("Chatty", JSON.stringify(response));
      setUser(response);
    },
    [registerInfo]
  );

//   this function handles the login component submit button
  const handle_login_user = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      setFormError(null);

      let response = await authenticate_user("/", JSON.stringify(loginInfo));

      setIsLoading(false);

      if (response?.error) {
        return setFormError(response?.error?.message);
      }

      localStorage.setItem("Chatty", JSON.stringify(response));
      setUser(response);
    },
    []
  );

  const value = { handle_register_user, handle_login_user, setLoginInfo,setRegisterInfo,isLoading, formError,user,registerInfo,loginInfo};

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};
