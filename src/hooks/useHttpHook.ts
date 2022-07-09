import { useState, useEffect } from "react";
import { Http } from "@/utils";
import { City } from "@/components/home/search";

type Type = {
  url: string;
  method?: "get" | "post";
  headers?: Object;
  body?: Object;
  watch?: Array<any>;
};

const useHttpHook = ({
  url,
  method = "post",
  headers,
  body = {},
  watch = [],
}: Type) => {
  const [result, setResult] = useState<City[][]>([[]]);
  const [loading, setLoading] = useState<boolean>(true);
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
