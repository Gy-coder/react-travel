import React, { FC, useState } from "react";
import AwesomeSwiper from "react-awesome-swiper";
import s from "./index.less";

export interface Props {
  banner?: string[];
}

const Banner: FC<Props> = (props) => {
  const {} = props;
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  return (
    <AwesomeSwiper className={s.banner} config={config}>
      <div className="swiper-wrapper">
        {props.banner?.map((item) => {
          return (
            <div className="swiper-slide" key={item + Math.random()}>
              <img src={item} alt="banner" width="100%" />
            </div>
          );
        })}
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
};

export default Banner;
