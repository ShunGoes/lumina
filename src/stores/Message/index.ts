import { action, makeObservable, observable } from "mobx";
import { RootStore } from "..";

export class MessageStore {
  activeChats: IChatSummary[] = [];
  activeChat: IChatSummary | null = null;
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        makeObservable(this, {
          activeChats: observable,
          activeChat: observable,

          startChat: action.bound,
          selectChat: action.bound,
        });
        this.rootStore = rootStore;
    }

    startChat(user: IExplore){
      const chat = this.activeChats.find(chat => chat.id === user.id);
      if(chat){
        this.activeChat = chat;
        return;
      }
      const newChat: IChatSummary = {
        id: user.id,
        name: user.name,
        picture: user.pictures[0].url,
        messages: [],
      }
      this.activeChats.push(newChat);
      this.activeChat = this.activeChats[this.activeChats.length - 1];
    }

    selectChat(chat: IChatSummary){
      this.rootStore.ExploreStore.toggleMainView('messages');
      this.activeChat = chat;
    }
}