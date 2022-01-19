<template>
  <div class="header-nav">
    <div class="header-nav__menu container">
      <div v-html="logoHtml"></div>
      <el-button type="primary" @click="$emit('loginButtonClick')"
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
    logoHtml: '<a style="color: #fff;" href=" / "> Logo MAX </a>',
  }),
};
</script>

<style lang="scss">
.header-nav {
  background-color: #409eff;
  padding: 8px 0;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  &__menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>