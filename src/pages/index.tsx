import useHttpHook from "@/hooks/useHttpHook";
import { FC } from "react";
import Header from "../components/home/header";
import Hot from "../components/home/hot";
import Search from "../components/home/search";

export interface Props {}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <Header />
      <Search />
      <Hot />
    </div>
  );
};

export default Home;
