var app = new Vue({
  el: "#usuarios",

  data() {
    return {
      users: [],
      selectedUser: null,
    };
  },

  mounted() {
    this.loadUsers();
  },

  methods: {
    loadUsers() {
      fetch("https://reqres.in/api/users?per_page=10")
        .then((response) => response.json())
        .then((dados) => {
          this.users = dados.data;
        })
        .catch((erro) => {
          console.error("Erro ao carregar usuários:", erro);
        });
    },

    abrirModal(user) {
      this.selectedUser = user;
    },

    fecharModal() {
      this.selectedUser = null;
    },
  },
});
