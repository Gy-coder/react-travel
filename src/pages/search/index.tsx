import React, { FC, useEffect, useState } from "react";
import { SearchBar, Skeleton } from "antd-mobile";
import { useHttpHook } from "@/hooks";
import s from "./index.less";
import { House } from "@/components/home/hot";

export interface Props {}

const Search: FC<Props> = (props) => {
  const [houseName, setHouseName] = useState("");
  const handleChange = (val: string) => setHouseName(val);
  const handleCancel = () => setHouseName("");
  const handleSearch = (val: string) => {};
  const [houses, loading] = useHttpHook({
    url: "/house/search",
    body: {},
  });
  console.log(houses, loading);
  return (
    <div className={s.search_page}>
      <SearchBar
        style={{ "--background": "#ffffff", margin: "16px 8px" }}
        placeholder="请输入内容"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSearch={handleSearch}
      />
      {loading ? (
        <div style={{ margin: "16px 8px" }}>
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
        </div>
      ) : (
        <div className={s.search_result}>
          {houses.map((item: House) => {
            return (
              <div className={s.search_item}>
                <img src={item.img} alt="" />
                <div className={s.search_item_right}>
                  <div className={s.search_title}>{item.title}</div>
                  <div className={s.search_price}>¥{item.price}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
