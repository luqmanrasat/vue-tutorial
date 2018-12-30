Vue.component('greeting', {
  template: '<p>I am a reusable component. Name: {{ name }} <button @click="changeName">Change name</button></p>',
  data: function() {
    return {
      name: 'Luffy'
    };
  },
  methods: {
    changeName: function() {
      this.name = 'Zoro';
    }
  }
});

var one = new Vue({
  el: '#vue-app-one',
  data: {},
  methods: {},
  computed: {}
});

var two = new Vue({
  el: '#vue-app-two',
  data: {},
  methods: {},
  computed: {}
});
