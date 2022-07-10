import React, { FC } from "react";
import BlockButton from "../blockButton";
import s from "./index.less";

export interface Props {}

const Info: FC<Props> = (props) => {
  return (
    <div className={s.info}>
      <div className={s.info_title}>标题</div>
      <div className={s.info_msg}>简介</div>
      <div className={s.info_price}>价格</div>
      <div className={s.info_time}>发布时间</div>
      <div className={s.info_time}>开始时间</div>
      <div className={s.info_time}>结束时间</div>
      <BlockButton className={s.info_btn} color="danger">
        预定
      </BlockButton>
    </div>
  );
};

export default Info;
