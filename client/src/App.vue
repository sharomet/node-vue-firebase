<template>
  <div id="app">

    <AppHeader></AppHeader>

    <router-view></router-view>

    <AppFooter></AppFooter>

  </div>
</template>

<script>
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
}
</script>