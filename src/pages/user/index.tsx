import { List } from "antd-mobile";
import { FC, useEffect } from "react";
import { useStoreHook } from "think-react-store";
import { history } from "umi";
import s from "./index.less";

interface Props {}

const User: FC<Props> = () => {
  const {
    user: { username, avatar, tel, sign, getUserAsync },
  } = useStoreHook();
  const handleClick = () => {
    history.push({
      pathname: "/user/edit",
      search: `id=${10}`,
    });
  };
  useEffect(() => {
    getUserAsync({
      id: 10,
    });
  }, []);
  return (
    <div className={s.user_page}>
      {" "}
      {/**用户信息 */}
      <div className={s.user_info}>
        <div className={s.user_set} onClick={handleClick}>
          设置
        </div>
        <div className={s.user}>
          <img alt="user" src={avatar} />
          <div className={s.user_tel}>{tel}</div>
          <div className={s.user_sign}>{sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className={s.user_lists}>
        <List>
          <List.Item arrow>用户协议</List.Item>
          <List.Item arrow>常见问题</List.Item>
          <List.Item arrow>联系客服</List.Item>
        </List>
      </div>
    </div>
  );
};

export default User;
