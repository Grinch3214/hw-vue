<template>
  <div id="app" class="app">
    <post-list />
    <post-card />
    <app-pop-up v-if="show" @closePopUpEvent="closePopUpEvent" />
    <app-button />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    PostList,
    PostCard: () => import('./components/PostCard.vue')
  },
  data:() => ({
      show: false
  }),
  methods: {
      closePopUpEvent(event) {
        console.log(event)
          this.show = false
      }
  },
};
</script>
