import { Toast } from "antd-mobile";

type Type = {
  url: string;
  method?: "get" | "post";
  headers?: Object;
  body?: Object;
  setLoading?: Function;
  setResult?: Function;
};

export default function Http({
  url,
  method = "post",
  headers = {},
  body = {},
  setLoading,
  setResult,
}: Type) {
  setLoading && setLoading(true);

  const defaultHeader = {
    "Content-type": "application/json",
  };

  let params: any;
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
      .then(
        (res) => {
          resolve(res);
          setResult && setResult(res);
          setLoading && setLoading(false);
        },
        (reason) => {
          Toast.show({ icon: "fail", content: reason });
        }
      );
  });
}
