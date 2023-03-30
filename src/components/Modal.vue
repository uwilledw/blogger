<template>
  <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-3 mb-2" id="exampleModalLabel">{{ blog?.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <img :src="blog?.imgUrl" :alt="blog?.title" class="img-fluid mb-2 blog-img rounded">

          <div class="d-flex justify-content-around row">
            <div class="col-4">
              <h6>Created By: <img :src="blog?.creator.picture" :alt="blog?.creator.name" class="profileImg"> {{
                blog?.creator?.name }}</h6>
            </div>
            <div class="row">
              <div class="col-12 text-start">
                {{ blog.body }}
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-2">Created At:{{ blog?.createdAt }}</div>
            </div>
          </div>
          <!-- TODO - get all images/comments related to this blog -->
          <!-- <img class="blog-img my-3" v-for="p in blog?.blogImgs" :key="p" :src="p" alt=""> -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
export default {
  setup() {
    return {
      blog: computed(() => AppState.activeBlog)
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-img {
  height: auto;
  width: 100vh;
  object-fit: cover;
  object-position: center;

}

.profileImg {
  border-radius: 50%;
  height: 5vh;
}
</style>
