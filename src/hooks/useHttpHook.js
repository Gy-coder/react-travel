import { useState, useLayoutEffect, useEffect } from "react";
import { Http } from "@/utils";

const useHttpHook = ({
  url,
  method = "post",
  headers,
  body = {},
  watch = [],
}) => {
  const [result, setResult] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  console.log("useHttpHook");
  Http({
    url,
    method,
    headers,
    body,
    setResult,
    setLoading,
  });
  console.log(result, loading);
  // }, watch);

  return [result, loading];
};

export default useHttpHook;
