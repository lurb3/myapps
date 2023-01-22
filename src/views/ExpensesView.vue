<template>
  <h1>Expenses my friend</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import request from "@/services/axios.interceptors";

const getData = async () => {
  const response = await request.get("/api/v1/expenses");
  console.log(response);
};

getData();

export default defineComponent({
  data() {
    return {
      expenses: [],
    };
  },
  methods: {},
});
</script>

<style></style>
