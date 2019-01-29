import * as vsComponents from './components'
import './styles/vuefire.scss'

const install = (Vue, options) => {
  console.log(vsComponents)
  Object.values(vsComponents).forEach(vsComponent => {
    Vue.use(vsComponent)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export { default as vfAlert } from './components/vfAlert'
export { default as vfIcon } from './components/vfIcon'