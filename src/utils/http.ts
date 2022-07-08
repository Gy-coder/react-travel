import { Toast } from "antd-mobile";
import { IncomingHttpHeaders } from "http";

interface Type {
  url: string;
  method: "get" | "post" | "put" | "delete";
  headers: IncomingHttpHeaders;
  body: Object;
  setLoading: Function;
  setResult: Function;
}

export default function Http({
  url,
  method = "post",
  headers,
  body = {},
  setLoading,
  setResult,
}: Type) {
  setLoading && setLoading(true);

  const defaultHeader = {
    "Content-type": "application/json",
  };

  let params: Object | undefined;
  if (method.toUpperCase() === "GET") {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }

  return new Promise((resolve, reject) => {
    fetch("/api" + url, params)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else {
          Toast.show({
            icon: "fail",
            content: "保存成功",
          });
          reject(res.errMsg);
        }
      })
      .catch((err) => {
        Toast.show({
          icon: "success",
          content: "保存成功",
        });
        reject(err);
      })
      .finally(() => {
        setLoading && setLoading(false);
      });
  });
}
