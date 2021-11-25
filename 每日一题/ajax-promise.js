function getJSON(url) {
  let promise = new Promise(function (resolve, reject) {
    xhr.open("GET", url, true);
    // 2. 设置监听
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    // 3. 设置响应类型 请求头
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    // 4. 发送(null表示不包含数据体)
    xhr.send(null);
  });

  return promise;
}
