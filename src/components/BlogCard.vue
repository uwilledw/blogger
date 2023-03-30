<template>
    <div class="col-10 my-4 elevation-4 d-flex justify-content-between p-4 rounded bg-white">
        <div class="">
            <div class="d-flex align-items-center">
                <img class="img-fluid profile-img" :src="blog.creator.picture" :alt="blog.creator.name">
                <h5 class="mx-3">{{ blog.creator.name }}</h5>
            </div>
            <div>
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

export default {

    props: {
        blog: {
            type: Blog,
            required: true
        }
    },
    setup() {

        return {}
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
    widows: 20vh;
    border-radius: 5px;

}
</style>