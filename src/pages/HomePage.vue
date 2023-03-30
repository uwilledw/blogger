<template>
  <div class="container-fluid">
    <section class="row justify-content-center" v-for="blog in blogs" :key="blog.id">
      <BlogCard :blog="blog" />
    </section>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';

export default {

  setup() {
    onMounted(() => AppState.activeProfile = null)
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }


    onMounted(() => {
      getBlogs()
    })

    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
