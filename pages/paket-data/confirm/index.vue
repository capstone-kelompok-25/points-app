<template>
  <div class="bg">
    <v-row class="mx-auto" align="center">
      <v-col md="6" class="mx-auto text-center">
        <v-img
          src="/assets/icon/new logo.png"
          max-width="300"
          class="mx-auto"
        ></v-img>
        <span class="mx-auto text-center"
          >Silahkan Masukan pin<span class="blue--text"> POIN.ID</span>
          anda</span
        >
        <v-form v-model="isValid">
          <v-text-field
            label="Masukan PIN Anda"
            singel-line
            solo
            v-model="userPin"
            :rules="numberRules"
          ></v-text-field>
          <v-row class="d-flex justify-end">
            <v-col md="3">
              <v-btn
                style="color: white"
                block
                color="blue"
                shaped
                x-large
                @click="handleRedeemPulsa"
                :disabled="!isValid"
              >
                Lanjut
              </v-btn>
              <v-dialog v-model="dialog" width="501px">
                <v-card class="mx-auto pa-6">
                  <h3 class="text-center">
                    Transaksi kamu sedang di proses, info lebih detail silahkan
                    cek melalui aplikasi POINT.ID
                  </h3>
                  <div>
                    <v-img
                      class="mx-auto"
                      width="205"
                      src="/assets/icon/Succeess Animation.png"
                    ></v-img>
                  </div>
                </v-card>
              </v-dialog>
              <br />
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
    <br /><br />
    <v-dialog
      v-model="isError"
      transition="dialog-top-transition"
      max-width="501px"
    >
      <v-card>
        <v-card-title>Opss..</v-card-title>
        <v-card-subtitle>
          {{ statusMessage }}
        </v-card-subtitle>

        <v-card-actions class="justify-end">
          <v-btn dark color="#FF565F" @click="isError = false">Coba Lagi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmPaketPage",
  layout: "user",
  data() {
    return {
      dialog: false,

      isValid: false,
      numberRules: [
        (v) => v.length > 3 || "pin terdiri dari 4 digit",
        (v) => Number.isInteger(Number(v)) || "format pin harus angka",
        (v) => v > 0 || "format pin salah",
      ],

      userPin: "",
      isError: false,
      statusMessage: "",
    };
  },
  methods: {
    successTransaction() {
      this.$router.push("/");
    },
    async handleRedeemPulsa() {
      const header = {
        Authorization: "Bearer " + this.$cookies.get("userData").token,
        "Content-type": "application/json",
      };
      await this.$axios
        .post(
          `${this.$axios.defaults.baseURL}/paketdata`,
          {
            customer_id: this.$cookies.get("userData").id,
            bank_provider: this.paketTransaction.bank_provider,
            nomor: this.paketTransaction.nomor,
            an_rekening: this.$cookies.get("userData").fullname,
            amount: this.paketTransaction.amount,
            poin_account: this.$cookies.get("userData").poin,
            poin_redeem: this.paketTransaction.poin_redeem,
            pin: parseInt(this.userPin),
          },
          {
            headers: header,
          }
        )
        .then((res) => {
          if (res.data.code === 200) {
            this.dialog = true;

            setTimeout(() => {
              this.dialog = false;
              this.$router.push("/");
            }, 5000);
          }
          this.$cookies.remove("paketTransaction");
        })
        .catch((err) => {
          if (err.response.data.messages === "wrong pin") {
            this.isError = true;
            this.statusMessage = "Pin yang ada masukan tidak sesuai!";
          } else if (err.response.data.messages === "out of stock") {
            this.isError = true;
            this.statusMessage = "Stok tidak tersedia";
          }
        });
    },
  },
  computed: {
    paketTransaction() {
      return this.$store.state.Transaction.paketTransaction;
    },
  },
};
</script>

<style>
</style>