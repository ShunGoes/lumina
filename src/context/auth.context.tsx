import { createContext, useState, useEffect, useCallback } from "react";

import {
  authenticate_user,
  sign_in_with_social,
  get_passions_array,
} from "../utils/auth.helper";
import {
  Auth_Context_Type,
  UserType,
  Provider_Prop,
} from "../types/auth.context";
import { ImgType } from "../types/auth.context";
import { useNavigate } from "react-router-dom";

export const Auth_Context = createContext<Auth_Context_Type | null>(null);

export const Auth_Context_Provider = ({ children }: Provider_Prop) => {
  const [user, setUser] = useState<UserType>(null);
  const [formError, setFormError] = useState<
    null | { [key: string]: unknown } | boolean
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [social_user, set_social_user] = useState({
    firstName: "",
    email: "",
  });

  const [registerInfo, setRegisterInfo] = useState<RegisterUserInfo>({
    email: "",
    first_name: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    password: "",
    passion: []
  });

  const [showModal, setShowModal] = useState(false);
  const [show_login_modal, set_show_login_modal] = useState(false);
  const [cloudinary_url, set_cloudinary_url] = useState<string[]>([]);
  const [signed_in_with_socials, set_signed_in_with_socials] = useState(true);

  const [PASSION_DATA, SET_PASSION_DATA] = useState<
    Record<string, string | number>[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch_passions = async () => {
      const { passions } = await get_passions_array()!;
      SET_PASSION_DATA(passions);
    };
    fetch_passions();

    const storedUser = localStorage.getItem("lumina-user");

    if (typeof storedUser === "string") {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("lumina-user");
    setUser(null);
    navigate("/");
  };

  const gender_to_lower_case = registerInfo.gender.toLowerCase();

  const social_register_details = {
    email: registerInfo.email,
    firstName: registerInfo.first_name,
    birthday: `${registerInfo.day}-${registerInfo.month}-${registerInfo.year}`,
    gender: gender_to_lower_case,
    pic1: cloudinary_url[0],
    pic2: cloudinary_url[1],
    passions: [1, 2, 3, 4],
  };

  const handle_signin_with_social = async () => {
    setIsLoading(true);
    setFormError(null);

    console.log("signing up with socials");
    const response = await sign_in_with_social(
      JSON.stringify(social_register_details),
      "auth-login"
    );
    console.log(response);
    setIsLoading(false);

    if (response?.error) {
      return setFormError(response?.error);
    }
    return response;
  };

  const register_user_details = {
    email: registerInfo.email,
    firstName: registerInfo.first_name,
    birthday: `${registerInfo.day}-${registerInfo.month}-${registerInfo.year}`,
    gender: gender_to_lower_case,
    pic1: cloudinary_url[0],
    pic2: cloudinary_url[1],
    password: registerInfo.password,
    passions: Array.from(registerInfo.passion),
    passwordConfirmation: registerInfo.password,
  };

  // this function submits the registered user form
  const handle_register_user = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("hiii");

    setIsLoading(true);
    setFormError(null);

    let response = await authenticate_user(
      JSON.stringify(register_user_details),
      "create-account"
    );
    console.log(response);

    setIsLoading(false);

    if (response?.error) {
      return setFormError(response?.error);
    }

    localStorage.setItem("lumina-user", JSON.stringify(response.user));
    setUser(response);
  };

  //   this function handles the login component submit button
  const handle_login_user = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      setFormError(null);

      let response = await authenticate_user(
        JSON.stringify(loginInfo),
        "sign-in"
      );

      setIsLoading(false);

      if (response?.error) {
        return setFormError(response?.error);
      }
      console.log(response);

      localStorage.setItem("lumina-user", JSON.stringify(response));
      setUser(response);
    },
    [loginInfo]
  );

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
    previewImage,
    setPreviewImage,
    showModal,
    setShowModal,
    show_login_modal,
    set_show_login_modal,
    set_cloudinary_url,
    cloudinary_url,
    logout,
    signed_in_with_socials,
    set_signed_in_with_socials,
    PASSION_DATA,
  };

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};
