<template>
  <div class="bg">
    <div class="d-flex">
      <p class="ml-2 mt-4">
        <a href="/" style="text-decoration: none"> POINT.ID</a>
      </p>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
    </div>
    <br />
    <h2 class="text-center mx-auto">Your Detail Transaction</h2>
    <v-card elevation="0" width="400" class="mx-auto" color="#F0F4F9">
      <v-card width="400" class="mx-auto">
        <br /><br />
        <v-card width="280" class="mx-auto" elevation="0">
          <v-card-title>{{ paketTransaction.an_rekening }}</v-card-title>
          <v-card-title class="blue--text">Transaksi Berlangsung</v-card-title>
          <v-card-text>
            <span>E-money - {{ paketTransaction.bank_provider }}</span
            ><br />
            <span>{{ paketTransaction.nomor }}</span
            ><br />
          </v-card-text>
          <v-card-title class="blue--text">POIN</v-card-title>
          <v-card-text>
            <span
              >Poin anda:
              {{ parsingMoney(paketTransaction.poin_account) }}</span
            ><br />
            <span
              >Poin yang akan Ditukar:
              {{ parsingMoney(paketTransaction.poin_redeem) }}</span
            ><br />
            <span
              >Sisa POIN:
              {{
                parsingMoney(
                  paketTransaction.poin_account - paketTransaction.poin_redeem
                )
              }}</span
            >
          </v-card-text>
        </v-card>
        <br /><br /><br />
      </v-card>
      <br />
      <v-row class="d-flex justify-end">
        <v-col md="4">
          <v-btn dark block color="blue" shaped x-large @click="paymentPIN">
            Redeem
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DetailTransactionPaket",
  data: () => ({
    items: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
      {
        text: "Redeem Pulsa/Paket Data",
        disabled: false,
        href: "/isi-paket-pulsa",
      },
      {
        text: "Detail Transaction",
        disabled: true,
        href: "/paket-data/detail-transaction",
      },
    ],
  }),
  layout: "user",

  methods: {
    paymentPIN() {
      this.$router.push("/paket-data/confirm");
    },
    parsingMoney(param) {
      const saldo = param;
      const format = saldo.toString().split("").reverse().join("");
      const convert = format.match(/\d{1,3}/g);
      const moneyFormat = convert.join(".").split("").reverse().join("");

      return moneyFormat;
    },
  },
  computed: {
    paketTransaction() {
      return this.$cookies.get("paketTransaction");
    },
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
</style>