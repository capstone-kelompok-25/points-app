<template>
  <div class="bg">
    <p class="ml-2"><a href="/" style="text-decoration: none"> POINT.ID</a></p>
    <v-layout justify-center align-center>
      <v-flex shrink>
        <div v-if="isLogin" style="margin-left: -10px">
          <h3>Total Point Kamu</h3>
          <v-card height="60" width="75%" class="mb-10">
            <v-card-title>
              <v-img
                src="/assets/icon/emoney/Vector.png"
                max-width="30px"
                class="ml-1"
              ></v-img>
              <h3 class="ml-1">{{ poinCustomer }}</h3>
            </v-card-title>
          </v-card>
        </div>
        <v-row>
          <v-carousel height="auto" hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-row>

        <v-row class="text-center card-wrapper-homepage">
          <v-card
            dark
            color="#3790fc"
            class="indexCard"
            width="262px"
            @click="getPoint"
          >
            <br /><br />
            <v-img
              src="/assets/icon/LandingPage/qr-code.png"
              max-width="33px"
              class="mx-auto"
            ></v-img>
            <span>Get Point</span>
            <br /><br />
          </v-card>

          <v-card
            dark
            color="#3790fc"
            class="indexCard"
            width="262px"
            @click="isiEmoney"
          >
            <br /><br />
            <v-img
              src="/assets/icon/LandingPage/credit-card-2-back-fill.png"
              max-width="33px"
              class="mx-auto"
            ></v-img>
            <span>Redeem E-Money</span>
            <br /><br />
          </v-card>

          <v-card
            dark
            color="#3790fc"
            class="indexCard"
            width="262px"
            @click="isiCashout"
          >
            <br /><br />
            <v-img
              src="/assets/icon/LandingPage/E-Money.png"
              max-width="33px"
              class="mx-auto"
            ></v-img>
            <span>Redeem Cash-Out</span>
            <br /><br />
          </v-card>

          <v-card
            dark
            color="#3790fc"
            class="indexCard"
            width="262px"
            @click="isiPaketPulsa"
          >
            <br /><br />
            <v-img
              src="/assets/icon/LandingPage/pulsa.png"
              max-width="33px"
              class="mx-auto"
            ></v-img>
            <span>Redeem Pulsa/Paket Data</span>
            <br /><br />
          </v-card>
        </v-row>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "user",
  isLogin: false,
  data() {
    return {
      poinCustomer: "",
      items: [
        {
          src: require("../static/assets/icon/LandingPage/Banner.png"),
        },
        {
          src: require("../static/assets/icon/LandingPage/Banner.png"),
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
  computed: {
    // totalPoint() {
    //   return this.$cookies.get("userData").poin;
    // },
    // async totalPoint() {
    //   const header = {
    //     Authorization: "Bearer " + this.$cookies.get("userData").token,
    //     "Content-type": "application/json",
    //   };
    //   const response = await this.$axios.get(
    //     `${this.$axios.defaults.baseURL}/customer/${
    //       this.$cookies.get("userData").id
    //     }`,
    //     {
    //       headers: header,
    //     }
    //   );
    //   return response.data.result.poin;
    // },
  },
  async created() {
    let token = this.$cookies.get("userData");
    if (!token) {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }

    if (this.isLogin === true) {
      const header = {
        Authorization: "Bearer " + this.$cookies.get("userData").token,
        "Content-type": "application/json",
      };
      const response = await this.$axios.get(
        `${this.$axios.defaults.baseURL}/customer/${
          this.$cookies.get("userData").id
        }`,
        {
          headers: header,
        }
      );

      let saldo = response.data.result.poin;
      const format = saldo.toString().split("").reverse().join("");
      const convert = format.match(/\d{1,3}/g);
      this.poinCustomer = " " + convert.join(".").split("").reverse().join("");
    }
  },
};
</script>

<style scoped>
.card-wrapper-homepage {
  margin-top: 51px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(262px, 1fr));
  grid-gap: 20px;
}

.indexCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  /* flex: none;
  order: 0;
  flex-grow: 0; */
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790fc;
}

.carousel {
  height: 300px !important;
}
</style>
