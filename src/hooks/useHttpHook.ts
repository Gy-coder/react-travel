import { useState, useEffect } from "react";
import { IncomingHttpHeaders } from "http";
import { Http } from "@/utils";

interface Type {
  url: string;
  method: "get" | "post" | "put" | "delete";
  headers: IncomingHttpHeaders;
  body: Object;
  watch: Array<any>;
}

const useHttpHook = ({
  url,
  method = "post",
  headers,
  body = {},
  watch = [],
}: Type) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Http({
      url,
      method,
      headers,
      body,
      setResult,
      setLoading,
    });
  }, watch);

  return [result, loading];
};

export default useHttpHook;
