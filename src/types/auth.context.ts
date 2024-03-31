
export type UserType = Record<string, unknown> | null;

export interface Provider_Prop {
    children: React.ReactNode;
  }

export type ImgType = Record<string, string | ArrayBuffer | null>;

interface EmailAndPasswordType{
  email: string, password: string
}

interface RegisterUserInfo {
  email: string,
  first_name: string,
  day: string,
  month: string,
  year: string,
  gender: string,
  passion: Set<string>
}
export interface Auth_Context_Type {
    user: UserType,
    isLoading: boolean,
    loginInfo: EmailAndPasswordType,
    handle_register_user: (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => Promise<void>;
    handle_login_user: (e: React.FormEvent<HTMLFormElement>) => Promise<void> ,
    setLoginInfo: React.Dispatch<React.SetStateAction<EmailAndPasswordType>>,
  setRegisterInfo: React.Dispatch<React.SetStateAction<RegisterUserInfo>>,
  formError: null | boolean | {[key: string]: unknown},
  registerInfo: RegisterUserInfo,
  social_user: {
    firstName: string;
    email: string;
},
set_social_user: React.Dispatch<React.SetStateAction<{
  firstName: string;
  email: string;
}>>,
setFormError: React.Dispatch<React.SetStateAction<null | boolean | {[key: string]: unknown}>>,
handle_signin_with_social: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
 previewImage: ImgType[],
 setPreviewImage: React.Dispatch<React.SetStateAction<ImgType[]>>,
 showModal: boolean,
 setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
 show_login_modal: boolean,
 set_show_login_modal: React.Dispatch<React.SetStateAction<boolean>>,
}

  