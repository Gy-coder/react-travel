import React, { FC, useEffect, useRef, useState } from "react";
import { Divider, PageIndicator, SearchBar, Skeleton } from "antd-mobile";
import { useHttpHook, useObserverHook } from "@/hooks";
import s from "./index.less";
import { House } from "@/components/home/hot";

export interface Props {}

const Search: FC<Props> = (props) => {
  const [houseName, setHouseName] = useState("");
  const [page, setPage] = useState({
    pageSize: 8,
    pageNum: 1,
  });
  const [houseLists, setHouseLists] = useState<House[]>([]);
  const [loadingVisible, setLoadingVisible] = useState(true);
  const handleChange = (val: string) => setHouseName(val);
  const handleCancel = () => setHouseName("");
  const handleSearch = (val: string) => {};
  const [houses, loading] = useHttpHook({
    url: "/house/search",
    body: {
      ...page,
    },
    watch: [page.pageNum],
  });

  /**
   * 1，监听loading是否展示出来；
   * 2，修改分页数据；
   * 3，监听分页数据的修改，发送接口，请求下一页的数据；
   * 4，监听loading变化，拼装数据
   */

  useObserverHook("#loading", (entries) => {
    if (entries[0].isIntersecting && !loading) {
      setPage({
        ...page,
        pageNum: page.pageNum + 1,
      });
    }
  });

  useEffect(() => {
    if (!loading && houses) {
      if (houses.length) {
        setHouseLists([...houseLists, ...houses]);
        if (houses.length < page.pageSize) {
          setLoadingVisible(false);
        }
      } else {
        setLoadingVisible(false);
      }
    }
  }, [loading]);

  return (
    <div className={s.search_page}>
      {JSON.stringify(page)}
      <SearchBar
        style={{ "--background": "#ffffff", margin: "16px 8px" }}
        placeholder="请输入内容"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSearch={handleSearch}
      />
      {houseLists.length === 0 ? (
        <div style={{ margin: "16px 8px" }}>
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
          <Skeleton animated className={s.customSkeleton} />
        </div>
      ) : (
        <>
          <div className={s.search_result}>
            {houseLists.map((item: House) => {
              return (
                <div className={s.search_item} key={item.id}>
                  <img src={item.img} alt="" />
                  <div className={s.search_item_right}>
                    <div className={s.search_title}>{item.title}</div>
                    <div className={s.search_price}>¥{item.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {loadingVisible ? (
            <div className={s.loading} id="loading">
              loading
            </div>
          ) : (
            <div>没有数据了</div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
