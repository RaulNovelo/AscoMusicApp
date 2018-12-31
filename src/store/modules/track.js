const state = {
  track: {}
}

const getters = {
  getTitle (state) {
    if (!state.track.name) { return '' }
    return `${state.track.name} - ${state.track.artists[0].name}`
  }
}

const mutations = {
  setTrack (state, track) {
    state.track = track
  }
}

const actions = {}

export const track = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
