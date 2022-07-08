import { MenuBar } from "@/components";
import { Link, Outlet } from "umi";
import s from "./index.less";

export default function Layout() {
  return (
    <>
      <section className={s.wrapper}>
        <main className={s.main}>
          <Outlet />
        </main>
        <footer className={s.footer}>
          <MenuBar />
        </footer>
      </section>
    </>
  );
}
