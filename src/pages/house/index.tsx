import React, { FC } from "react";
import Banner from "../../components/house/banner";
import Info from "../../components/house/info";
import Lists from "../../components/house/lists";
import Footer from "../../components/house/footer";
import s from "./index.less";

export interface Props {}

const House: FC<Props> = (props) => {
  return (
    <div className={s.house_page}>
      <Banner />
      <Info />
      <Lists />
      <Footer />
    </div>
  );
};

export default House;
