<template>
  <div id="app" class="container">
    <div class="row py-4">
      <navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>