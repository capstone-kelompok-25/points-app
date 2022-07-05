<template>
  <section>
    <!-- <v-navigation-drawer v-model="sidebar" fixed app>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar v-if="!isLogin" class="navbar-component" dense>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>

      <img class="hidden-xs-only" src="../static/assets/icon/Vector.png" />
      <v-toolbar-title>
        <a class="ml-2 hidden-xs-only" href="/">Download Aplikasi Point.ID</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <span class="font-weight-medium">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar v-else class="navbar-component" dense>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>

      <img class="hidden-xs-only" src="../static/assets/icon/Vector.png" />
      <v-toolbar-title>
        <a class="ml-2 hidden-xs-only" href="/">Download Aplikasi Point.ID</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only align-center">
        <v-btn text v-for="item in menuLoged" :key="item.title" :to="item.path">
          <span class="font-weight-medium">{{ item.title }}</span>
        </v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on"> Akun Saya </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn text>Profile</v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text color="red" @click="openLogoutModal">Keluar</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-img
          class="my-2"
          width="27.5"
          height="27.5"
          :src="require(`../static/assets/icon/profile/user-icon.png`)"
        ></v-img>
      </v-toolbar-items>
    </v-toolbar>
    <v-dialog v-model="isOpenLogout" max-width="500px">
      <v-card>
        <br />
        <v-card-title class="text-h5 mx-auto d-flex justify-center"
          >Apakah Anda yakin ingin Logout?</v-card-title
        >
        <v-card-actions>
          <v-row>
            <br />
            <v-spacer></v-spacer>
            <v-col md="3">
              <v-btn block dark color="#92E057" @click="logout()">Ya</v-btn>
            </v-col>
            <v-col md="3">
              <v-btn block dark color="#FF565F" @click="isOpenLogout = false"
                >Tidak</v-btn
              >
            </v-col>
            <v-spacer></v-spacer>
            <br />
          </v-row>
        </v-card-actions>
        <br />
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      sidebar: false,
      isLogin: false,
      isOpenLogout: false,
      menuItems: [
        { title: "Beranda", path: "/" },
        { title: "Mitra Point.ID", path: "/mitra-pointid" },
        { title: "Login", path: "/login" },
        { title: "Register", path: "/register" },
      ],
      menuLoged: [
        { title: "Beranda", path: "/" },
        { title: "Mitra Point.ID", path: "/mitra-pointid" },
      ],
    };
  },
  created() {
    let token = this.$cookies.get("userData");
    if (!token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  },
  methods: {
    openLogoutModal() {
      this.isOpenLogout = true;
    },
    logout() {
      this.$store.dispatch("Authentication/fetchLogout");
      this.isOpenLogout = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-component {
  a {
    font-size: 0.875rem;
    color: #6c7380;
    text-decoration: none;
  }
}
</style>