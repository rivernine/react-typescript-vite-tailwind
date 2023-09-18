import RootStore from "../stores/Store";
import { StoreContext } from "../contexts/StoreContext";
import { ReactNode } from "react";

let store: RootStore;

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  store = store ?? new RootStore();
  return (
    <StoreContext.Provider value={store}> {children} </StoreContext.Provider>
  )
};