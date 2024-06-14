"use client";
import React, { createContext, useContext } from "react";
import ExploreStore from "./Explore";

interface StoreProviderProps {
    children: React.ReactNode;
}

export class RootStore {
    ExploreStore: ExploreStore;
    constructor() {
        this.ExploreStore = new ExploreStore(this);
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
