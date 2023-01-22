<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import request from "@/services/axios.interceptors";
console.log(request.defaults.withCredentials);
const test = async () => {
  const response = await request.get("/api/v1/user");
  console.log(response);
};

test();
@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
