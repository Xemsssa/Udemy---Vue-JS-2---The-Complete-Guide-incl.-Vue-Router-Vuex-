import Vue from 'vue'
import App from './App.vue'

Vue.filter("toLowercase",(val) => {
   return val.toLowerCase();
});


Vue.mixin({
    created() {
      console.log("Globally created mixin");1
    }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
