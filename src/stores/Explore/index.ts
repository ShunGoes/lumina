import { action, flow, makeObservable, observable } from "mobx";
import { RootStore } from "..";
import client from "../../requests";
import { IError, errorFormater } from "../../utils/errorFormater";

class ExploreStore {
  users: IExplore[] = [];
  isLoading = {
    explore: false,
  }
  errors = {
    explore: '',
  }
  showModal = false;
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      users: observable,
      isLoading: observable,
      errors: observable,
      showModal: observable,

      explore: flow.bound,

      toggleModal: action.bound,
    });
    this.rootStore = rootStore;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  *explore() {
    this.isLoading.explore = true;
    try {
      const {data} = (yield client.get('explore')) as {data: IExplore[]};
      this.users = data;
    } catch (error) {
      console.log(error)
      this.errors.explore = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.explore = false;
    }
  }
}

export default ExploreStore;