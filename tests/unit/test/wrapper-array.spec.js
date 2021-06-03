import { shallowMount } from '@vue/test-utils'
import Wrapper from "@/components/Wrapper.vue";

const factory = (values = {}) => {
  return shallowMount(Wrapper, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Wrapper array', () => {
  it('wrapper test at', () => {
    const wrapper = factory()
    const divWrapper = wrapper.find('.wrapper');
    const divs = wrapper.findAll('.div')
    expect(divWrapper.element.tagName).toMatch('DIV')
    expect(divs.at(1).element.tagName).toMatch('DIV')
    expect(divs.at(1).text()).toMatch('div2')

  })

  it('wrapper test filter', () => {
    const wrapper = factory()
    const filterPs = wrapper
    .findAll('p')
    .filter(w => w.classes('p0'))

    expect(filterPs.at(1).text()).toMatch('p0')
  })

  it('setChecked demo', async () => {
    const wrapper = factory()
    const checkboxInput = wrapper.find('input[type="checkbox"]')
    const radioInput = wrapper.find('input[type="radio"]')
    await checkboxInput.setChecked();
    await radioInput.setChecked();
    expect(checkboxInput.element.checked).toBeTruthy()
    expect(wrapper.vm.radio).toEqual('radio1')
  })

  it('setValue demo', async () => {
    const wrapper = factory()
    const inputArray = wrapper.findAll('input[type="text"]')
    await inputArray.at(0).setValue('value');
    expect(inputArray.at(0).element.value).toEqual('value');
    expect(wrapper.vm.value).toEqual('value');
  })
  
})