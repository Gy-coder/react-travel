import React, { FC } from "react";
import { Popup, TextArea, Button } from "antd-mobile";
import s from "./index.less";

export interface Props {
  visible: boolean;
  onClose: () => void;
  onConfirmClick?: () => void;
  commentContent?: string;
  onCommentContentChange?: (val: string) => void;
}

const Modal: FC<Props> = (props) => {
  const {
    visible,
    onClose,
    onConfirmClick,
    commentContent,
    onCommentContentChange,
  } = props;
  return (
    <Popup visible={visible} onClose={onClose} showCloseButton>
      <div className={s.modal}>
        <div className={s.modal_comment}>
          <div className={s.modal_textarea}>
            <TextArea
              placeholder={"请输入评论内容......"}
              value={commentContent}
              onChange={onCommentContentChange}
              showCount
              maxLength={200}
            />
          </div>
          <Button color="danger" block onClick={onConfirmClick}>
            评论
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
