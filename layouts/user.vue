<template>
  <v-app>
    <navbar-component :isLoged="isLogin" />

    <v-main>
      <Nuxt />
    </v-main>
    <v-divider></v-divider>
    <v-footer class="container footer-wrapper" color="#FFFFFF">
      <v-col class="footer-left-side">
        <v-row>
          <v-col>
            <ul>
              <span class="footer-title-item black--text">Point.ID</span>
              <li><a href=""> Syarat dan Ketentuan</a></li>
              <li><a href=""> Kebijakan dan Privasi </a></li>
              <li><a href=""> Mitra Kami</a></li>
              <li><a href=""> Tetang Kami </a></li>
              <li><a href=""> FAQ </a></li>
            </ul>
          </v-col>
          <v-col>
            <span class="ml-6 footer-title-item black--text">Ikuti Kami</span>
            <v-card-text>
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="ml-2 black--text"
                icon
              >
                <v-icon size="36px">
                  {{ icon }}
                </v-icon>
              </v-btn>
            </v-card-text>
            <v-img
              @click="redirectToApp()"
              width="186"
              class="ml-6"
              :src="
                require(`../static/assets/icon/LandingPage/playstore-logo.png`)
              "
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="3" class="footer-right-side">
        <v-row class="align-center">
          <img src="../static/assets/icon/pointid-logo.jpg" width="120" />
          <span>2022 PT. Point.ID</span>
        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import NavbarComponent from "@/components/Navbar.vue";

export default {
  name: "userLayout",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      icons: ["mdi-instagram", "mdi-twitter", "mdi-linkedin", "mdi-facebook"],
      isLogin: false,
    };
  },
  methods: {
    redirectToApp() {
      this.$router.push("/");
    },
  },
  created() {
    let token = this.$cookies.get("userData");
    if (!token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
};
</script>

<style lang="scss" >
// footer
.footer-wrapper {
  background-color: white;
  display: flex;
  .footer-left-side {
    padding-right: 373px;
  }
  .footer-right-side {
    padding-top: 30px;
  }
  .footer-title-item {
    font-size: 1.1875rem;
    font-weight: 600;
  }
  ul {
    list-style: none;
    a {
      color: #949494;
      text-decoration: none;
    }
  }
}
</style>