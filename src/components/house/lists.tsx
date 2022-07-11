import { timer } from "@/utils";
import React, { FC } from "react";
import ShowLoading from "../ShowLoading";
import s from "./index.less";

export interface Props {
  isLoading?: boolean;
  lists?: Array<any>;
  loadingId?: string;
}

const Lists: FC<Props> = (props) => {
  const { isLoading, lists, loadingId } = props;
  return (
    <div className={s.comment}>
      <h1>评论</h1>
      {lists?.map((item) => {
        return (
          <div className={s.comment_lists} key={item?.id}>
            <div className={s.comment_list_item}>
              <img src={item?.avatar} alt="user" className={s.comment_avatar} />
              <div className={s.comment_right}>
                <div className={s.comment_right_top}>
                  <p>{item?.username}</p>
                  <p>{timer(item?.createTime)}</p>
                </div>
                <div className={s.comment_right_bottom}>{item?.info}</div>
              </div>
            </div>
          </div>
        );
      })}
      <ShowLoading isLoading={isLoading} loadingId={loadingId} />
    </div>
  );
};

export default Lists;
