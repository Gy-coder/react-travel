import React, { FC, useEffect, useState } from "react";
import { SearchBar, Skeleton } from "antd-mobile";
import { useHttpHook, useObserverHook } from "@/hooks";
import { House } from "@/components/home/hot";
import { useLocation } from "umi";
import qs from "query-string";
import s from "./index.less";
import useImgHook from "@/hooks/useImgHook";
import { ShowLoading } from "@/components";

export interface Props {}

const Search: FC<Props> = (props) => {
  const { search } = useLocation();
  const { code, startTime, endTime } = qs.parse(search);
  const [houseName, setHouseName] = useState("");
  const [page, setPage] = useState({
    pageSize: 8,
    pageNum: 1,
  });
  const [houseLists, setHouseLists] = useState<House[]>([]);
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [houseSubmitName, setHouseSubmitName] = useState("");
  const handleChange = (val: string) => setHouseName(val);
  const handleCancel = () => {
    _handleSearch("");
  };
  const handleSearch = (val: string) => {
    _handleSearch(val);
  };
  const _handleSearch = (val: string) => {
    setHouseName(val);
    setHouseSubmitName(val);
    setPage({
      pageSize: 8,
      pageNum: 1,
    });
    setHouseLists([]);
  };
  const [houses, loading] = useHttpHook({
    url: "/house/search",
    body: {
      ...page,
      houseName,
      code,
      startTime,
      endTime,
    },
    watch: [page, houseSubmitName],
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

  useImgHook(".search_item_img", (entries) => {});

  return (
    <div className={s.search_page}>
      <SearchBar
        style={{ "--background": "#ffffff", margin: "16px 8px" }}
        placeholder="请输入内容"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSearch={handleSearch}
        showCancelButton
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
                  <img
                    src={require("../../assets/blank.png")}
                    alt=""
                    className="search_item_img"
                    data-src={item.img}
                  />
                  <div className={s.search_item_right}>
                    <div className={s.search_title}>{item.title}</div>
                    <div className={s.search_price}>¥{item.price}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {loadingVisible ? (
            <div className={s.loading} id="loading">
              loading
            </div>
          ) : (
            <div>没有数据了</div>
          )} */}
          <ShowLoading isLoading={loadingVisible} loadingId="loading" />
        </>
      )}
    </div>
  );
};

export default Search;
