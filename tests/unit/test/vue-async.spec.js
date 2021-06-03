import { shallowMount } from '@vue/test-utils'
import VueTest from "@/components/VueTest.vue";

const factory = (values = {}) => {
  return shallowMount(VueTest, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('vue-async test', () => {
  it('macth emit', async () => {
    const wrapper = factory()
    wrapper.vm.$emit('foo')

    //Wait until $emits have been handled
    await wrapper.vm.$nextTick()
    /*
        wrapper.emitted() returns the following object:
        {
            foo: [[], [123]]
        }
    */
    expect(wrapper.emitted().foo).toBeTruthy()
  })
})