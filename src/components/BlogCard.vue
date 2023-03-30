<template>
    <div class="col-10 my-4 elevation-4">
        <div class="d-flex">
            <img class="img-fluid profile-img" :src="blog.creator.picture" :alt="blog.creator.name">
            <h1>{{ blog.creator.name }}</h1>
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


<style lang="scss" scoped></style>