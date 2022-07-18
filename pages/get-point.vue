<template>
  <div class="bg">
    <v-row v-if="!isLoged">
      <v-col class="d-flex justify-end">
        <p>Have Account?<a @click="login"> Sign in here</a></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" class="d-flex justify-end align-center">
        <div class="mr-16">
          <v-img
            src="/assets/icon/GetPoint/Grup slogan.png"
            max-width="405px"
            max-height="166px"
          ></v-img>
          <br />
          <p class="font-weight-bold text-banner">
            Download Aplikasi POINT.ID Untuk Melakukan<br />Register dan
            menggunakan Fitur Get Poin
          </p>
          <br /><br />
          <v-img
            src="/assets/icon/GetPoint/image 2.png"
            max-width="186px"
            max-height="52px"
          ></v-img>
        </div>
      </v-col>
      <v-col md="6">
        <v-img
          src="/assets/icon/GetPoint/grup mockup miring.png"
          max-width="540px"
          max-height="623px"
        >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  layout: "user",
  data() {
    return {
      isLoged: false,
    };
  },
  // props: {
  //   isLoged: {
  //     type: Boolean,
  //     required: true,
  //   },
  // },
  methods: {
    login() {
      this.$router.push("/login");
    },
  },
  mounted() {
    let token = this.$cookies.get("userData");
    if (!token) {
      this.isLoged = false;
    } else {
      this.isLoged = true;
    }
  },
};
</script>

<style scoped>
span {
  width: 459px;
  height: 58px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;
}
.text-banner {
  font-size: 24px;
}
</style>
