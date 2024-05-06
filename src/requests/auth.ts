import { AxiosResponse } from "axios";
import client from ".";


export const login = (data: ILogin): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/login", data);

export const signup = (
    data: ISignUp,
): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/register", data);

export const verifyOtp = (
    data: IVerifyOtp,
): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/verify", data);

export const resendOtp = (
    data: IEmail,
): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/resend-otp", data);

export const forgotPassword = (
    data: IEmail,
): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/forgot-password", data);

export const resetPassword = (
    data: IResetPassword,
): Promise<AxiosResponse<ILoginresponse>> =>
    client.post("auth/reset-password", data);

export const logUserOut = () => client.post("auth/logout");