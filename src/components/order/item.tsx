import React, { FC } from "react";
import { Button } from "antd-mobile";
import { House } from "../home/hot";
import s from "./index.less";

export interface Props extends House {
  type: 0 | 1;
  createTime: string;
}

const Item: FC<Props> = (props) => {
  const { title, img, type, info, price, createTime } = props;
  const renderPay = () => {
    switch (type) {
      case 0:
        return (
          <Button color="warning" size="small">
            未支付
          </Button>
        );
      case 1:
        return <Button size="small">已支付</Button>;
    }
  };
  return (
    <div className={s.order_item}>
      <img src={img} alt="" />
      <div className={s.order_center}>
        <div className={s.order_title}>{title}</div>
        <div className={s.order_price}>{price}</div>
        <div className={s.order_time}>{createTime}</div>
      </div>
      <div className={s.order_pay}>{renderPay()}</div>
    </div>
  );
};

export default Item;
