import HomeStore from "./HomeStore";

export default class RootStore {
  homeStore: HomeStore;
  
  constructor() {
    this.homeStore = new HomeStore(this);
  }
}