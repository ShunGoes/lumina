import { AxiosError } from "axios";

export type IError = AxiosError<{
  error: string;
  message: string | string[];
  statusCode: number;
}>

export const errorFormater = (error: IError) => {
  const errorArrayMessage =
  typeof error.response?.data.message === "string"
      ? error.response?.data.message
      : error.response?.data.message[0];

      return errorArrayMessage ?? "Something went wrong! Please try again.";
}