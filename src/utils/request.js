import axios from 'axios' // axios http请求库
import errorFn from './errorConfig';

const config = {
    timeout:1000
}
const server = axios.create(config);

// 添加请求拦截器
server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('/request.js [7]--1',config);
    return {
        ...config,
        // headers 配置
        headers:{
            a:1
        }
    };
  }, function (error) {
    // 对请求错误做些什么
    console.log('/request.js header-error--1',error);
    return Promise.reject(error);
});

// 添加响应拦截器
server.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        const res = response.data;
        console.log('/request.js [21]--1-response',response);
        if (res.status !== 200) { // 需自定义
            // 返回异常
            return Promise.reject({
                status: res.status,
                message: res.message
            });
        } else {
            return res;
        }
  }, 
  //error 处理
  error => {
    // 对响应错误做点什么
    return Promise.reject(errorFn(error));
});

class Request {
    get(url,params) {
        return new Promise((resolve, reject) => {
            server({
                url: url,
                method: 'get',
                params: params
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }
    post(url,params) {

        return new Promise((resolve, reject) => {
            server({
                url: url,
                method: 'post',
                data: params
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }

    fileUpload(url,params) {
        return new Promise((resolve, reject) => {
            server({
                url: url,
                method: 'post',
                data: params,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
export default new Request();