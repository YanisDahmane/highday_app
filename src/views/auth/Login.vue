<template>
  <div>
    <h1>Login page</h1>
    <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
    <form @submit.prevent="login">
      <div class="formGroup">
        <label for="user_email">Email</label>
        <input type="email" id="user_email" v-model="user.email" />
      </div>
      <div class="formGroup">
        <label for="user_password">Password</label>
        <input type="password" id="user_password" v-model="user.password" />
      </div>
      <div class="formGroup">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { accountService } from '@/_services'
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    login() {
      accountService.login(this.user)
          .then(response => {
            accountService.saveToken(response.data.token, response.data.id)
            this.$router.push('/app/dashboard')
          })
          .catch(error => console.log(error))
    },
  },
};
</script>
