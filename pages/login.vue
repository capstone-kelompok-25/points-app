<template>
  <v-container>
    <div class="d-flex justify-center">
      <h1>WELCOME!</h1>
    </div>
    <br />
    <div class="d-flex justify-center">
      <span>
        Sign in to enjoy the benefits of
        <span class="blue--text">POINT.ID</span>
      </span>
    </div>
    <v-card-title>
      <img
        class="mx-auto"
        :src="require(`../static/assets/icon/pointid-logo.jpg`)"
      />
    </v-card-title>
    <br />
    <v-row class="mx-auto">
      <v-col>
        <v-form ref="loginForm" v-model="isValidForm" @submit.prevent="login">
          <v-card class="mx-auto" max-width="430" elevation="0">
            <br />
            <v-card-text>
              <h4>Email</h4>
              <v-text-field
                solo
                dense
                label="example.email@gmail.com"
                :rules="[rules.required, rules.emailChar]"
                v-model="emailUser"
                @keyup.enter="login"
              ></v-text-field>
              <h4>Password</h4>
              <v-text-field
                solo
                dense
                :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show3 ? 'text' : 'password'"
                name="input-10-2"
                hint="At least 8 characters"
                value="********"
                v-model="passwordUser"
                class="input-group--focused"
                @click:append="show3 = !show3"
                @keyup.enter="login"
              ></v-text-field>
            </v-card-text>
            <br />
          </v-card>
          <v-card class="mx-auto" max-width="542" elevation="0">
            <div class="d-flex justify-center">
              <v-btn
                width="75%"
                color="#3790FC"
                :disabled="!isValidForm"
                type="submit"
                style="color: white"
              >
                Sign In
              </v-btn>
            </div>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
    <br /><br />
    <div class="d-flex justify-center">
      <p>I’m a new member <a @click="register">Sign Up</a></p>
    </div>
    <v-dialog
      v-model="isError"
      transition="dialog-top-transition"
      max-width="500"
    >
      <v-card>
        <v-card-title>Opss..</v-card-title>
        <v-card-subtitle>
          {{ statusMessage }}
        </v-card-subtitle>

        <v-divider> </v-divider>
        <v-card-actions class="justify-end">
          <v-btn dark color="#FF565F" @click="isError = false">Coba Lagi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      show3: false,
      password: "Password",

      isError: false,
      statusMessage: "",

      emailUser: "",
      isValidForm: false,
      passwordUser: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
        emailChar: (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "format email: haha@hotmail.com",
      },
    };
  },

  methods: {
    register() {
      this.$router.push("/get-point");
    },
    login() {
      if (this.$refs.loginForm.validate()) {
        this.$store
          .dispatch("Authentication/fetchLogin", {
            email: this.emailUser,
            password: this.passwordUser,
          })
          .catch((err) => {
            if (err.response.data.code === 400) {
              this.isError = true;
              this.statusMessage =
                "Email / password yang kamu masukkan tidak sesuai";
            }
          });
      }
    },
  },
};
</script>

<style scoped>
span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 134.69%;
  /* or 32px */

  color: #000000;
}
</style>
