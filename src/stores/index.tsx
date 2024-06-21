"use client";
import React, { createContext, useContext } from "react";
import ExploreStore from "./Explore";
import { AuthStore } from "./Auth";
import { MessageStore } from "./Message";

interface StoreProviderProps {
    children: React.ReactNode;
}

export class RootStore {
    AuthStore: AuthStore;
    ExploreStore: ExploreStore;
    MessageStore: MessageStore;
    constructor() {
        this.AuthStore = new AuthStore(this);
        this.ExploreStore = new ExploreStore(this);
        this.MessageStore = new MessageStore(this);
    }
}

/**
 * ### Root Store Instance
 * This is the root store instance.
 * It is used to access all the stores.
 * and can be used to access the store properties outside of the component.
 */
export const Stores = new RootStore();

const StoreContext = createContext<RootStore>(Stores);

export const StoreProvider = ({ children }: StoreProviderProps) => (
    <StoreContext.Provider value={Stores}>{children}</StoreContext.Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => useContext(StoreContext);

export default StoreProvider;
