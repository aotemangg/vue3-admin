import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    sidebarType: true,
    lang: localStorage.getItem('lang') || 'zh'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    changeSidebarType(state) {
      state.sidebarType = !state.sidebarType
    },
    changeLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo).then(res => {
          commit('setToken', res.token)
          setTokenTime()
          router.push('/')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.push('/login')
    }
  }
}
