import { Http } from "@/utils";

export default {
  state: {
    detail: {},
    comments: [],
  },
  reducers: {
    getDetail(state: Object, payload: Object) {
      return { ...state, detail: payload };
    },
  },
  effects: {
    async getDetailAsync(dispatch: any, state: any, payload: any) {
      const detail = await Http({
        url: "/house/detail",
        body: payload,
      });
      console.log("store detail", detail);
      dispatch({
        type: "getDetail",
        payload: detail,
      });
    },
  },
};
