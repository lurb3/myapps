<template>
  <div class="login-form-container">
    <h1 class="login-form-title">Login to the app</h1>
    <form class="login-form-wrapper" @submit.prevent="handleSubmit">
      <input
        class="login-form-input"
        v-model="formData.email"
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        class="login-form-input"
        v-model="formData.password"
        type="password"
        placeholder="Password"
      />
      <br />
      <button class="login-form-submit" type="submit">Login</button>
      Not a member?
      <router-link class="login-signup-highlight" to="/signup"
        >Signup</router-link
      >
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import auth from "@/services/auth";

export default defineComponent({
  data() {
    return {
      formData: {
        email: ref(""),
        password: ref(""),
      },
    };
  },
  methods: {
    handleSubmit() {
      auth.login(this.formData.email, this.formData.password);
    },
  },
});
</script>

<style>
/* Container for the entire form */
.login-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
  padding: 0px 10%;
}

.login-form-wrapper {
  width: 100%;
  max-width: 400px;
}

/* Form title */
.login-form-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Input fields */
.login-form-input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  outline: 0;
}

/* Submit button */
.login-form-submit {
  width: 100%;
  background-color: #8041db;
  color: white;
  padding: 14px 20px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.5s;
}

/* Add hover effect to the submit button */
.login-form-submit:hover {
  background-color: #391d62;
  transition: background-color 0.5s;
}

.login-signup-highlight {
  color: #391d62;
  text-decoration: none;
}

.login-signup-highlight:hover {
  text-decoration: underline;
}
</style>
