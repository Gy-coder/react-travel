import React, { FC, useState } from "react";
import { CommentModal } from "@/components";
import { Toast } from "antd-mobile";
import { useStoreHook } from "think-react-store";
import s from "./index.less";

export interface Props {}

const Footer: FC<Props> = (props) => {
  const {
    house: { addCommentsAsync },
  } = useStoreHook();
  const [visible, setVisible] = useState(false);
  const [commentContent, setCommentContent] = useState("");
  const handleCommentContentChange = (val: string) => setCommentContent(val);
  const handleSubmit = () => {
    if (commentContent) {
      addCommentsAsync({
        comment: commentContent,
      });
      closeModal();
    } else {
      Toast.show({
        icon: "fail",
        content: "请输入评论内容",
      });
    }
  };
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  return (
    <>
      <div className={s.footer} onClick={openModal}>
        评论~
      </div>
      <CommentModal
        visible={visible}
        onClose={closeModal}
        commentContent={commentContent}
        onCommentContentChange={handleCommentContentChange}
        onConfirmClick={handleSubmit}
      />
    </>
  );
};

export default Footer;
