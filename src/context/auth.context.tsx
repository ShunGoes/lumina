import { createContext, useState, useEffect, useCallback } from "react";

import { authenticate_user, sign_in_with_social } from "../utils/auth.helper";
import {
  Auth_Context_Type,
  UserType,
  Provider_Prop,
} from "../types/auth.context";
import {ImgType} from '../types/auth.context'


export const Auth_Context = createContext<Auth_Context_Type | null>(null);

export const Auth_Context_Provider = ({ children }: Provider_Prop) => {
  const [user, setUser] = useState<UserType>(null);
  const [formError, setFormError] = useState<null | {[key: string]: unknown} | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [social_user, set_social_user] = useState({
    firstName: "",
    email: "",
  });

  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    first_name: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    passion: new Set<string>(),
  });
  const [previewImage, setPreviewImage] = useState<ImgType[]>([
    { imgUrl: "", frame: "first_frame" },
    { imgUrl: "", frame: "second_frame" },
    { imgUrl: "", frame: "third_frame" },
    { imgUrl: "", frame: "fourth_frame" },
    { imgUrl: "", frame: "fifth_frame" },
    { imgUrl: "", frame: "sixth_frame" },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [show_login_modal, set_show_login_modal] = useState(false);



  const passion = Array.from(registerInfo.passion)
  // console.log(previewImage[0].imgUrl)

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("lumina-user") ;
  //   console.log(storedUser )
  //   if (typeof  storedUser !== undefined) {
  //     setUser(JSON.parse(storedUser));
  //     return
  //   } else {``
  //     setUser(storedUser);
  //   }
  // }, []);


  const handle_signin_with_social = async (
  ) => {

    setIsLoading(true);
    setFormError(null);

    const response = await sign_in_with_social(JSON.stringify(social_user));

    setIsLoading(false);

    if (response?.error) {
      return setFormError(response?.error);
    }
    return response

  };
  const register_user_details = {
    email: registerInfo.email,
    firstName: registerInfo.first_name,
    birthday: `${registerInfo.day}-${registerInfo.month}-${registerInfo.year}`,
    gender: registerInfo.gender,
    pic1: previewImage[0].imgUrl,
    pic2: previewImage[1].imgUrl,
    passions: [passion[0], passion[1],passion[2],passion[3]]
  }

  // this function submits the registered user form
  const handle_register_user = 
    async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();

      setIsLoading(true);
      setFormError(null);

      let response = await authenticate_user(JSON.stringify(register_user_details));

      setIsLoading(false);

      if (response?.error) {
        return setFormError(response?.error);
      }

      localStorage.setItem("lumina-user", JSON.stringify(response));
      setUser(response);
    }

  //   this function handles the login component submit button
  const handle_login_user = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      setFormError(null);

      let response = await authenticate_user( JSON.stringify(loginInfo));

      setIsLoading(false);

      if (response?.error) {
        return setFormError(response?.error);
      }

      localStorage.setItem("lumina-user", JSON.stringify(response));
      setUser(response);
    },
    []
  );

  useEffect(() => {
    async function auth_social_signup(){
     const response = await handle_signin_with_social()

     setUser(response)
    //  localStorage.setItem("lumina-user", JSON.stringify(response))
    }

    auth_social_signup()
  }, [social_user]
  )


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
    set_show_login_modal
  };

  return (
    <Auth_Context.Provider value={value}>{children}</Auth_Context.Provider>
  );
};
