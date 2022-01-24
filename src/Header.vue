<template>
  <div class="header-nav">
    <div class="header-nav__menu container">
      <div v-html="logoHtml"></div>
      <el-button style="color: #fff;" type="text" @click="$emit('loginButtonClick')"
        >Login</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data: () => ({
    logoHtml: '<a class="logo" style="color: #fff;" href=" / "> </a>',
  }),
};
</script>

<style lang="scss">
.header-nav {
  background-color: #409EFF;
  padding: 8px 0;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url('./assets/images/logo_max.svg') 0 0/cover no-repeat;
  }
}
</style>