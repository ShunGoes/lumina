interface RegisterUserInfo {
    email: string,
    name: string,
    day: string,
    month: string,
    year: string,
    gender: string,
    password?: string,
    interested_in: string[],
    passion: number[],
    pictures: string[],
    social_token?: string
  }
  interface IMeta {
    id: string;
    created_at: Date;
    updated_at: Date;
}

  interface ILogin{
    email: string; password?: string; social_token?: string;
  }

  interface ILoginresponse extends IMeta {
    token: string;
    email: string;
    name: string;
    is_email_verified: boolean;
}

interface ISignUp {
  name: string;
  email: string;
  password?: string;
  gender: string;
  passions: number[];
  interested_in: string[];
  pictures: string[];
  birthday: string;
  social_token?: string;
}

interface IOtp {
  otp: string;
}

interface IVerifyOtp extends IOtp {
  email: string;
}

interface IEmail {
  email: string;
}

interface IResetPassword {
  otp: string;
  email: string;
  password: string;
}

interface IPassion {
  id: number;
  name: string;
}

interface IPicture {
  id: string;
  url: string;
}

interface AuthContextType {
  isSignUpModalOpen: boolean;
  toggleSignUpModal: () => void;
  isLoginModalOpen: boolean;
  toggleLoginModal: () => void;
  isEmailModalOpen: boolean;
  toggleEmailModal: () => void;
  signUpWithEmail: (email: string) => void;
  registerInfo: RegisterUserInfo;
  signInWithSocial: (type: "google" | "facebook") => void;
  signUpWithGoogle: () => Promise<void>;
  signUpWithFacebook: () => Promise<void>;
  user: ILoginresponse | null;
  loginUser: (data: ILogin) => Promise<void>;
  passions: IPassion[];
  formError: string;
  signedInWithSocials: boolean;
  isLoading: boolean;
  registerUser: (
    data: RegisterUserInfo
  ) => Promise<void>;
  logout: () => void;
  verifiedEmail: boolean;
  closeVerifyEmailModal: () => void;
  loading: {
    resendOtp: boolean;
  },
  resendOtp: () => void;
  message: string;
}

interface IExplore {
  id: string;
  name: string;
  gender: string;
  age: string;
  interested_in: string[];
  pictures: IPicture[];
  passions: IPassion[];
}