import { AxiosResponse } from "axios";
import client from ".";

export const getPassions = (): Promise<AxiosResponse<IPassion[]>> => client.get("config/passions");