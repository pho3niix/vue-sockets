import Vue from 'vue'
// import Vuetify from 'vuetify';
import Vuetify,{VBtn, VApp} from 'vuetify/lib';
import {Ripple} from 'vuetify/lib/directives'

Vue.use(Vuetify,{
    components:{
        VBtn,
        VApp
    },
    directives:{
        Ripple
    }

})

const opts = {}

export default new Vuetify(opts)