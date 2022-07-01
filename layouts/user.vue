<template>
  <v-app>
      <div>
      <v-app-bar
      color="#F3F4F5DB"
      dense
      elevation="0"
    >
      <img src="../static/assets/icon/Vector.png">
      <v-toolbar-title>
        <span class="ml-2">Download Aplikasi Point.ID</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <a class="black--text mr-5">
        Beranda
      </a>

      <a class="black--text mr-5 ml-5">
        Mitra Point.ID
      </a>

      <a class="black--text mr-5 ml-5">
        Login
      </a>

      <a class="black--text mr-5 ml-5">
        Register
      </a>

    </v-app-bar>
    </div>
      <v-main>
        <Nuxt />
      </v-main> 
    <v-divider></v-divider>    
    <v-footer 
    padless
    color="#FFFFFF"
    >
    <v-row>
      <v-col cols="12" sm="3" md="3">
        <v-card
        class="ml-5"
        elevation="0"
        max-width="200"
        >
          <v-card-title class="ml-5">
            Point.ID
          </v-card-title>
          <v-card-subtitle class="ml-5">
            <span>Syarat dan Ketentuan</span><br>
            <span>Kebijakan dan Privasi</span><br>
            <span>Mitra Kami</span><br>
            <span>Tentang Kami</span><br>
            <span>FAQ</span>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3" md="3">
        <v-card
        class=""
        elevation="0"
        >
          <v-card-title class="ml-2">
            Ikuti Kami
          </v-card-title>
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
          <img src="">
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" 
        class="mx-auto" align="center">
      <v-card
        class="mx-auto"
        elevation="0"
        >
        <v-card-text>
          <img src="../static/assets/icon/pointid-logo.jpg" width="120">
          <span>2022 PT. Point.ID</span>
        </v-card-text>
          <v-card-text>
            <v-btn
              dark
              color="#3790FC"
            >
              Indonesia
            </v-btn>
            <v-btn
              text
              dark
              diasbled
              class="ml-5"
              color="black"
            >
              English
            </v-btn>
          </v-card-text>
          <img src="">
        </v-card>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "userLayout",
  data() {
    return {
      icons: [
        'mdi-instagram',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-facebook',
      ],
    }}
};
</script>

<style>
.bg {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #F0F4F9;
}
</style>