import Taro from '@tarojs/taro';
import md5 from 'md5';
import cookie from 'react-cookies'

// let login_token = 'DKLD7M-80ca7ddf997e0d3d7cf3342ef8512d1ead0c6f98';
let token ='';
let contentType='application/json';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

 function getSnTime () {
  let localTimeDif = Taro.getStorageSync("localTimeDif");
  let snTime = new Date().getTime() + (localTimeDif ? parseInt(localTimeDif) : 0);
  return snTime;
 }

// md5加密
function calcSn(data, snTime, token){
  let obj = Object.assign({},{"snTime": snTime, "token": token}, data);
    let queryString = "";
    let keyArr = Object.keys(obj).sort();
    let len = keyArr.length;
    let i = 0;
    for (; i < len; i++) {
        queryString += keyArr[i] + "=" + obj[keyArr[i]] + "&";
    }
    queryString = queryString.substring(0, queryString.length - 1);
    return md5(queryString);
};

export default (data:any, url:string) => {

 // 根据不同端请求获取token
 if(Taro.getEnv() === Taro.ENV_TYPE.WEB){
  let login_token = cookie.load("login_token");
  if (login_token != undefined && login_token != "") {
      token = login_token;
  }
}else{
  let login_token = Taro.getStorageSync("login_token");
  if (login_token != undefined && login_token != "") {
      token = login_token;
  }
}

  return Taro.request({
    url: url,
    data: {
      body: data,
      header: { token: token, "snTime":getSnTime(),sn:calcSn(data, getSnTime(), token), from: 'web' }
    },
    method: 'POST',
    mode: "cors",
    credentials: "same-origin",
    cache: "no-cache",
    dataType : "json",
    header: { 'content-type':contentType }
  }).then(res=> {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    } else {
      const errortext = codeMessage[res.statusCode];
      throw new Error(errortext);
    }
  })
}
