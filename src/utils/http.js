export default function Http({
  url,
  method = "post",
  headers,
  body = {},
  setLoading,
  setResult,
}) {
  setLoading && setLoading(true);
  console.log("http");

  const defaultHeader = {
    "Content-type": "application/json",
  };

  let params;
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
        console.log("res:", res);
        resolve(res);
        setResult && setResult(res);
        setLoading && setLoading(false);
      });
  });
}
