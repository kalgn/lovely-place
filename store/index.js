export const state = () => ({
  isLoggedIn: false,
})

export const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true
  },
}

export const actions = {
	login({commit}) {
		commit('LOGIN')
	}
}
