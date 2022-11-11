import AuthService from "@/services/authService";

export const auth = {
  state: {
    authenticated: false,
    user: {},
  },

  getters: {
    authenticated(state) {
      return state.authenticated;
    },
    user(state) {
      return state.user;
    },
  },

  mutations: {
    setAuthenticated(state, authenticated) {
      state.authenticated = authenticated;
    },

    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    async signInStore({ commit }, data) {
      try {
        let service = new AuthService();
        const response = await service.singIn({
          username: data.username,
          password: data.password,
        });
        commit("setAuthenticated", true);
        commit("setUser", response.data);
      } catch (e) {
        commit("setAuthenticated", false);
        commit("setUser", {});
      }
    },
    signOutStore({ commit }) {
      commit("setAuthenticated", false);
      commit("setUser", {});
    },
  },
};
