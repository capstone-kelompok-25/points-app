<template>
  <div class="bg">
    <v-row class="mx-auto" align="center">
      <v-col md="6" class="mx-auto text-center">
        <v-img src="/assets/icon/logo.png" max-width="300" class="mx-auto"></v-img>
        <span class="mx-auto text-center">Silahkan Masukan pin<span class="blue--text"> POIN.ID</span> anda</span
        >
        <v-text-field
          label="Masukan PIN Anda"
          singel-line
          solo
        ></v-text-field>
        <v-row class="d-flex justify-end">
          <v-col md="3">
            <v-btn 
            dark 
            block 
            color="blue" 
            shaped 
            x-large 
            
            @click.stop="dialog = true">
              NEXT
            </v-btn>
            <v-dialog
              v-model="dialog"
              width="910px"
              height="615px"
            >
              <v-card class="mx-auto">
                <span> SELAMAT, transaksi kamu berhasil</span>
                <div>
                  <v-img src="/assets/icon/Succeess Animation.png"></v-img>
                </div>
              </v-card>
            </v-dialog>
            <br>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationPinPage',
  layout: 'user',
  data(){
    return {
      dialog: false,
    }
  },
  methods: {
    successTransaction(){
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>