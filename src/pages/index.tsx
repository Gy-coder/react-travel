//@ts-ignore
import { useHttpHook } from "@/hooks";
import { FC, useEffect } from "react";
import Header from "../components/home/header";
import Hot from "../components/home/hot";
import Search from "../components/home/search";

export interface Props {}

const Home: FC<Props> = (props) => {
  const [citys, citysLoading] = useHttpHook({
    url: "/commons/citys",
  });
  console.log("citys", citys, citysLoading);
  useEffect(() => {
    console.log("hooks");
  }, []);

  return (
    <div>
      <Header />
      <Search citys={citys} citysLoading={citysLoading} />
      <Hot />
    </div>
  );
};

export default Home;
