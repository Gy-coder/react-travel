import React, { FC } from "react";
import { Link } from "umi";
import s from "./index.less";
import { cookie } from "project-libs";

export interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>民宿</div>
      <div className={s.header}>
        {/* @ts-ignore*/}
        {cookie.get("user") ? (
          /* @ts-ignore*/
          cookie.get("user")?.username
        ) : (
          <>
            <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
