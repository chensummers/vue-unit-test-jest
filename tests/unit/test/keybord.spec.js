import KeybordComponent from "@/components/KeybordComponent.vue";
import { mount } from '@vue/test-utils'

describe('KeybordComponent event tests', () => {
  it('Quantity is zero by default', () => {
    const wrapper = mount(KeybordComponent)
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Up arrow key increments quantity by 1', async () => {
    const wrapper = mount(KeybordComponent)
    await wrapper.trigger('keydown.up')
    expect(wrapper.vm.quantity).toBe(1)
  })

  it('Down arrow key decrements quantity by 1', async () => {
    const wrapper = mount(KeybordComponent)
    wrapper.vm.quantity = 5
    await wrapper.trigger('keydown.down')
    expect(wrapper.vm.quantity).toBe(4)
  })

  it('Escape sets quantity to 0', async () => {
    const wrapper = mount(KeybordComponent)
    wrapper.vm.quantity = 5
    await wrapper.trigger('keydown.esc')
    expect(wrapper.vm.quantity).toBe(0)
  })

  it('Magic character "a" sets quantity to 13', async () => {
    const wrapper = mount(KeybordComponent)
    await wrapper.trigger('keydown', {
      key: 'a'
    })
    expect(wrapper.vm.quantity).toBe(13)
  })
})