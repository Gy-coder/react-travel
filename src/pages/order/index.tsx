import { FC, useState } from "react";
import { Tabs } from "antd-mobile";
import { useHttpHook } from "@/hooks";
import { CommonEnum } from "@/enums";
import Lists from "../../components/order/lists";
import "./index.less";

interface Props {}

const User: FC<Props> = () => {
  const [page, setPage] = useState(CommonEnum.PAGE);
  const [orders] = useHttpHook({
    url: "/order/lists",
    body: {
      ...page,
    },
  });
  console.log(orders);
  return (
    <Tabs>
      <Tabs.Tab title="未支付" key="unpaid">
        <Lists orders={orders} type={0} />
      </Tabs.Tab>
      <Tabs.Tab title="已支付" key="paid">
        <Lists orders={orders} type={1} />
      </Tabs.Tab>
    </Tabs>
  );
};

export default User;
