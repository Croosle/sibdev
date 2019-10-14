import { getField, updateField } from 'vuex-map-fields';

export const state = () => ({
  authUser: null,
  users: [ ],
  api: [
    {
      id: 0,
      name: 'Shiba',
      url: 'shiba',
      desc: 'Random pictures of Shibu Inu, cats or birds'
    },
    {
      id: 1,
      name: 'Ghibli',
      url: 'ghibli',
      desc: 'Resources from Studio Ghibli films'
    },
    {
      id: 2,
      name: 'The report of the week',
      url: 'the-report-of-the-week',
      desc: 'Food & Drink Reviews'
    },
    {
      id: 3,
      name: 'Magic the gathering',
      url: 'magic-the-gathering',
      desc: 'Magic The Gathering Game Information'
    },
    {
      id: 4,
      name: 'Kanye.rest',
      url: 'kanye',
      desc: 'REST API for random Kanye West quotes'
    }
  ]
})

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  },
  ADD_USER (state, payload) {
    state.users.push(payload)
  },
  ADD_DASHBOARD(state, payload) {
    state.users[state.authUser].dashboard = payload
  },
  updateField
}

export const getters = {
  userData: (state) => {
    return state.users[state.authUser]
  },
  userID: (state) => {
    if (state.users.length > 0) {
      return state.users[state.users.length - 1].id + 1
    } else {
      return 0
    }
  },
  apiData: (state) => {
    return state.api
  },
  getField
}
