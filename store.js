import { createStore } from "vuex";
import { testPosts } from "../../Micro_blog/microblog/testPosts.js";

const delay = () => new Promise((res) => setTimeout(res, 1000));

const posts = {
  nameSpaced: true,
  state() {
    return {
      currentPost: null,
    };
  },
  mutations: {
    setPost(state, post) {
      state.currentPost = post;
    },
  },
  actions: {
    async fetchDataFromServer(ctx, id) {
      const post = testPosts.find((post) => {
        return post.id === id;
      });

      ctx.commit("setPost", post);
    },
  },
};

export const store = createStore({
  modules: {
    posts,
  },
});
