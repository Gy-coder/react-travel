import React, { FC } from "react";
import BlockButton from "../blockButton";
import { timer } from "@/utils";
import s from "./index.less";

export type Detail = {
  title: string;
  msg: string;
  price: number;
  publishTime: number;
  startTime: number;
  endTime: number;
};

export interface Props {
  info: Detail;
}

const Info: FC<Props> = (props) => {
  const { info } = props;
  return (
    <div className={s.info}>
      <div className={s.info_title}>标题: {info?.title}</div>
      <div className={s.info_msg}>简介: {info?.msg}</div>
      <div className={s.info_price}>价格: {info?.price}</div>
      <div className={s.info_time}>
        发布时间: {timer(info?.publishTime, "")}
      </div>
      <div className={s.info_time}>开始时间: {timer(info?.startTime, "")}</div>
      <div className={s.info_time}>结束时间: {timer(info?.endTime, "")}</div>
      <BlockButton className={s.info_btn} color="danger">
        预定
      </BlockButton>
    </div>
  );
};

export default Info;
