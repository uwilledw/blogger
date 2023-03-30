<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-10">

      </div>
    </section>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js'
import { onMounted } from 'vue';

export default {

  setup() {

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

    return {}
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
