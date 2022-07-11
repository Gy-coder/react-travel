import React, { FC, useState } from "react";
import s from "./index.less";
import { history } from "umi";
export interface Props {
  houses?: Array<House>;
}

export type House = {
  id: number;
  img?: string;
  title: string;
  info: string;
  price: number;
};

const Hot: FC<Props> = (props) => {
  const { houses } = props;
  const handleClick = (id: number) => {
    history.push({
      pathname: "/house",
      search: `id=${id}`,
    });
  };
  return (
    <div className={s.hot}>
      <h1>最热民宿</h1>
      <div className={s.hot_lists}>
        {houses?.map((item) => {
          return (
            <div
              className={s.hot_lists_item}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <img src={item.img} alt={item.img} className={s.img} />
              <div className={s.hot_title}>{item.title}</div>
              <div className={s.hot_info}>{item.info}</div>
              <div className={s.hot_price}>¥{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hot;
