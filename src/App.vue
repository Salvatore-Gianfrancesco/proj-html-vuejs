<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import DemoItem from './components/DemoItem.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    DemoItem
  }
}
</script>

<template>
  <a name="go_up"></a>
  <!-- AppHeader -->
  <AppHeader />

  <!-- AppMain -->
  <AppMain />

  <!-- AppFooter -->
  <AppFooter />

  <!-- demo -->
  <DemoItem />
</template>

<style lang='scss'>

</style>