import {
  observable,
  action,
  makeObservable,
  runInAction,
  computed,
  toJS,
} from "mobx";
import RootStore from "./Store";
import homeService from "../services/homeService";
export default class HomeStore {
  rootStore: RootStore;
  initializing: boolean = false;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      initializing: observable,

      init: action,

      // openSelectNodeModal: action.bound,
    });
  }

  async fetch() {
    if (!this.initializing) {
      runInAction(() => {
        this.initializing = true;
      });
      await Promise.all([
        this.fetchSample(),
      ])
      runInAction(() => {
        this.initializing = false;
      })
    }
  }

  async fetchSample() {
    const result = await homeService.fetchSample();
    if (result) {
      runInAction(() => {
       
      })
    }
  }

  init = async () => {
    await this.fetch();
  }

}