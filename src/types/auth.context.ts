
export type UserType = Record<string, unknown> | null;

export interface Provider_Prop {
    children: React.ReactNode;
  }

export type ImgType = Record<string, string | ArrayBuffer | null>;

interface EmailAndPasswordType{
  email: string, password: string
}

export interface Auth_Context_Type {
    user: UserType,
    isLoading: boolean,
    loginInfo: EmailAndPasswordType,
    handle_register_user: (
      data: RegisterUserInfo
    ) => Promise<void>;
    handle_login_user: (e: React.FormEvent<HTMLFormElement>) => Promise<void> ,
    setLoginInfo: React.Dispatch<React.SetStateAction<EmailAndPasswordType>>,
    setRegisterInfo: React.Dispatch<React.SetStateAction<RegisterUserInfo>>,
    formError: string,
    registerInfo: RegisterUserInfo,
    social_user: {
      firstName: string;
      email: string;
    },
    set_social_user: React.Dispatch<React.SetStateAction<{
      firstName: string;
      email: string;
    }>>,
    setFormError: React.Dispatch<React.SetStateAction<string>>,
    handle_signin_with_social: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    show_login_modal: boolean,
    set_show_login_modal: React.Dispatch<React.SetStateAction<boolean>>,
    logout: () => void,
    signedInWithSocials: boolean,
    setSignedInWithSocials: React.Dispatch<React.SetStateAction<boolean>>,
    PASSION_DATA: Record<string, number>[]
}

  