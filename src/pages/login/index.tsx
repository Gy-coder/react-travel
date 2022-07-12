import { Button, Form, Input } from "antd-mobile";
import React, { FC } from "react";
import { useStoreHook } from "think-react-store";
import { history } from "umi";
import s from "./index.less";

export interface Props {}

export type User = {
  username: string;
  password: string;
};

const Login: FC<Props> = (props) => {
  const {
    user: { loginAsync },
  } = useStoreHook();

  const handleClick = () => {
    history.push("/register");
  };
  const onFinish = (val: User) => {
    loginAsync(val);
  };
  return (
    <div>
      <Form
        layout="horizontal"
        footer={
          <Button block type="submit" color="danger" size="large">
            提交
          </Button>
        }
        onFinish={onFinish}
      >
        <Form.Header>用户登陆</Form.Header>
        <Form.Item
          name="username"
          label="用户名"
          rules={[{ required: true, message: "用户名不能为空" }]}
        >
          <Input placeholder="请输用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: "密码不能为空" }]}
        >
          <Input placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div className={s.register} onClick={handleClick}>
        没有账户，去注册
      </div>
    </div>
  );
};

export default Login;
