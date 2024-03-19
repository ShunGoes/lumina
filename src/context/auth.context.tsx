import { createContext, useState, useEffect, useCallback } from "react";

import { authenticate_user, sign_in_with_social } from "../utils/auth.helper";
import {
  Auth_Context_Type,
  UserType,
  Provider_Prop,
} from "../types/auth.context";

export const Auth_Context = createContext<Auth_Context_Type | null>(null);

export const Auth_Context_Provider = ({ children }: Provider_Prop) => {
  const [user, setUser] = useState<UserType>(null);
  const [formError, setFormError] = useState<null | {[key: string]: unknown}>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [social_user, set_social_user] = useState({
    name: "",
    email: "",
  });

  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    passion: new Set<string>(),
  });

  useEffect(() => {
    const user = localStorage.getItem("Chatty");
    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }, []);

  const handle_signin_with_social = async (
  ) => {

    setIsLoading(true);
    setFormError(null);

    const response = await sign_in_with_social(JSON.stringify(social_user), "");

    setIsLoading(false);

    if (response?.error) {
      return setFormError(response?.error?.message);
    }
    console.log(response)
  };

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

  useEffect(() => {
    async function auth_social_signup(){
      await handle_signin_with_social()
    }

    auth_social_signup()
  }, [social_user])
  const value = {
    handle_register_user,
    handle_login_user,
    setLoginInfo,
    setRegisterInfo,
    isLoading,
    formError,
    user,
    registerInfo,
    loginInfo,
    social_user,
    set_social_user,
    handle_signin_with_social,
    setFormError,
  };

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};
