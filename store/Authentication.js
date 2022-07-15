const state = () => ({
  userDataList: [],
});

const mutations = {
  setUserData(state, param) {
    state.userDataList = param;
  },
  clearDataUser(state) {
    state.userDataList = [];
  },
};

const actions = {
  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      `${this.$axios.defaults.baseURL}/customer`,
      {
        email: param.email,
        password: param.password,
      }
    );
    //   .then((res) => {
    //     localStorage.setItem("token", res.data.result.token);
    //     store.commit("setToken", res.data.result.token);
    //     this.$router.push("/");
    //   })
    //   .cacth((err) => {
    //     console.log(err);
    //   });
    this.$cookies.set("userData", response.data.result, {
      path: "/",
      maxAge: 60 * 60,
    });
    store.commit("setUserData", response.data.result);

    this.$router.push("/");
  },
  fetchLogout(store) {
    this.$cookies.remove("userData");
    store.commit("clearDataUser");
    window.location.href = "/";
  },
  async fetchDataCustomer(store, idCustomer) {
    const header = {
      Authorization: "Bearer " + this.$cookies.get("userData").token,
      "Content-type": "application/json",
    };
    const response = await this.$axios.get(
      `${this.$axios.defaults.baseURL}/customer/${idCustomer}`,
      {
        headers: header,
      }
    );
    store.commit("setUserData", response.data.result);
  },
};

export { state, mutations, actions };
