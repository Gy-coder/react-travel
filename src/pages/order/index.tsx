import { FC, useEffect, useState } from "react";
import { Tabs } from "antd-mobile";
import { useHttpHook, useObserverHook } from "@/hooks";
import { CommonEnum } from "@/enums";
import Lists from "../../components/order/lists";
import "./index.less";
import { Http } from "@/utils";

interface Props {}

const User: FC<Props> = () => {
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders, setOrders] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(true);
  const [type, setType] = useState(0);

  const invokeHttp = async (pageNum: number) => {
    const result = await Http({
      url: "/order/lists",
      body: {
        ...page,
        pageNum,
        type,
      },
    });
    return result;
  };
  const fetchOrder = async (pageNum: number) => {
    const result: any = await invokeHttp(pageNum);
    if (result && result.length === page.pageSize) {
      setOrders(result);
      setShowLoading(true);
    } else {
      setShowLoading(false);
    }
  };

  useObserverHook("#" + CommonEnum.LOADING_ID, async (entries) => {
    console.log(entries);
    if (entries[0].isIntersecting) {
      const result: any = await invokeHttp(page.pageNum + 1);
      if (orders && result && result.length === page.pageSize) {
        setOrders([...orders, ...result]);
        setPage({
          ...page,
          pageNum: page.pageNum + 1,
        });
        setShowLoading(true);
      } else {
        setShowLoading(false);
      }
    }
  });

  useEffect(() => {
    fetchOrder(1);
  }, [type]);

  return (
    <Tabs>
      <Tabs.Tab title="未支付" key="unpaid">
        <Lists orders={orders} type={0} showLoading={showLoading} />
      </Tabs.Tab>
      <Tabs.Tab title="已支付" key="paid">
        <Lists orders={orders} type={1} showLoading={showLoading} />
      </Tabs.Tab>
    </Tabs>
  );
};

export default User;
