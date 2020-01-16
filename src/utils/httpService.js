import axios from 'axios';
import { Toast } from 'vant'
let qs = require('qs');

axios.defaults.withCredentials = true;


let host = `localhost:8090`;

let baseUrl = `http://${host}/o2o`;


/**
 * get 请求
 */
const httpGet = function (url = '', data = {}) {
    const instance = axios.create({
        baseURL: baseUrl,
        withCredentials: false,
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'content-type': 'application/json'
        }
    });
    return instance.get(url, {
        params: data
    }).then((result) => {
        var res = result.data;
        if (res && res.code === 0) {
            return Promise.resolve(res);
        } else {
            if (res.code === 15000) {
                Toast({
                    message: '系统异常',
                    duration: 800
                });
                return res;
            }
            return Promise.resolve(res);
        }
    }).catch((error) => {
        let res = error.response
        if (res.status === 400 || res.status === 401) {
            if (res.data) {
                Toast({
                    message: res.data.message,
                    duration: 800
                });
            } else {
                Toast({
                    message: '登陆信息已失效,请重新登陆',
                    duration: 800
                });
            }
            //this.$router.push('/login');
            return res;
        }
        res = {
            code: -1,
            message: '网络请求异常，请稍后再试或联系客服！'
        }
        console.log('网络请求错误');
        return res;
    })
}


/**
 * post 请求
 */
const httpPost = function (url = '', data = {}) {
    const instance = axios.create({
        baseURL: baseUrl,
        withCredentials: false,
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'content-type': 'application/json'
        }
    });
    return instance.post(url, JSON.stringify(data)).then((result) => {
        var res = result.data;
        if (res && res.code === 0) {
            return Promise.resolve(res);
        } else {
            if (res.code === 15000) {
                Toast({
                    message: '网络请求异常，请稍后再试或联系客服！',
                    duration: 800
                });
                return res;
            }
            return Promise.resolve(res);
        }
    }).catch((error) => {
        let res = error.response
        if (res.status === 400 || res.status === 401) {
            if (res.data) {
                Toast({
                    message: res.data.message,
                    duration: 800
                });
            } else {
                Toast({
                    message: '登陆信息已失效,请重新登陆',
                    duration: 800
                });
            }
            //this.$router.push('/login');
            return res;
        }
        res = {
            code: -1,
            message: '网络请求异常，请稍后再试或联系客服！'
        }
        console.log('网络请求错误');
        return res;
    })
}


export {
    baseUrl,
    httpGet,
    httpPost
}
