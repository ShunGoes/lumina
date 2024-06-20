import { computed, makeObservable } from "mobx";
import { RootStore } from "..";

export class AuthStore {

  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      isAuthenticated: computed,
    });
    this.rootStore = rootStore;
  }

  get isAuthenticated() {
    const user = localStorage.getItem("lumina-user");
    if (user) {
      return true;
    }
    return false;
  }
}