import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { auth } from "@/store/auth/authStore";

export default createStore({
  modules: {
    auth,
  },
  plugins: [createPersistedState()],
});
