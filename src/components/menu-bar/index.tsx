import React, { FC, useState } from "react";
import { TabBar } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./index.less";

export interface Props {
  show?: boolean;
  pathname?: string;
}

const MenuBar: FC<Props> = (props) => {
  const { show = false, pathname = "" } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      title: "首页",
      icon: <AiFillHome />,
    },
    {
      key: "/order",
      title: "我的订单",
      icon: <AiOutlineShoppingCart />,
    },
    {
      key: "/user",
      title: "个人中心",
      icon: <AiOutlineUser />,
    },
  ];
  return (
    <div className="menu-bar">
      <TabBar activeKey={path} onChange={setRouteActive}>
        {tabs.map((item) => {
          return (
            <TabBar.Item key={item.key} title={item.title} icon={item.icon} />
          );
        })}
      </TabBar>
    </div>
  );
};

export default MenuBar;
