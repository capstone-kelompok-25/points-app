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
    <v-toolbar v-if="!isLoged" class="navbar-component" dense>
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
          <span class="btn font-weight-medium">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
      <v-btn color="#3790FC" class="white--text" elevation="0" to="/login"
        >Login</v-btn
      >
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
            <v-img
              class="my-2"
              width="27.5"
              height="27.5"
              v-bind="attrs"
              v-on="on"
              :src="require(`../static/assets/icon/profile/user-icon.png`)"
            ></v-img>
          </template>
          <v-list>
            <v-list-item>
              <v-btn
                text
                @click="
                  () => {
                    this.$router.push(`/profile/${customerId}`);
                  }
                "
                >Profile</v-btn
              >
            </v-list-item>
            <v-list-item>
              <v-btn dark color="#FF565F" @click="logout">Keluar</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </section>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: {
    isLoged: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sidebar: false,
      isOpenLogout: false,
      menuItems: [
        { title: "Beranda", path: "/" },
        { title: "Mitra Point.ID", path: "/mitra-pointid" },
      ],
      menuLoged: [
        { title: "Beranda", path: "/" },
        { title: "Mitra Point.ID", path: "/mitra-pointid" },
      ],
    };
  },
  computed: {
    customerId() {
      return this.$cookies.get("userData").id;
    },
  },
  // created() {
  //   let token = this.$cookies.get("userData");
  //   if (!token) {
  //     this.isLoged = false;
  //   } else {
  //     this.isLoged = true;
  //   }
  // },
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
span {
  color: #6c7380;
}
span:focus {
  color: #3790fc;
}
span:hover {
  color: #3790fc;
}
span:active {
  color: #3790fc;
}
.btn {
  color: #6c7380;
}
.btn:focus {
  color: #3790fc;
}
</style>