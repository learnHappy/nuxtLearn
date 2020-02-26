/*
const state = () => ({
  app: ['n', 'a', 'v']
})
*/

const state = function () {
  return {app: ['n', 'a', 'v']}
}

const mutations = {
  add(state, text) {
    state.app.push(text)
  }
}

const actions = {
  add: ({commit}, text) => {
    commit('add', text)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
