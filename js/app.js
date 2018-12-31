var app = new Vue({
  el: '#vue-app',
  data: {
    show0: true,
    show1: true,
    show2: true,
    show3: true,
    show4: false,
    view: 'component1',
    styletrans: {
      fontSize:'30px',
      color:'red'
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
    },
    enter: function(el, done) {
      Velocity(el, { opacity: 1, fontSize: '25px' }, { duration: 1000 });
      Velocity(el, { fontSize: '10px' }, { complete: done });
    },
    leave: function(el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 1500 });
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
      Velocity(el, { rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0 }, { complete: done });
    }
  },
  components: {
    'component1': {
      template: '<div><span style="font-size: 25; color: red;">Animation on Components</span></div>'
    }
  }
});
