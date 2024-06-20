import { action, flow, makeObservable, observable } from "mobx";
import { RootStore } from "..";
import client from "../../requests";
import { IError, errorFormater } from "../../utils/errorFormater";

class ExploreStore {
  users: IExplore[] = [];
  user: IExplore | null = null;
  matchedUserId = '';
  selectedUserId = '';
  matches: IExplore[] = [];
  activeSideBar = 'matches';
  mainView = 'explore'
  isLoading = {
    explore: false,
    like: false,
    dislike: false,
    getMatches: false,
    getUser: false,
  }
  errors = {
    explore: '',
    like: '',
    dislike: '',
    getMatches: '',
    getUser: '',
  }
  showMatchModal = true;
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    makeObservable(this, {
      users: observable,
      matchedUserId: observable,
      matches: observable,
      selectedUserId: observable,
      user: observable,
      activeSideBar: observable,
      mainView: observable,

      isLoading: observable,
      errors: observable,
      showMatchModal: observable,

      explore: flow.bound,
      like: flow.bound,
      dislike: flow.bound,
      getMatches: flow.bound,
      getUser: flow.bound,

      toggleMatchModal: action.bound,
      toggleSideBar: action.bound,
      toggleMainView: action.bound,
    });
    this.rootStore = rootStore;
  }

  toggleMatchModal() {
    this.showMatchModal = !this.showMatchModal;
  }

  toggleSideBar(sideBar: "explore" | "matches" | "messages") {
    this.activeSideBar = sideBar;
  }

  toggleMainView(view: "explore" | "messages") {
    this.mainView = view;
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

  *like(id: string) {
    this.isLoading.like = true;
    try {
      const { data } = (yield client.post(`explore/like/${id}`)) as { data: {
        match: boolean;
      }};
      if (data.match) {
        this.matchedUserId = id;
        this.toggleMatchModal();
      } else {
      this.users = this.users.filter(user => user.id !== id);
      }
    } catch (error) {
      this.errors.like = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.like = false;
    }
  }

  *dislike(id: string) {
    this.isLoading.dislike = true;
    try {
      yield client.post(`explore/dislike/${id}`);
      this.users = this.users.filter(user => user.id !== id);
    } catch (error) {
      this.errors.dislike = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.dislike = false;
    }
  }

  *getMatches() {
    this.isLoading.getMatches = true;
    try {
      const { data } = (yield client.get('explore/matches')) as { data: IExplore[]};
      this.matches = data;
    } catch (error) {
      this.errors.getMatches = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.getMatches = false;
    }
  }

  *getUser(id: string) {
    this.isLoading.getUser = true;
    try {
      const { data } = (yield client.get(`user/${id}`)) as { data: IExplore};
      this.user = data;
    } catch (error) {
      this.errors.getUser = errorFormater(error as unknown as IError);
    } finally {
      this.isLoading.getUser = false;
    }
  }


}

export default ExploreStore;