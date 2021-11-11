// 用来封装fetch请求
const BASE_URL = "http://www.pudge.wang:4000";
const http = {
  get(url, params) {
    if (params) {
      const newarr = Object.keys(params).map((item) => {
        return item + "=" + params[item];
      });
      const newstr = newarr.join("&");
      url += "?" + newstr;
    }

    return fetch(BASE_URL + url)
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
  },
  post(url, data) {
    return fetch(BASE_URL + url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        return res;
      });
  },
};

export default http;
