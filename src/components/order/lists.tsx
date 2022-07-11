import React, { FC } from "react";
import { Skeleton } from "antd-mobile";
import s from "./index.less";
import Item from "./item";
import { House } from "../home/hot";

type Order = House & {
  createTime: string;
};

export interface Props {
  orders?: Array<Order>;
  type: 0 | 1;
}

const Lists: FC<Props> = (props) => {
  const { orders, type } = props;
  return (
    <div>
      {!orders || orders.length === 0 ? (
        <>
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
        </>
      ) : (
        <div className={s.tab_lists}>
          {orders!.map((item) => {
            return <Item type={type} key={item.id} {...item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Lists;
