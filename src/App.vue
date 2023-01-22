<template>
  <button @click="logout" class="logout-btn">logout</button>
  <router-view />
</template>

<script lang="ts">
import auth from "@/services/auth";

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      auth.logout();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.logout-btn {
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  font-size: 15px;
}

.logout-btn:hover {
  text-decoration: underline;
}
</style>
