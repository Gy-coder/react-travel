import { CommonEnum } from "@/enums";
import { Http } from "@/utils";

export default {
  state: {
    detail: {},
    comments: [],
    page: CommonEnum.PAGE,
    showLoading: true,
    reloadCommentsNum: 0,
  },
  reducers: {
    getDetail(state: Object, payload: Object) {
      return { ...state, detail: payload };
    },
    getComment(state: Object, payload: Object) {
      return { ...state, comments: payload };
    },
    setShowLoading(state: Object, payload: Object) {
      return {
        ...state,
        showLoading: payload,
      };
    },
    reloadComments(state: any, payload: Object) {
      return {
        ...state,
        reloadCommentsNum: state.reloadCommentsNum + 1,
        page: {
          ...CommonEnum.PAGE,
          pageNum: state.page.pageNum + 1,
        },
      };
    },
    resetData(state: any, payload: any) {
      return {
        ...state,
        // detail: {},
        comments: [],
        page: CommonEnum.PAGE,
        showLoading: true,
        reloadCommentsNum: 0,
        ...payload,
      };
    },
  },
  effects: {
    async getDetailAsync(dispatch: any, state: any, payload: any) {
      const detail = await Http({
        url: "/house/detail",
        body: payload,
      });
      dispatch({
        type: "getDetail",
        payload: detail,
      });
    },
    async getCommentsAsync(dispatch: any, state: any, payload: any) {
      const { comments, page } = state.house;
      const lists: any = await Http({
        url: "/comments/lists",
        body: {
          ...payload,
          pageSize: page.pageSize,
          pageNum: page.pageNum,
        },
      });
      dispatch({
        type: "getComment",
        payload: [...comments, ...lists],
      });
      dispatch({
        type: "setShowLoading",
        payload: lists.length ? true : false,
      });
    },
    async addCommentsAsync(dispatch: any, state: any, payload: any) {
      const result = await Http({
        url: "/comments/add",
        body: payload,
      });
      if (result) {
        dispatch({
          type: "resetData",
          payload: {},
        });
      }
    },
  },
};
