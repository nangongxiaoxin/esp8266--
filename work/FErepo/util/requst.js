import AppConfig from '../appconfig';


const getCode = async () => {
  return await my.getAuthCode({
    scopes: 'auth_user'
  }).then((res) => {
    return res.authCode;
  })
}

const request = async ({url, type, params}) => {
  const userCode = await getCode();
  // 每个接口传参code
  if (url.indexOf('?') !== -1) {
    url = url + `&code=${userCode}`
  } else {
    url = url + `?code=${userCode}`
  }
  const baseUrl = AppConfig.apiURI.slice(-1) == '/' ? AppConfig.apiURI :  (AppConfig.apiURI + '/');
  return new Promise((resolve, reject) => {
    //设置默认数据传数格式
    var methonType = "application/json";
    var method = type || 'GET'
    //判断请求方式
    if (method === 'PUT') {
      var p = Object.keys(params).map(function(key) {
        return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
      }).join("&");
      url += '?' + p;
      params = {}
    }
    if (method == "POST") {
      methonType = "application/json"
    }
    //验证基础库
    if (my.httpRequest) {
      //开始正式请求
      my.httpRequest({
        url: baseUrl + url,
        method: method,
        headers: {
          'content-type': methonType,
        },
        data: JSON.stringify(params),
        timeout: 10000,
        //成功回调
        success: (res) => {
          if(res.status === 200){
            resolve(res.data)
          } else {
            my.showToast({
              type: 'fail',
              content: res.data.message,
              duration: 5000,
              success: () => {
              },
            });
            reject('请求异常')
          }
        },
        //错误回调
        fail(error) {
          my.showToast({
            type: 'fail',
            content: error.errorMessage,
            duration: 5000,
            success: () => {
            },
          });
          reject(error)
        },
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样提示
      my.alert({
        title: '提示',
        content: '当前支付宝版本过低，无法使用此功能，请升级最新版本支付宝'
      });
    }
    })
}

export default request;