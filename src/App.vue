<template>
  <div id="app" class="app">
    <Header />
    <div class="container main">
      <app-button @appButtonClick="appButtonClick" />
      <post-list />
      <app-pop-up
        v-if="show"
        @closePopUpEvent="closePopUpEvent"
        @backPopUpEvent="backPopUpEvent"
        @continuePopUpEven="continuePopUpEven"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "App",
  components: {
    PostList,
    Header,
    Footer,
  },
  data: () => ({
    show: false,
  }),
  methods: {
    closePopUpEvent() {
      console.log("closePopUpEvent");
      this.show = false;
    },
    appButtonClick() {
      this.show = true;
      console.log("appButtonClick");
    },
    backPopUpEvent() {
      console.log("backPopUpEvent");
    },
    continuePopUpEven() {
      console.log("continuePopUpEven");
    },
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.main {
  flex-grow: 1;
}
</style>
