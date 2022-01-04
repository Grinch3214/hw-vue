<template>
  <div id="app" class="app">
    <post-page />
  </div>
</template>

<script>
import PostPage from "./components/PostPage.vue";

export default {
  name: "App",
  components: {
    PostPage,
  },
};
</script>
