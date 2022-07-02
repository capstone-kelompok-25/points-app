<template>
  <div class="bg">
  <p class="ml-2">POINT.ID</p>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <v-row>
          <v-carousel height="auto" hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-row>
        <br />
        <v-row class="text-center">
          <v-col md="3">
            <v-card dark class="indexCard" width="262px" @click="getPoint">
              <br><br>
              <v-img src="/assets/icon/LandingPage/qr-code.png" max-width="33px" class="mx-auto"></v-img>
              <span>Get Point</span>
              <br><br>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card dark class="indexCard" width="262px" @click="isiEmoney">
              <br><br>
              <v-img src="/assets/icon/LandingPage/credit-card-2-back-fill.png" max-width="33px" class="mx-auto"></v-img>
              <span>Redeem E-Money</span>
              <br><br>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card dark class="indexCard" width="262px" @click="isiCashout">
              <br><br>
              <v-img src="/assets/icon/LandingPage/E-Money.png" max-width="33px" class="mx-auto"></v-img>
              <span>Redeem Cash-Out</span>
              <br><br>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card dark class="indexCard" width="262px" @click="isiPaketPulsa">
              <br><br>
              <v-img src="/assets/icon/LandingPage/pulsa.png" max-width="33px" class="mx-auto"></v-img>
              <span>Redeem Pulsa/Paket Data</span>
              <br><br>
            </v-card>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'user',
  data() {
    return {
      items: [
        {
          src: require('../static/assets/icon/LandingPage/Banner.png'),
        },
        {
          src: require('../static/assets/icon/LandingPage/Banner.png'),
        },
      ],
    };
  },
  methods: {
    getPoint() {
      this.$router.push("/get-point");
    },
    isiPaketPulsa() {
      this.$router.push("/isi-paket-pulsa");
    },
    isiCashout() {
      this.$router.push("/isi-cashout");
    },
    isiEmoney() {
      this.$router.push("/isi-emoney");
    },
  },
};
</script>

<style scoped>
.indexCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  background: #3790FC;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  
  flex: none;
  order: 0;
  flex-grow: 0;
}
p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790FC;
}

.carousel {
  height: 300px !important;
}
</style>
