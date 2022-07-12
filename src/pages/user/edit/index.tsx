import { Button, ImageUploader, Input, List, Toast, Form } from "antd-mobile";
import React, { FC, useEffect, useState } from "react";
import { ImageUploadItem } from "antd-mobile/es/components/image-uploader";
import { useStoreHook } from "think-react-store";

export interface Props {
  form: any;
}

const Edit: FC<Props> = (props) => {
  const [fileList, setFileList] = useState<ImageUploadItem[]>([]);
  const {
    user: { editUserAsync },
  } = useStoreHook();
  const [form] = Form.useForm();
  const handleChange = (files: ImageUploadItem[]) => {
    console.log(files);
    setFileList(files);
  };

  const onFinishFailed = () => {
    Toast.show({ icon: "fail", content: "请填写全内容" });
  };
  const onFinish = (values: any) => {
    console.log(values);
    editUserAsync({
      img: values.img[0].url,
      tel: values.tel,
      sign: values.sign,
    });
  };
  function mockUpload(file: File): Promise<ImageUploadItem> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          url: URL.createObjectURL(file),
        });
      }, 3000);
    });
  }

  function beforeUpload(file: File) {
    if (file.size > 1024 * 1024) {
      Toast.show({ icon: "fail", content: "请选择小于 1M 的图片" });
      return null;
    }
    return file;
  }

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className="user-edit">
      <Form form={form} onFinishFailed={onFinishFailed} onFinish={onFinish}>
        <Form.Item
          name="img"
          label="上传头像"
          rules={[{ required: true }]}
          layout="horizontal"
        >
          <ImageUploader
            value={fileList}
            onChange={handleChange}
            upload={mockUpload}
            maxCount={1}
            preview
            beforeUpload={beforeUpload}
          />
        </Form.Item>

        <Form.Item
          name="tel"
          label="电话"
          rules={[{ required: true }]}
          layout="horizontal"
        >
          <Input placeholder="请输入电话号码" />
        </Form.Item>
        <Form.Item
          name="sign"
          label="签名"
          rules={[{ required: true }]}
          layout="horizontal"
        >
          <Input placeholder="请输入签名" />
        </Form.Item>
        <Button
          type="submit"
          color="warning"
          style={{ marginTop: "8px" }}
          block
        >
          修改
        </Button>
      </Form>
    </div>
  );
};

export default Edit;
