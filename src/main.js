// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'vuetify/dist/vuetify.min.css'
@import '~vuetify/src/stylus/main'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
    data: () => ({
        items1: [
            { title: 'Home' },
            { title: 'Input' },
            { title: 'Output' }

        ]
        items2: [
            {
                nume_prenume: 'Ion Creanga',
                media: "10"
            },
            { divider: true, inset: true },
            {
                nume_prenume: 'Mihai Eminescu',
                media: "9"
            },
            { divider: true, inset: true },
            {
                nume_prenume: 'Lucian Blaga',
                media: "8"
            }
        ]
    })
})
