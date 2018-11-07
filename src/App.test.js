import { shallow } from 'vue-test-utils'
import App from './App.vue'
import Gallery from './components/Gallery.vue'
jest.mock('axios')

describe('App', () => {
  it('matches snapshot without cards', () => {
    const wrapper = shallow(App) 
    expect(wrapper).toMatchSnapshot()
  })

  it('matches snapshot with cards', (done) => {
    const wrapper = shallow(App)
    wrapper.setData({loading: false})
    wrapper.setData({art: [{id:1, primaryimageurl:'https://thumbs.mic.com/MTcwOWFlMWIxNyMvbF9fbmxvYkVkekkwYlBRZkxhY2NRcGVraXFRPS8xMjd4NjM6MzYzeDMwMC8xNjAweDE2MDAvZmlsdGVyczpmb3JtYXQoanBlZyk6cXVhbGl0eSg4MCkvaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3BvbGljeW1pYy1pbWFnZXMvbnc0eGU4NHRkcXlpMTVrZXViMHV3eHp0ZmZhb2NjbnN6dmRveGh1MmNxcTh5bGppY3Npcng4ZHczdTRlbXoxeS5qcGc.jpg'}]})
    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot()
      done()
    })
  })

  it('calls searchGalleries when key is pressed', () => {
    const searchGalleries = jest.fn()
    const wrapper = shallow(App)
    wrapper.setMethods({ searchGalleries })
    const input = wrapper.find('input')
    input.trigger('keyup.enter')
    expect(searchGalleries.mock.calls.length).toBe(1)
  })

  it('fetches async when key is pressed', (done) => {
    const wrapper = shallow(App)
    wrapper.find('input').trigger('keyup.enter')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.value).toBe(undefined)
      done()
    })
  })
})