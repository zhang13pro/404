const SERVER_URL = "/server";
// 1. 创建请求
let xhr = new XMLHttpRequest();
xhr.open("GET", SERVER_URL, true);
// 2. 设置监听
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) return;
  if (xhr.status === 200) {
    console.log(xhr.response);
  } else {
    throw new Error("请求不成功");
  }
};
xhr.onerror = function () {
  console.error(this.statusText);
};
// 3. 设置请求头
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json");
// 4. 发送(null表示不包含数据体)
xhr.send(null);
