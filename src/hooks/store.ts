import { useContext } from "react"
import { StoreContext } from "../contexts/StoreContext";

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}