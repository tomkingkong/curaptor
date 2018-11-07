import {shallow} from 'vue-test-utils'
import Gallery from './Gallery.vue'

describe('Gallery', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(Gallery)
    expect(wrapper).toMatchSnapshot()
  })
})