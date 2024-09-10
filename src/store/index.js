import { createStore } from 'vuex';
import {getItem, setItem} from "@/store/localStorage";
import api from '@/api';

export default createStore({
  state: {
    users: getItem('users') || []

  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
      setItem('users', users)
    },
    clearUsers(state) {
      localStorage.clear();
    }
  },
  actions: {
    getUsersByUsername({commit}, search) {
      let users = [];
      let searchItem = search.split(', ');
      if (searchItem.length > 1) {
        api.getUsersByUserNames(searchItem)
            .then(res => {
              commit('setUsers', res.data)});
      } else {
        api.getUserByUserName(searchItem[0]).then(res => {
          commit('setUsers', res.data)});
      }

      commit('setUsers', users);
    }
  },
  modules: {
  }
})
