import Mock from 'mockjs'

Mock.mock('http://localhost:8080/user','get',()=> Promise.resolve({ data: 'value' }))
