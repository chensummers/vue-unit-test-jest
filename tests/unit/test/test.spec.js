import { shallowMount } from "@vue/test-utils";
import Test from "@/components/Test.vue";
import Slot from '../slot.vue'

let testDefaultSlot = {
  render(h) {
    return h(Slot);
  },
};

describe("Test.vue", () => {
  const title = "Test title";
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Test, {
      propsData: { title },
      slots: {
        default: testDefaultSlot,
      },
    });
  });
  // test props  ---- toMatch
  it("props--", () => {
    expect(wrapper.text()).toMatch(title);
  });

  // test props  ---- toContain
  it("props--", () => {
    expect(wrapper.text()).toContain(title);
  });
  
  // test data  ---- toEqual
  it('测试 data', () => {
    expect(wrapper.vm.$data.checked).toEqual(false);
  });

  // test methods  ---- toBe
  it('测试方法 methods', async() => {
    const handleCheck = await wrapper.vm.handleCheck({target:{value:false}});
    expect(handleCheck).toBe(undefined);
    // wrapper.destroy();
  });



  // jest 语法
  it('jest number 语法',()=>{
    // toBe 全等 ===
    expect(1).toBe(1);
    // toEqual 值等 ==
    expect(1).toEqual(1);
    // toBeDefined 是否被定义
    let a=1;
    expect(a).toBeDefined();
    // 是否未被定义
    let b;
    expect(b).toBeUndefined();
    // toBeTruthy 是否为真值
    expect(1).toBeTruthy();
    expect(0).not.toBeTruthy();  
    // toBeFalsy 是否为假值（false,0,'',null,undefined）
    expect(0).toBeFalsy();
    // toBeGreaterThan 是否大于
    expect(1).toBeGreaterThan(0);
    // toBeLessThan 是否小于
    expect(1).toBeLessThan(2);
    // toBeGreaterThanOrEqual 是否大于等于
    expect(1).toBeGreaterThanOrEqual(1);
    // toBeLessThanOrEqual 全等 ===
    expect(1).toBeLessThanOrEqual(1);
  })

  it('jest string 语法',()=>{
    expect('string').toMatch('string');
  })

  it('jest array 语法',()=>{
    expect([1,2,3,4]).toContain(3);
  })

  // 生命周期
  // beforeAll(()=>console.log('beforeAll'))
  // afterAll(()=>console.log('afterAll'))
  // beforeEach(()=>console.log('beforeEach'))
  // afterEach(()=>console.log('afterEach'))
});

// describe('test describe',()=>{
//   test('test',()=>console.log('/test.spec.js [90]--1','test'))
// })

const fn = s =>  `jest test fn ${s}`

describe('jest fn',()=>{
  const jestFn = jest.fn(fn)
  it('fn',()=>{
    jestFn('hello')
    // 函数是否被调用
    expect(jestFn).toHaveBeenCalled();
    // 函数是否被传参
    expect(jestFn).toHaveBeenCalledWith('hello');
    // 函数调用次数
    expect(jestFn).toHaveBeenCalledTimes(1);
    // 函数是否返回值
    expect(jestFn).toHaveReturned();
    // 函数返回值校验
    expect(jestFn).toHaveReturnedWith('jest test fn hello')
  })
})