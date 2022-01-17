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
  data() {
    return {
      readMore: true,
      post: {
        userId: 1,
        id: 2,
        title:
          "Sunt post card aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
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