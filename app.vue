<template>
  <button v-for="post in posts" :key="post" @click="fetchPostData(post.id)">
    {{ post.title }}
  </button>
  <div v-if="currentPost">
    <h1>{{ currentPost.title }}</h1>
    <p>{{ currentPost.content }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const fetchPostData = (id) => {
      store.dispatch("fetchDataFromServer", id);
    };
    const currentPost = computed(() => {
      return store.state.posts.currentPost;
    });
    return {
      fetchPostData,
      currentPost,
      posts: [
        {
          id: 1,
          title: "post #1",
        },
        {
          id: 2,
          title: "post #2",
        },
        {
          id: 3,
          title: "post #3",
        },
      ],
    };
  },
  methods: {
    fetchPostData(id) {
      //   this.$store.commit("setPostId", id);
      this.$store.dispatch("fetchDataFromServer", id);
    },
  },
};
</script>
