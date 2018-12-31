var app = new Vue({
  el: '#vue-app',
  data: {
    show: false,
    items: [],
    styleiter: {
      width: "30%",
      padding: "12px 20px",
      margin: "8px 0",
      boxSizing: "border-box"
    }
  },
  methods: {
    showpara: function() {
      this.show = !this.show;
    },
    showinputvalue: function(event) {
      this.items.push(event.target.value);
    }
  },
  computed: {}
});
