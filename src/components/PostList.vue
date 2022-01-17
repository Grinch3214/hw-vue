<template>
  <div class="post-list">
    <h2 v-once class="post-list__title">
      Начальное количество статей: {{ posts.length }}
    </h2>
    <post-card />
  </div>
</template>

<script>
export default {
  name: "PostList",
  components: {
    PostCard: () => import("./PostCard.vue"),
  },
  data: () => ({
    posts: [
      {
        userId: 1,
        id: 1,
        readMore: true,
        title:
          "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem test ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore.",
      },
      {
        userId: 1,
        id: 2,
        readMore: true,
        title:
          "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 1,
        id: 3,
        readMore: true,
        title:
          "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 1,
        id: 4,
        readMore: true,
        title:
          "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 1,
        id: 5,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 2,
        id: 6,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 2,
        id: 7,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 2,
        id: 8,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 2,
        id: 9,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 2,
        id: 10,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 3,
        id: 11,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 3,
        id: 12,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 3,
        id: 13,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 3,
        id: 14,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
      {
        userId: 3,
        id: 15,
        readMore: true,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusamus ratione ipsum est possimus, libero porro maxime enim perspiciatis distinctio quam neque repudiandae sequi a ut beatae illo ab quod! Minus, nesciunt ullam non beatae expedita repudiandae, voluptatibus est unde quas vero consequuntur. Esse, officiis ea. Amet iusto similique, reprehenderit perspiciatis quod consequuntur cupiditate magnam, esse, modi quos numquam harum libero reiciendis voluptates necessitatibus id repellat consequatur labore. Recusandae beatae eum earum vero officia dolor, accusantium expedita optio voluptas eos quas repellendus quae repellat ducimus ipsam voluptatum delectus rem totam! Accusantium pariatur exercitationem nesciunt necessitatibus, similique ea nobis quaerat consectetur tempora eum soluta autem temporibus quibusdam deserunt dolor saepe accusamus voluptate quo quod quia debitis. Dolorum corporis perferendis illo iure! Sunt, cum. Dolor explicabo voluptas fugiat asperiores quisquam ex rem. Earum ducimus maxime laborum cumque accusantium tenetur. Illum, aperiam, est modi itaque minima officiis odit blanditiis, voluptate facere expedita eius!",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.post-list h2 {
  font-size: 26px;
  color: #222822;
  margin-top: 26px;
  text-align: center;
}
</style>