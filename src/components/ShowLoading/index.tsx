import React, { FC } from "react";
import s from "./index.less";

export interface Props {
  isLoading?: boolean;
  loadingId?: string;
}

const ShowLoading: FC<Props> = (props) => {
  const { isLoading = true, loadingId } = props;
  return (
    <>
      {isLoading ? (
        <div className={s.text} id={loadingId}>
          Loading......
        </div>
      ) : (
        <div className={s.text}>没有数据了</div>
      )}
    </>
  );
};

export default ShowLoading;
