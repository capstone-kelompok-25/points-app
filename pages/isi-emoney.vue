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
        label="Masukan Nomor Ponsel"
        single-line
        solo
        v-model="phoneNumber"
        type="text"
        :rules="numberRules"
      ></v-text-field>
      <h4>Pilih Dompet Digital</h4>
      <br />
      <v-row>
        <v-col v-for="(item, i) in tags" :key="i">
          <v-card
            width="180"
            class="rounded-card text-center"
            align="center"
            router
            link
            exact
            v-model="item.value"
            @click="getValuePayment(item.value)"
          >
            <v-card-title class="d-flex justify-center">
              <v-img :src="item.src" max-width="24px"></v-img>
              <span class="ml-1">{{ item.title }}</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <br /><br />
      <h4>Nominal</h4>
      <br />
      <v-row>
        <v-col v-for="(item, i) in nominal" :key="i" md="3">
          <v-card
            width="200"
            router
            link
            exact
            v-model="item.value"
            @click="getNominalSelected(item.value)"
          >
            <v-card-title> {{ item.harga }} </v-card-title>
            <v-card-title class="blue--text"> {{ item.poin }} </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-col md="3">
          <v-btn
            style="color: white"
            block
            color="blue"
            shaped
            x-large
            @click="save"
            :disabled="!validationForm"
          >
            Lanjut
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <br />
  </div>
</template>

<script>
export default {
  name: "IsiEmoneyPage",
  middleware: ["auth"],
  layout: "user",
  data: () => ({
    value: null,
    paymentSelected: "",
    nominalSelected: null,
    phoneNumber: "",
    numberRules: [
      (v) => v.length > 0 || "required",
      (v) => Number.isInteger(Number(v)) || "harus angka",
      (v) => v > 0 || "format salah",
    ],
    nominal: [
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
    tags: [
      {
        title: "Shoopepay",
        src: "/assets/icon/emoney/image 3.png",
        value: "SHOPEEPAY",
      },
      {
        title: "Link Aja!",
        src: "/assets/icon/emoney/image 6.png",
        value: "LINKAJA",
      },
      {
        title: "DANA",
        src: "/assets/icon/emoney/image 4.png",
        value: "DANA",
      },
      {
        title: "Gopay",
        src: "/assets/icon/emoney/image 2.png",
        value: "GOPAY",
      },
      {
        title: "OVO",
        src: "/assets/icon/emoney/image 5.png",
        value: "OVO",
      },
    ],
  }),
  methods: {
    getValuePayment(value) {
      this.paymentSelected = value;
    },
    getNominalSelected(value) {
      this.nominalSelected = value;
    },

    save() {
      this.$store.dispatch("Transaction/fetchDataEmoney", {
        Customer_id: this.$cookies.get("userData").id,
        bank_provider: this.paymentSelected,
        nomor: this.phoneNumber,
        an_rekening: this.$cookies.get("userData").fullname,
        amount: this.nominalSelected,
        poin_account: this.$cookies.get("userData").poin,
        poin_redeem: this.nominalSelected,
      });
      this.$router.push("/emoney/detail-transaction");
    },
  },
  computed: {
    totalPoint() {
      return this.$cookies.get("userData").poin;
    },
    dataEmoney() {
      return this.$store.state.Transaction.emoneyTransaction;
    },
    validationForm() {
      if (
        this.phoneNumber !== "" &&
        this.paymentSelected !== "" &&
        this.nominalSelected !== null
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50px;
}

p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  color: #3790fc;
}
</style>