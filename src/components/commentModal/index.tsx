import React, { FC } from "react";
import { Popup, TextArea, Button } from "antd-mobile";
import s from "./index.less";

export interface Props {
  visible: boolean;
  onClose: () => void;
}

const Modal: FC<Props> = (props) => {
  const { visible, onClose } = props;
  return (
    <Popup visible={visible} onClose={onClose} showCloseButton>
      <div className={s.modal}>
        <div className={s.modal_comment}>
          <div className={s.modal_textarea}>
            <TextArea
              placeholder={"请输入评论内容......"}
              showCount
              maxLength={200}
            />
          </div>
          <Button color="danger" block>
            评论
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default Modal;
