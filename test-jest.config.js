const path = require('path');

module.exports = {
    rootDir: path.resolve(__dirname),
    collectCoverage:false, //启用测试报告
    coverageDirectory: '<rootDir>/tests/unit/coverage', //测试报告路劲
    displayName: {
        name: 'CLIENT',
        color: 'blue',
    },
    preset: '@vue/cli-plugin-unit-jest', //预设
    // coverageThreshold:{ //覆盖率配置
    //     branches: 80,
    //     functions: 80,
    //     lines: 80,
    //     statements: 80,
    // },
    // collectCoverageFrom: [''] 收集指定的文件
}