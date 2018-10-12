import Vue from 'vue'
import App from './App.vue'

// import User from './components/User.vue';

export const eventBus =  new Vue({
  methods: {
    changeAge(age) {
      this.$emit("busAge", age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

