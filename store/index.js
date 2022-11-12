export const strict = false

export const state = () => ({
  currentUser: {},
  tempUser: '',
  showAll: [
    {
      auth: null,
      category: 'about',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'journey',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'styleList',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'styleVoice',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'styleAward',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'styleMusic',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'pastEvent',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'newEvent',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'visit',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
    {
      auth: null,
      category: 'newActivity',
      content: null,
      image: null,
      indexR: null,
      module: null,
      postDate: '1111111111111111',
      remark: null,
      states: null,
      title: null,
      url: null
    },
  ]
})

export const mutations = {
  getShowAll (state, data) {
    state.showAll = data
  },
  updateUser (state, data) {
    state.auth.user = data
  },
  registerUser (state, data) {
    state.tempUser = data
  }
}
