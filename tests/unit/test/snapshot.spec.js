import YesNoComponent from "@/components/YesNoComponent.vue";
import { mount } from '@vue/test-utils'


describe('YesNoComponent snapshot', () => {
    test('renders correctly', () => {
        const wrapper = mount(YesNoComponent)
        expect(wrapper.element).toMatchSnapshot()
    })
})