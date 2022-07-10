import React, { FC, useState } from "react";
import { CommentModal } from "@/components";
import s from "./index.less";

export interface Props {}

const Footer: FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  return (
    <>
      <div className={s.footer} onClick={openModal}>
        评论~
      </div>
      <CommentModal visible={visible} onClose={closeModal} />
    </>
  );
};

export default Footer;
