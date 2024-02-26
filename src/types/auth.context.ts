
export type UserType = Record<string, unknown> | null;

export interface Provider_Prop {
    children: React.ReactNode;
  }
interface EmailAndPasswordType{
  email: string, password: string
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
  setRegisterInfo: React.Dispatch<React.SetStateAction<{
    fname: string;
  } & EmailAndPasswordType>>,
  formError: null | {[key: string]: unknown},
  registerInfo: {
    fname: string;
} & EmailAndPasswordType
  }