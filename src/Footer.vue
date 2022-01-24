<template>
  <div class="footer-nav">
    <div class="container" v-html="linkToMyProfile"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    linkToMyProfile:
      "<p>Created by <a style='color: #fff; text-decoration: underline;' target='_blank' href='https://github.com/Grinch3214'>Max</a></p>",
  }),
};
</script>

<style lang="scss">
.footer-nav {
  background-color: #409EFF;
  color: #fff;
  padding: 14px 0;
  text-align: center;
}
</style>