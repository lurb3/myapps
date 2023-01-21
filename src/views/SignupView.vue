<template>
  <span class="signup-logo">$</span>
  <h1>Create new account</h1>
  <div class="form-wrapper">
    <form v-on:submit.prevent class="signup-form" @submit="handleSubmit">
      <input v-model="formData.name" type="text" placeholder="Name"/>
      <input v-model="formData.email" type="text" placeholder="Email"/>
      <input v-model="formData.password" type="password" placeholder="Password"/>
      <input v-model="formData.password_confirmation" class="signup-password" type="password" placeholder="Password confirmation"/>
      <router-link class="back-to-login" to="/" tag="button">login</router-link>
      <button class="submit-btn" type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      axios.post("http://127.0.0.1:8000/api/v1/signup", this.formData, {
        headers: {
          'Content-Type': 'application/json',
          'withCredentials' : 'true'
        }
      })
        .then(response => console.log(response));
    }
  },
};

</script>

<style scoped lang="scss">
.signup-logo {font-size: 100px; font-family: Sensation_Bold; font-style: italic;}
h1 {font-family: Sensation_Light;}
.form-wrapper {
  display: flex; flex-direction: column; justify-content: center; align-items: center; max-width: 400px; margin: auto;
  .signup-form {
    display: flex; flex-direction: column; justify-content: center; width: 100%;
    input {
      outline: 0; border: 0; background-color: transparent; border-bottom: 1px solid white; text-align: center; color:white; font-size: 20px; font-family: Sensation_Light;
      &::placeholder {color:white;}
      &:not(.signup-password) {margin-bottom: 40px;}
    }
    .back-to-login {
      text-decoration: none; color: #858585; text-align: left; margin-top: 5px; margin-bottom: 40px;
      &:hover {
        text-decoration: underline;
      }
    }
    .submit-btn {background-color: white; border: 0; font-family: Sensation_Bold; font-size: 20px; padding: 20px 10px;}
  }
}
</style>
