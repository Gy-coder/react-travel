import React, { FC } from "react";
import { Skeleton } from "antd-mobile";
import s from "./index.less";
import Item from "./item";
import { House } from "../home/hot";
import ShowLoading from "../ShowLoading";

type Order = House & {
  createTime: string;
};

export interface Props {
  orders?: Array<Order>;
  type: 0 | 1;
  showLoading?: boolean;
}

const Lists: FC<Props> = (props) => {
  const { orders, type, showLoading } = props;
  return (
    <div>
      {!orders || orders.length === 0 ? (
        <div className={s.tab_lists}>
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
        </div>
      ) : (
        <div className={s.tab_lists}>
          {orders!.map((item) => {
            return <Item type={type} key={item.id} {...item} />;
          })}
          <ShowLoading isLoading={showLoading} loadingId="mk-loading" />
        </div>
      )}
    </div>
  );
};

export default Lists;
