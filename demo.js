/**
 * Created by Jikai Zhang on 2017/4/28.
 */
import Vue from  "vue"
import demo from "./demo.vue"
Vue.component("demo", demo);

var app = new Vue({
    el: '#app',
    data: {
        "hello": "Hello World",
        "hi": "Hi"
    }

});