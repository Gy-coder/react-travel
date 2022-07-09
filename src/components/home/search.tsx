import React, { FC, useRef, useState } from "react";
import { Picker, List, Calendar, Button } from "antd-mobile";
import dayjs from "dayjs";
import s from "./index.less";

export type City = {
  value: string;
  label: string;
};

export interface Props {
  citys: City[][];
  citysLoading: boolean;
}

const Search: FC<Props> = (props) => {
  const { citys, citysLoading } = props;
  const [visiblePicker, setVisiblePicker] = useState<boolean>(false);
  const [visibleCalendar, setVisibleCalendar] = useState<boolean>(false);
  const [selectCity, setSelectedCity] = useState<string | undefined>();
  const [timers, setTimers] = useState<string | null>(null);
  const state = useRef(0);
  const openPicker = () => setVisiblePicker(true);
  const closePicker = () => setVisiblePicker(false);
  const clickCalendar = () => {
    state.current = 0;
    setVisibleCalendar(!visibleCalendar);
  };
  const chooseCity = (city: (string | null)[]) =>
    setSelectedCity(city[0] as string);
  const valuesList = citys[0].map((item) => item.value);

  const handleCalenderConfirm = (val: [Date, Date] | null) => {
    state.current += 1;
    if (state.current === 2) {
      setVisibleCalendar(false);
      val
        ? setTimers(
            dayjs(val[0]).format("YYYY-MM-DD") +
              "~" +
              dayjs(val[1]).format("YYYY-MM-DD")
          )
        : setTimers(null);
    }
  };
  const selectedValue =
    selectCity && valuesList.includes(selectCity)
      ? citys[0].filter((item) => item.value === selectCity)[0].label
      : null;
  return (
    <div className={s.search}>
      <div className={s.search_addr}>
        <div className={s.search_list_item}>
          <List>
            <List.Item onClick={openPicker} extra={selectedValue} arrow={false}>
              {selectCity && valuesList.includes(selectCity)
                ? "当前选择城市"
                : "请选择城市"}
            </List.Item>
          </List>
        </div>
        {!citysLoading && (
          <Picker
            columns={citys}
            visible={visiblePicker}
            onClose={closePicker}
            onConfirm={chooseCity}
          ></Picker>
        )}
      </div>
      <div className={s.search_time}>
        <div className={s.search_list_item}>
          <List>
            <List.Item
              onClick={clickCalendar}
              extra={timers || "选择时间"}
              arrow={false}
            >
              出租时间
            </List.Item>
          </List>
        </div>
      </div>
      <div className={s.button_wrapper}>
        <Button color="danger" size="large" block>
          搜索民宿
        </Button>
      </div>
      <Calendar
        style={{
          display: visibleCalendar ? "block" : "none",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          zIndex: 10,
          background: "white",
        }}
        selectionMode="range"
        onChange={handleCalenderConfirm}
      />
    </div>
  );
};

export default Search;
