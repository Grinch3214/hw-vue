<template>
  <div id="app" class="app" :class="{ active: showLoginPopUp }">
    <Header @loginButtonClick="loginButtonClick" />
    <div class="container main">
      <app-button @appButtonClick="appButtonClick" />
      <post-list />
      <app-pop-up
        v-if="show"
        @closePopUpEvent="closePopUpEvent"
        @backPopUpEvent="backPopUpEvent"
        @continuePopUpEven="continuePopUpEven"
      />
      <login-pop-up v-if="showLoginPopUp" @closePopUp="closePopUp"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import LoginPopUp from "./components/LoginPopUp.vue";

export default {
  name: "App",
  components: {
    PostList,
    Header,
    Footer,
    LoginPopUp,
  },
  data: () => ({
    show: false,
    showLoginPopUp: false,
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
    loginButtonClick() {
      this.showLoginPopUp = true;
    },
    closePopUp() {
      this.showLoginPopUp = false;
    }
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  &.active {
    overflow: hidden;
  }
}
.main {
  flex-grow: 1;
}
</style>
