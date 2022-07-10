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
            single-line
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
                @click="handleRedeemEmoney"
                :disabled="!isValid"
              >
                NEXT
              </v-btn>
              <v-dialog v-model="dialog" width="500">
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
      max-width="500"
    >
      <v-card>
        <v-card-title>Opss..</v-card-title>
        <v-card-subtitle>
          {{ statusMessage }}
        </v-card-subtitle>

        <v-divider> </v-divider>
        <v-card-actions class="justify-end">
          <v-btn dark color="#FF565F" @click="isError = false">Coba Lagi</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "ConfirmEmoneyPage",
  layout: "user",
  data() {
    return {
      dialog: false,

      userPin: "",
      isError: false,
      statusMessage: "",

      isValid: false,

      numberRules: [
        (v) => v.length > 3 || "pin terdiri dari 4 digit",
        (v) => Number.isInteger(Number(v)) || "format pin harus angka",
        (v) => v > 0 || "format pin salah",
      ],
    };
  },
  methods: {
    successTransaction() {
      this.$router.push("/");
    },
    async handleRedeemEmoney() {
      const header = {
        Authorization: "Bearer " + this.$cookies.get("userData").token,
        "Content-type": "application/json",
      };
      await this.$axios
        .post(
          `${this.$axios.defaults.baseURL}/emoney`,
          {
            Customer_id: this.$cookies.get("userData").id,
            bank_provider: this.emoneyTransaction.bank_provider,
            nomor: this.emoneyTransaction.nomor,
            an_rekening: this.$cookies.get("userData").fullname,
            amount: this.emoneyTransaction.amount,
            poin_account: this.$cookies.get("userData").poin,
            poin_redeem: this.emoneyTransaction.poin_redeem,
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
          this.$cookies.remove("emoneyTransaction");
        })
        .catch((err) => {
          if (err.response.data.code === 400) {
            this.isError = true;
            this.statusMessage = "Pin yang anda masukan tidak sesuai!";
          }
        });
    },
  },
  computed: {
    emoneyTransaction() {
      return this.$store.state.Transaction.emoneyTransaction;
    },
  },
};
</script>

<style>
</style>