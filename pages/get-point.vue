<template>
  <div class="bg">
    <v-row>
        <v-col md="6" class="d-flex justify-end align-center">
            <div class="mr-16">
            <v-img src="/assets/icon/GetPoint/Grup slogan.png"
                max-width="405px"
                max-height="166px"
            ></v-img>
            <br />
            <span>Download Aplikasi untuk menggunakan<br />Fitur Get Poin</span>
            <br /><br />
            <v-img src="/assets/icon/GetPoint/image 2.png"
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
  layout: 'user',
};
</script>

<style scoped>
span {
    width: 459px;
    height: 58px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

color: #000000;
}

</style>
