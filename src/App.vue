<template>
  <div id="app" class="contain">
    <my-nav/>
    <my-sidebar/>
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
    <my-footer/>
  </div>
</template>

<script>

  import Nav      from './components/Nav.vue';
  import Sidebar  from './components/Sidebar.vue';
  import Footer   from './components/Footer.vue';

  export default {
    name: 'app',
    components: {
      myNav:      Nav,
      mySidebar:  Sidebar,
      myFooter:   Footer
    }
  };

</script>

<style>

.contain {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  position: relative;
}

</style>
