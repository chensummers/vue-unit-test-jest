import YesNoComponent from "@/components/YesNoComponent.vue";
import { mount } from '@vue/test-utils'

import sinon from 'sinon'

describe('YesNoComponent event tests', () => {
  it('Click on yes button calls our method with argument "yes"', async () => {
    // const spy = sinon.spy()
    const spy = jest.fn()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    await wrapper.find('.yes').trigger('click')
  
    // spy.should.have.been.calledWith('yes')
    expect(spy).toHaveBeenCalledWith('yes');
  })

})

describe('YesNoComponent event tests', () => {
  it('Click on yes button calls our method with argument "no"', async () => {
    // const spy = sinon.spy()
    const spy = jest.fn()
    const wrapper = mount(YesNoComponent, {
      propsData: {
        callMe: spy
      }
    })
    await wrapper.find('.no').trigger('click')
  
    // spy.should.have.been.calledWith('yes')
    expect(spy).toHaveBeenCalledWith('no');
  })

})