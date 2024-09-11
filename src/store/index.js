import { createStore } from 'vuex';
import api from '@/api';

const errorMessage= 'ошибка на сервере';

export default createStore({
  state: {
    users: [],
    user: {},
    error: {
      isError: false,
      message: ''
    },
    isError: false,
    isLoading: false,
    infoPage: {
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUser(state) {
      return state.user;
    },
    getIsError(state) {
      return state.error;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
    getInfoPage(state) {
      return state.infoPage;
    }
  },
  mutations: {
    setUsers(state, users) {
      if (users.length === 0) {
        state.error.isError = true
        state.error.message = 'пользователь не найден'
        return
      }

      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    clearUsers(state) {
      state.users = [];
    },
    clearUser(state) {
      state.user = {};
    },
    setIsError(state, error) {
      state.error.message = error.message;
      state.error.isError = error.isError;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setTotalPages(state, totalPages) {
      state.infoPage.totalPages = totalPages;
    },
    setPage(state, page) {
      state.infoPage.page = page;
    }
  },
  actions: {
    getUsersByUsername({commit}, {search, limit, page}) {
      commit('setIsLoading', true);

      api.getUsersByUserNames(search, limit, page)
          .then(res => {
            commit('setUsers', res.data)
            let totalPages = Math.ceil(res.headers['x-total-count'] / limit);
            commit('setTotalPages', totalPages);
          })
          .catch(e => {commit('setIsError', {isError: true, message: errorMessage})})
          .finally(() => {commit('setIsLoading', false)});

    },
    getUsersById({commit}, {search, limit, page}) {
      commit('setIsLoading', true);

      api.getUsersById(search, limit, page)
          .then(res => {
            commit('setUsers', res.data);
            let totalPages = Math.ceil(res.headers['x-total-count'] / limit);
            commit('setTotalPages', totalPages);
          })
          .catch(e => {commit('setIsError', {isError: true, message: errorMessage})})
          .finally(() => {commit('setIsLoading', false)});

    },
    deleteAllUsers({commit}) {
      commit('clearUsers');
      commit('clearUser');
      commit('setIsError', false, '');
    },
    setUser({commit}, user) {
      commit('setUser', user)
    },
    changePage({commit}, page) {
      commit('setPage', page);
    }
  },
  modules: {
  }
})
