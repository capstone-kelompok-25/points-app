<template>
  <div class="bg">
    <br />
    <h2 class="text-center mx-auto">Your Detail Transaction</h2>
    <v-card elevation="0" width="400" class="mx-auto" color="#F0F4F9">
      <v-card width="400" class="mx-auto">
        <br /><br />
        <v-card width="280" class="mx-auto" elevation="0">
          <v-card-title>{{ pulsaTransaction.an_rekening }}</v-card-title>
          <v-card-title class="blue--text">Transaksi Berlangsung</v-card-title>
          <v-card-text>
            <span>Pulsa - {{ pulsaTransaction.bank_provider }}</span
            ><br />
            <span>Nomor Handphone - {{ pulsaTransaction.nomor }}</span
            ><br />
          </v-card-text>
          <v-card-title class="blue--text">POIN</v-card-title>
          <v-card-text>
            <span>Poin anda: {{ pulsaTransaction.poin_account }}</span
            ><br />
            <span
              >Poin yang akan Ditukar: {{ pulsaTransaction.poin_redeem }}</span
            ><br />
            <span>amount POIN: {{ pulsaTransaction.amount }}</span>
          </v-card-text>
        </v-card>
        <br /><br /><br />
      </v-card>
      <br />
      <v-row class="d-flex justify-end">
        <v-col md="4">
          <v-btn dark block color="blue" shaped x-large @click="paymentPIN">
            NEXT
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "DetailTransactionPulsa",
  layout: "user",

  methods: {
    paymentPIN() {
      this.$router.push("/pulsa/confirm");
    },
  },
  computed: {
    pulsaTransaction() {
      return this.$cookies.get("pulsaTransaction");
    },
    // paketTransaction() {
    //   return this.$cookies.get("paketTransaction");
    // },
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