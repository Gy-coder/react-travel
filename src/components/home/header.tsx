import React, { FC } from "react";
import { Link } from "umi";
import s from "./index.less";

export interface Props {}

const Header: FC<Props> = (props) => {
  return (
    <div className={s.header}>
      <div className={s.header_title}>民宿</div>
      <div className={s.header}>
        <Link to="/login">登陆</Link> | <Link to="/register">注册</Link>
      </div>
    </div>
  );
};

export default Header;
