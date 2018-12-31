var app = new Vue({
  el: '#vue-app',
  data: {
    output: "pisang"
  },
  methods: {
    readRefs: function() {
      this.output = this.$refs.input.value;
      console.log(this.$refs.test.innerText);
    }
  },
  computed: {}
});
