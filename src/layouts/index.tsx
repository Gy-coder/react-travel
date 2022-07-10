import { MenuBar } from "@/components";
import { Link, Outlet } from "umi";
import { StoreProvider } from "think-react-store";
import * as store from "@/store";
import s from "./index.less";

export default function Layout() {
  return (
    <StoreProvider store={store}>
      <section className={s.wrapper}>
        <main className={s.main}>
          <Outlet />
        </main>
        <footer className={s.footer}>
          <MenuBar />
        </footer>
      </section>
    </StoreProvider>
  );
}
