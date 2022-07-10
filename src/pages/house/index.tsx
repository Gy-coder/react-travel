import React, { FC, useEffect } from "react";
import Banner from "../../components/house/banner";
import Info from "../../components/house/info";
import Lists from "../../components/house/lists";
import Footer from "../../components/house/footer";
import { useStoreHook } from "think-react-store";
import s from "./index.less";

export interface Props {}

const House: FC<Props> = (props) => {
  const {
    house: { detail, getDetailAsync },
  } = useStoreHook();
  useEffect(() => {
    getDetailAsync({});
    console.log(detail);
  }, []);
  return (
    <div className={s.house_page}>
      <Banner banner={detail?.banner} />
      <Info info={detail?.info} />
      <Lists />
      <Footer />
    </div>
  );
};

export default House;
