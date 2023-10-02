<template>
  <div>
    <h1>Register page</h1>
    <p v-if="errorMessage" class="error-message">{{errorMessage}}</p>
    <form @submit.prevent="register">
      <div class="formGroup">
        <label for="user_firstname">First name</label>
        <input type="text" id="user_firstname" v-model="user.firstname" required />
      </div>
      <div class="formGroup">
        <label for="user_lastname">Last name</label>
        <input type="text" id="user_lastname" v-model="user.lastname" required />
      </div>
      <div class="formGroup">
        <label for="user_email">Email</label>
        <input type="email" id="user_email" v-model="user.email" required/>
      </div>
      <div class="formGroup">
        <label for="user_password">Password</label>
        <input type="password" id="user_password" v-model="user.password" required/>
      </div>
      <div class="formGroup">
        <button type="submit">Create my account</button>
      </div>
    </form>
  </div>
</template>

<script>
import { accountService } from '@/_services'
export default {
  name: "Register",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    register() {
      accountService.register(this.user)
          .then(response => {
            accountService.saveToken(response.data.token, response.data.id)
            this.$router.push('/app/dashboard')
          })
          .catch(error => console.log(error))
    },
  },
};
</script>
