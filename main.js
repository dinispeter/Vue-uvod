Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{todo.text}}</li>"
})

new Vue({
  el: "#app",
  data: {
    test: "Toto je testovacia správa",
    message: "Napíš niečo",
    seen: false,
    groceryList: [
      { id: 0, text: 'Spraviť úlohy' },
      { id: 1, text: 'Ísť nakúpiť' },
      { id: 2, text: 'Stretnúť sa s kamarátom' }
    ]
  },

  methods: {
    reverseMessage: function() {
      this.test = this.test.split("").reverse().join("")
    }
  }
})
