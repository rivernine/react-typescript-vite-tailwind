import baseService from "./baseService";

const homeService = {
  fetchSample: async () => {
    const resp = await baseService.fetch<any>("/coins");
    return resp;
  },
}

export default homeService;