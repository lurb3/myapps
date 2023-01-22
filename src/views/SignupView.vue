<template>
  <div class="signup-form-container">
    <h1 class="signup-form-title">Create a new user</h1>
    <form class="signup-form-wrapper" @submit.prevent="handleSubmit">
      <input
        class="signup-form-input"
        v-model="formData.name"
        type="text"
        placeholder="Name"
      />
      <br />
      <input
        class="signup-form-input"
        v-model="formData.email"
        type="text"
        placeholder="Email"
      />
      <br />
      <input
        class="signup-form-input"
        v-model="formData.password"
        type="password"
        placeholder="Password"
      />
      <br />
      <input
        class="signup-form-input"
        v-model="formData.password_confirmation"
        type="password"
        placeholder="Confirm Password"
      />
      <br />
      <button class="signup-form-submit" type="submit">Sign up</button>
      <router-link class="back-to-login" to="/login">Back to login</router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "@/router";
import auth from "@/services/auth";

export default defineComponent({
  data() {
    return {
      formData: {
        name: ref(""),
        email: ref(""),
        password: ref(""),
        password_confirmation: ref(""),
      },
    };
  },
  methods: {
    handleSubmit() {
      auth
        .signup(
          this.formData.name,
          this.formData.email,
          this.formData.password,
          this.formData.password_confirmation
        )
        .then(() => router.push("/login"));
    },
  },
});
</script>

<style>
/* Container for the entire form */
.signup-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 0px 10%;
}

.signup-form-wrapper {
  width: 100%;
  max-width: 400px;
}

/* Form title */
.signup-form-title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Input fields */
.signup-form-input {
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
.signup-form-submit {
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
.signup-form-submit:hover {
  background-color: #391d62;
  transition: background-color 0.5s;
}

.back-to-login {
  text-decoration: none;
  color: #797977;
}

.back-to-login:hover {
  text-decoration: underline;
}
</style>
