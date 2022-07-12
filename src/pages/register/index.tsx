import { Button, Form, Input, Toast } from "antd-mobile";
import React, { FC } from "react";
import { useStoreHook } from "think-react-store";
import { history } from "umi";
import s from "./index.less";

export type Register = {
  username: string;
  password: string;
  password2: string;
};

export interface Props {}

const Register: FC<Props> = (props) => {
  const {
    user: { registerAsync },
  } = useStoreHook();
  const [form] = Form.useForm();
  const handleClick = () => {
    history.push("/login");
  };
  const onFinish = (val: Register) => {
    if (form.getFieldValue("password") !== form.getFieldValue("password2")) {
      Toast.show({ icon: "fail", content: "输入的密码和确认密码必须一致" });
      return;
    }
    registerAsync(val);
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
        form={form}
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
        <Form.Item
          name="password2"
          label="确认密码"
          rules={[
            {
              required: true,
              message: "密码不能为空",
            },
          ]}
        >
          <Input placeholder="请输入密码" />
        </Form.Item>
      </Form>
      <div className={s.login} onClick={handleClick}>
        没有账户，去注册
      </div>
    </div>
  );
};

export default Register;
