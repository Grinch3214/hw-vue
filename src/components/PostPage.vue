<template>
  <div class="post-page">
    <div class="post">
      <h1> {{ post.title }} </h1>
      <p> {{ post.body }} </p>
      <span> {{ formatedPostDate }} </span>
      <hr>
    </div>
    <div class="comments">
        <div
          class="comments__item"
          v-for="list in commentsList"
          :key="list.id"
          :id="`comment-${list.id}`"
        >
          <h3> {{ list.name }} </h3>
          <span> {{ list.email }} </span>
          <p> {{ formatedCommentText(list.body) }} </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  data() {
    return {
      post: {
        id: 1,
        title: 'Eum et est occaecati',
        body: `Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        Ullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velitullam et saepe reiciendis voluptatem adipisci\nsit … ipsam iure\nquis sunt voluptatem rerum illo velit.
        `,
        postDate: new Date(),
      },
      commentsList: [
        {
          'postId': 1,
          'id': 1,
          'name': 'id labore ex et quam laborum',
          'email': 'Eliseo@gardner.biz',
          'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
        },
        {
          'postId': 1,
          'id': 2,
          'name': 'quo vero reiciendis velit similique earum',
          'email': 'Jayne_Kuhic@sydney.com',
          'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
        },
        {
          'postId': 1,
          'id': 3,
          'name': 'odio adipisci rerum aut animi',
          'email': 'Nikita@garfield.biz',
          'body': 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
        },
        {
          'postId': 1,
          'id': 4,
          'name': 'alias odio sit',
          'email': 'Lew@alysha.tv',
          'body': 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati'
        },
        {
          'postId': 1,
          'id': 5,
          'name': 'vero eaque aliquid doloribus et culpa',
          'email': 'Hayden@althea.biz',
          'body': 'harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et'
        }
      ],
    }
  },
  computed: {
    formatedPostDate() {
      const months = [
        'Января', 'Февраля', 'Марта',
        'Апреля', 'Мая', 'Июня', 'Июля',
        'Августа', 'Сентября', 'Октября',
        'Ноября', 'Декабря'
      ]
      const date = this.post.postDate
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      return `${day} ${months[month]}, ${year}`
    }
  },
  methods: {
    formatedCommentText(str) {
      const maxStr = 20
      const changeStr = str[0].toUpperCase() + str.slice(1)
      if(changeStr.length > maxStr) {
        let shortStr = changeStr.slice(0, maxStr - 1)
        shortStr = shortStr + '...'
        return shortStr
      }
      return changeStr
    },
  },
};
</script>

<style scoped lang="scss">
hr {
  border: 1px solid #000;
  margin-top: 3px;
}
.post span {
  display: inline-block;
  padding-top: 8px;
}
.comments__item p {
  margin-bottom: 15px;
}
</style>