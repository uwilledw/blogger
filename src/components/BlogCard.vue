<template>
    <div class="col-10 my-4 elevation-4 d-flex justify-content-between align-items-center p-4 rounded bg-white">
        <div class="m-2">
            <div class="d-flex align-items-center p-3 selectable rounded mb-3">
                <img class="img-fluid profile-img" :src="blog.creator.picture" :alt="blog.creator.name">
                <h5 class="mx-3">{{ blog.creator.name }}</h5>
            </div>
            <div @click="setActiveBlog(blog.id)" data-bs-toggle="modal" data-bs-target="#blogModal"
                class="selectable p-1 rounded">
                <p class="fw-bold">{{ blog.title }}</p>
                <p>{{ blog.body.substring(0, 250) }} . . .</p>
            </div>
        </div>
        <div>
            <div>
                <img class="blog-img" :src="blog.imgUrl" alt="">
            </div>
        </div>

    </div>
</template>


<script>
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {

    props: {
        blog: {
            type: Blog,
            required: true
        }
    },
    setup() {

        return {

            setActiveBlog(blogId) {
                try {
                    blogsService.setActiveBlog(blogId)
                } catch (error) {
                    logger.log(error.message)
                    Pop.error(error.message)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
}

.blog-img {
    height: 20vh;
    width: auto;
    border-radius: 5px;

}
</style>