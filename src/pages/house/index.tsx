import React, { FC, useEffect } from "react";
import Banner from "../../components/house/banner";
import Info from "../../components/house/info";
import Lists from "../../components/house/lists";
import Footer from "../../components/house/footer";
import { useStoreHook } from "think-react-store";
import { useObserverHook } from "@/hooks";
import { CommonEnum } from "@/enums";
import { useLocation } from "umi";
import qs from "query-string";
import s from "./index.less";

export interface Props {}

const House: FC<Props> = (props) => {
  const { search } = useLocation();
  const { id } = qs.parse(search);
  const {
    house: {
      detail,
      getDetailAsync,
      getCommentsAsync,
      comments,
      reloadComments,
      reloadCommentsNum,
      showLoading,
      resetData,
    },
  } = useStoreHook();
  useEffect(() => {
    getDetailAsync({});
  }, []);
  useEffect(() => {
    getCommentsAsync({});
  }, [reloadCommentsNum]);
  useEffect(() => {
    return () => {
      resetData({
        detail: {},
      });
    };
  }, []);
  useObserverHook(
    "#" + CommonEnum.LOADING_ID,
    (entries) => {
      if (
        entries[0].isIntersecting &&
        comments &&
        comments.length &&
        showLoading
      ) {
        reloadComments();
      }
    },
    [comments, showLoading]
  );
  return (
    <div className={s.house_page}>
      <Banner banner={detail?.banner} />
      <Info info={detail?.info} />
      <Lists isLoading={showLoading} lists={comments} loadingId="mk-loading" />
      <Footer />
    </div>
  );
};

export default House;
