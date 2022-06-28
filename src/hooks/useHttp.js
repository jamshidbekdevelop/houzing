const { REACT_APP_BASE_URL } = process.env;
// const { REACT_APP_BASE_URL: url } = process.env;

export const useHttp = () => {
  const request = async ({
    url = "",
    method = "GET",
    body = null,
    headers = {},
    token = false,
  }) => {
    if (token) {
      headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      headers["Content-type"] = `application/json`;
    }
    let res = await fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      body: method === "GET" ? null : JSON.stringify(body),
      headers,
    }).then((res) => res.json());
    if (res?.success) {
      console.log(res?.success, "suc");
      return res;
    } else {
      throw new Error(res?.message || "Something Wrong");
      console.log(res?.message, "err");
    }
  };
  return { request };
};
