/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Vue from 'vue';
import store from './store';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Register Vuex store as a global mixin
  Vue.mixin({
    beforeCreate() {
      this.$store = store;
    },
  });
  router.options.mode = 'hash'
  // ...apply other enhancements for the site.
}

