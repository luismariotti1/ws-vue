<template>
  <div>
    <h1>Welcome</h1>
    <div>
      <h3>Sing in</h3>
      <div>
        <span class="input-label">Type your nick name</span>
        <input class="input" type="text" v-model="username" />
      </div>
      <div>
        <span class="input-label">Type your password</span>
        <input class="input" type="password" v-model="password" />
      </div>
      <button class="button" @click="singIn">Sing in</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  data() {
    return {
      username: "Eberson1",
      password: "password",
    };
  },
  methods: {
    ...mapActions(["signInStore", "signOutStore"]),
    async singIn() {
      let formData = {
        username: this.username,
        password: this.password,
      };
      await this.signInStore(formData);
      if (this.$store.state.auth.user) {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped></style>
