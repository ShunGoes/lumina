
export type UserType = Record<string, unknown> | null;

export interface Provider_Prop {
    children: React.ReactNode;
  }

interface EmailAndPasswordType{
  email: string, password: string
}

interface RegisterUserInfo {
  email: string,
  first_name: string,
  last_name: string,
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
      e: React.FormEvent<HTMLFormElement>
    ) => Promise<void>;
    handle_login_user: (e: React.FormEvent<HTMLFormElement>) => Promise<void> ,
    setLoginInfo: React.Dispatch<React.SetStateAction<EmailAndPasswordType>>,
  setRegisterInfo: React.Dispatch<React.SetStateAction<RegisterUserInfo>>,
  formError: null | {[key: string]: unknown},
  registerInfo: RegisterUserInfo,
  social_user: {
    name: string;
    email: string;
},
set_social_user: React.Dispatch<React.SetStateAction<{
  name: string;
  email: string;
}>>,
setFormError: React.Dispatch<React.SetStateAction<null>>,
handle_signin_with_social: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  }

  