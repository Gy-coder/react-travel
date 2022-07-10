import React, { FC } from "react";
import { Button } from "antd-mobile";
import s from "./index.less";

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  onClick?: (e?: React.MouseEvent) => void;
  children?: React.ReactNode;
  className?: string;
}

const BlockButton: FC<Props> = (props) => {
  const { onClick, children, className } = props;
  return (
    <div className={s.button_wrapper}>
      <Button
        color="danger"
        size="large"
        block
        onClick={onClick}
        className={className}
      >
        {children}
      </Button>
    </div>
  );
};

export default BlockButton;
