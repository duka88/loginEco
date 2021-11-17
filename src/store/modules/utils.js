const state = {
  toster: {
    error: false,
    msg: "",
  },
  loader: false,
}

const mutations = {
  setToster(state, payload) {
    state.toster.error = payload.error
    state.toster.msg = payload.msg
  },
  setDelete(state, payload) {
    state.delete.action = payload.action
    state.delete.show = payload.show
    state.overlay.action = payload.actionOverlay
    state.overlay.show = payload.show
  }, 
  setLoader(state, payload) {
    state.loader = payload
  },
}

const actions = {
  triggerToster({ commit }, payload) {
    commit("setToster", payload)
  },
  triggerLoader({ commit }, payload) {
    commit("setLoader", payload)
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
