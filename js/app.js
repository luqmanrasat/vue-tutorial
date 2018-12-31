const Route1 = { template: '<div class="box box--rounded box--cyan">This is router 1</div>' };
const Route2 = { template: '<div class="box box--rounded box--green">This is router 2</div>' };
const routes = [
  { path: '/route1', component: Route1 },
  { path: '/route2', component: Route2}
];
const router = new VueRouter({
  routes // short for 'routes: routes'
});

var vm = new Vue({
  el: '#vue-app',
  router
});
