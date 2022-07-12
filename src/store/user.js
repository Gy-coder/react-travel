import { Http } from "@/utils";
import { Toast } from "antd-mobile";
import { history } from "umi";
import { cookie, urlGet } from "project-libs";

export default {
  state: {
    id: undefined,
    username: undefined,
    avatar: undefined,
    tel: undefined,
    sign: undefined,
  },
  reducers: {
    getUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    editUser(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload) {
      const user = await Http({
        url: "/user/detail",
        body: payload,
      });
      if (user) {
        dispatch({
          type: "getUser",
          payload: user,
        });
      }
    },
    async editUserAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: "/user/edit",
        body: payload,
      });
      console.log(result);
      if (result) {
        Toast.show({ icon: "success", content: "编辑成功" });
        history.push("/user");
      }
    },
    async loginAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: "/user/login",
        body: payload,
      });
      if (result) {
        // console.log(urlGet('from'))
        cookie.set("user", result);
        history.push("/order");
        Toast.show({
          icon: "success",
          content: "登录成功",
        });
      }
    },
    async registerAsync(dispatch, rootState, payload) {
      const result = await Http({
        url: "/user/register",
        body: payload,
      });
      if (result) {
        cookie.set("user", result);
        Toast.show({ icon: "success", content: "注册成功" });
      }
    },
  },
};
