const state = () => ({
  emoneyTransaction: [],
  cashoutTransaction: [],
  pulsaTransaction: [],
  paketTransaction: [],
});

const mutations = {
  setEmoneyTransaction(state, param) {
    state.emoneyTransaction = param;
  },
  setCashoutTransaction(state, param) {
    state.cashoutTransaction = param;
  },
  setPulsaTransaction(state, param) {
    state.pulsaTransaction = param;
  },
  setPaketTransaction(state, param) {
    state.paketTransaction = param;
  },
};

const actions = {
  fetchDataEmoney(store, param) {
    this.$cookies.set("emoneyTransaction", param);
    store.commit("setEmoneyTransaction", param);
  },
  fetchDataCashout(store, param) {
    this.$cookies.set("cashoutTransaction", param);
    store.commit("setCashoutTransaction", param);
  },
  fetchDataPulsa(store, param) {
    this.$cookies.set("pulsaTransaction", param);
    store.commit("setPulsaTransaction", param);
  },
  fetchDataPaket(store, param) {
    this.$cookies.set("paketTransaction", param);
    store.commit("setPaketTransaction", param);
  },
};

export { state, mutations, actions };
