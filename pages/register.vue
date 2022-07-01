<template>
  <v-container>
    <v-row>
      <v-col md="4" class="d-flex justify-end align-center">
          <img
          height="367"
          width="357"
          :src="require(`../static/assets/icon/pointid-logo.jpg`)"
          />
      </v-col>
      <v-col md="8" class="d-flex justify-start align-center">
        <v-row>
          <v-col class="mr-16 pl-0 mt-10">
            <v-card class="mx-auto" max-width="430" elevation="0">
              <h2 class="ml-3"> Register </h2>
              <v-card-text>
                <h4>Full Name</h4>
                <v-text-field
                  solo
                  dense
                  label="Enter your full name"
                ></v-text-field>
                <h4>Phone Number</h4>
                <v-text-field
                  solo
                  dense
                  label="Enter your phone number"
                ></v-text-field>
                <h4>Email Address</h4>
                <v-text-field
                  solo
                  dense
                  label="Example.email@gmail.com"
                ></v-text-field>
                <h4>Password</h4>
                <v-text-field
                  solo
                  dense
                  label="6-8 unique character"
                  single-line
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show3 ? 'text' : 'password'"
                  name="input-10-2"
                  hint="At least 8 characters"
                  value=""
                  class="input-group--focused"
                  @click:append="show3 = !show3"
              ></v-text-field>
              </v-card-text>
              <br />
            </v-card>
            <v-card class="mx-auto" max-width="542" elevation="0">
              <div class="text-center">
                <v-btn width="75%" dark color="#3790FC"> Sign Up </v-btn>
              <br /><br />
            <p> I’m a new member <a @click="login">Sign In</a> </p>
          </div>
            </v-card>
          </v-col>
        </v-row>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RegisterPage",
  data () {
      return {
        show3: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  methods: {
  login() {
       this.$router.push('/login')
      },
    },
};
</script>

<style scoped>

</style>
