//@ts-ignore
import { useHttpHook } from "@/hooks";
import { FC } from "react";
import Header from "../components/home/header";
import Hot from "../components/home/hot";
import Search, { City } from "../components/home/search";

export interface Props {}

const Home: FC<Props> = (props) => {
  const [citys, citysLoading] = useHttpHook({
    url: "/commons/citys",
  });

  const [houses] = useHttpHook({
    url: "/house/hot",
  });

  return (
    <div>
      <Header />
      <Search
        citys={citys as City[][]}
        citysLoading={citysLoading as boolean}
      />
      <Hot houses={houses} />
    </div>
  );
};

export default Home;
