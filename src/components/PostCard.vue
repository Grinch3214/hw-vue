<template>
  <div class="post-card">
    <el-card shadow="always" :style="{ margin: '8px 0' }">
      <h3 class="post-card__card-title">{{ post.title }}</h3>
      <p v-if="readMore" class="post-card__card-body">
        {{ formatedCommentText }}
      </p>
      <p v-else class="post-card__card-body">{{ post.body }}</p>

      <el-button @click="readMore = !readMore" type="text">{{
        textShow
      }}</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  components: {},
  props: {
    post: {
      type: Object,
      require: true,
      default() {
        return {
          userId:1,
          id:1,
          title: 'Some default title',
          body: 'Some default text',
          validator: (obj) => {
            const properties = [
              'title',
              'body'
            ].filter(prop => !obj.hasOwnProp(prop))
            return properties.length === 0
          }
        }
      }
    }
  },
  data() {
    return {
      readMore: true,
    };
  },
  computed: {
    textShow() {
      if (this.readMore) {
        return "Read more";
      }
      return "Hide";
    },
    formatedCommentText() {
      return this.post.body.slice(0, 120) + "...";
    },
  },
};
</script>

<style lang="scss">
.post-card {
  padding: 0 15px;
  max-width: 600px;
  margin: 25px auto;
  &__title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  &__card-title {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 14px;
  }
  &__card-body {
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>