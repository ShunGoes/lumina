import { computed, flow, makeObservable, observable } from "mobx";
import { RootStore } from "..";
import { IError, errorFormater } from "../../utils/errorFormater";
import { verifyOtp } from "../../requests/auth";

export class AuthStore {
  verifySuccess = false;

  isLoading = {
    verifyEmail: false,
  }

  errors = {
    verifyEmail: "",
  }

  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      isLoading: observable,
      errors: observable,

      verifyEmail: flow.bound,

      isAuthenticated: computed,
    });
    this.rootStore = rootStore;
  }

  *verifyEmail({id, otp}: {id: string, otp: string}) {
    this.isLoading.verifyEmail = true;
    try {
      const {data} = (yield verifyOtp({id, otp})) as {data: ILoginresponse};
      localStorage.setItem("lumina-user", JSON.stringify(data));
      localStorage.setItem("lumina-token", data.token);
      this.verifySuccess = true;
    } catch (error) {
      this.errors.verifyEmail = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.verifyEmail = false;
    }
  }

  get isAuthenticated() {
    const user = localStorage.getItem("lumina-user");
    if (user) {
      return true;
    }
    return false;
  }
}