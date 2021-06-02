const Mock = require("mockjs");        //引入依赖包mockjs，一定要先安装
import * as api from '../utils/api.js'  //导入所有的api url地址
import {userInfo} from './user.js'  //所有的数据模板，这里方便演示所以只有一个

//可以设置响应的时间，模拟网络耗时，单位是ms
Mock.setup({
    timeout: '500 - 4000'
})
//参数： url, 请求方式, 数据模板（可以是对象或字符串）
Mock.mock(api.USER_LIST,'get',userInfo)