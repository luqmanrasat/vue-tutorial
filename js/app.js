Vue.directive("changestyle0", {
  bind(e1, binding, vnode) {
    console.log(e1);
    e1.style.color="red";
    e1.style.fontSize="30px";
  }
});

Vue.directive("changestyle1", {
  bind(e1, binding, vnode) {
    console.log(e1);
    console.log(binding.value.color);
    console.log(vnode);
    e1.style.color = binding.value.color;
    e1.style.fontSize = "30px";
  }
});

var app = new Vue({
  el: '#vue-app',
  data: {
    name: ''
  },
  filters: {
    countletters: function(value) {
      return value.length;
    }
  }
});
