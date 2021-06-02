const Mock = require("mockjs")
const Random = Mock.Random;     //mockjs对象的一个随机对象

let list = []
const userInfo = function () {
    for (let i = 0; i < 10; i++) {
        list.push({
            id: i,
            name: Random.cname(),         //返回一个常见的中文名
            age: Random.integer(20, 40)   //返回一个数字，范围在20~40
        })
    }
    return {
        list,
        status:200,
        message:'success'
    }
}
export { userInfo }