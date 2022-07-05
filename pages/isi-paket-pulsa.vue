<template>
  <div class="bg">
    <p class="ml-2"><a href="/" style="text-decoration: none"> POINT.ID</a></p>
    <v-card color="#F0F4F9" width="900" class="mx-auto" elevation="0">
      <h3>Total Point Kamu</h3>
      <v-card height="60">
        <v-card-title>
          <v-img
            src="/assets/icon/emoney/Vector.png"
            max-width="30px"
            class="ml-1"
          ></v-img>
          <h3 class="ml-1">{{ totalPoint }}</h3>
        </v-card-title>
      </v-card>
      <br />
      <h4>Nomor Ponsel</h4>
      <v-text-field
        label="Masukan Nomor Ponsel Anda"
        singel-line
        solo
        v-model="phoneNumber"
      ></v-text-field>
      <h4>Pilih Provider</h4>
      <v-row>
        <v-col md="3">
          <v-autocomplete
            v-model="valueProvider"
            :items="items"
            solo
            label="Provider"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <v-btn block id="pulsaButton" class="active" @click="pulsashow"
            >Pulsa</v-btn
          >
        </v-col>
        <v-col md="6">
          <v-btn block id="paketButton" @click="paketshow">Paket Data</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-row v-if="show1">
            <v-col v-for="(item, i) in pulsa" :key="i" md="6">
              <v-card
                width="200"
                router
                link
                exact
                @click="getNominalPulsa(item.value)"
              >
                <v-card-title> {{ item.harga }} </v-card-title>
                <v-card-title> {{ item.poin }} </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-row v-if="show2">
            <v-col v-for="(item, i) in paket" :key="i">
              <v-card
                width="435"
                router
                link
                exact
                @click="getValuePaket(item)"
              >
                <v-card-title>
                  {{ item.internet }}
                  <v-spacer></v-spacer>
                  <a class="blue--text">Lihat Detail</a>
                </v-card-title>
                <v-card-text>
                  <span>{{ item.kuota }}</span
                  ><br />
                  <span>{{ item.poin }}</span>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-col md="3">
          <v-btn
            dark
            block
            color="blue"
            shaped
            x-large
            @click="handleRedeemPulsa"
          >
            NEXT
          </v-btn>
          <br />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "IsiPaketPulsaPage",
  middleware: ["auth"],
  layout: "user",
  data: () => ({
    items: ["Telkomsel", "Axis", "Indosat", "Three"],
    valueProvider: null,
    nominalPulsa: null,
    phoneNumber: "",
    show1: true,
    show2: false,
    amountSelected: null,
    pointReedemSelected: null,
    pulsa: [
      {
        harga: "Rp. 50.000",
        poin: "50.000 POIN",
        value: 50000,
      },
      {
        harga: "Rp. 100.000",
        poin: "100.000 POIN",
        value: 100000,
      },
      {
        harga: "Rp. 150.000",
        poin: "150.000 POIN",
        value: 150000,
      },
      {
        harga: "Rp. 200.000",
        poin: "200.000 POIN",
        value: 200000,
      },
      {
        harga: "Rp. 250.000",
        poin: "250.000 POIN",
        value: 250000,
      },
      {
        harga: "Rp. 300.000",
        poin: "300.000 POIN",
        value: 300000,
      },
      {
        harga: "Rp. 350.000",
        poin: "350.000 POIN",
        value: 350000,
      },
      {
        harga: "Rp. 400.000",
        poin: "400.000 POIN",
        value: 400000,
      },
    ],
    paket: [
      {
        internet: "Internet",
        kuota: "15 GB",
        poin: "15.000 POIN",
        amount: 15,
        pointReedem: 15000,
      },
      {
        internet: "Internet",
        kuota: "20 GB",
        poin: "20.000 POIN",
        amount: 20,
        pointReedem: 20000,
      },
      {
        internet: "Internet",
        kuota: "25 GB",
        poin: "25.000 POIN",
        amount: 25,
        pointReedem: 25000,
      },
      {
        internet: "Internet",
        kuota: "30 GB",
        poin: "30.000 POIN",
        amount: 30,
        pointReedem: 30000,
      },
    ],
  }),
  methods: {
    pulsashow() {
      let elPulsa = document.getElementById("pulsaButton");
      elPulsa.classList.add("active");
      let elPaket = document.getElementById("paketButton");
      elPaket.classList.remove("active");
      (this.show1 = true), (this.show2 = false);
    },
    paketshow() {
      let elPaket = document.getElementById("paketButton");
      elPaket.classList.add("active");
      let elPulsa = document.getElementById("pulsaButton");
      elPulsa.classList.remove("active");
      (this.show1 = false), (this.show2 = true);
    },
    async handleRedeemPulsa() {
      const header = {
        Authorization: "Bearer " + this.$cookies.get("userData").token,
        "Content-type": "application/json",
      };
      if (this.show1 === true) {
        await this.$axios
          .post(
            `${this.$axios.defaults.baseURL}/pulsa`,
            {
              customer_id: this.$cookies.get("userData").id,
              bank_provider: this.valueProvider,
              nomor: this.phoneNumber,
              an_rekening: this.$cookies.get("userData").fullname,
              amount: this.nominalPulsa,
              poin_account: this.$cookies.get("userData").poin,
              poin_redeem: this.nominalPulsa,
            },
            {
              headers: header,
            }
          )
          .then((res) => {
            console.log(res);
            this.$router.push("/detail-transaction");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        await this.$axios
          .post(
            `${this.$axios.defaults.baseURL}/paketdata`,
            {
              customer_id: this.$cookies.get("userData").id,
              bank_provider: this.valueProvider,
              nomor: this.phoneNumber,
              an_rekening: this.$cookies.get("userData").fullname,
              amount: this.amountSelected,
              poin_account: this.$cookies.get("userData").poin,
              poin_redeem: this.pointReedemSelected,
            },
            {
              headers: header,
            }
          )
          .then((res) => {
            console.log(res);
            this.$router.push("/detail-transaction");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    getNominalPulsa(value) {
      this.nominalPulsa = value;
    },
    getValuePaket(item) {
      this.amountSelected = item.amount;
      this.pointReedemSelected = item.pointReedem;
    },
  },
  computed: {
    totalPoint() {
      return this.$cookies.get("userData").poin;
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<style scoped>
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790fc;
}

.active {
  background-color: #2196f3 !important;
  color: white;
}
</style>