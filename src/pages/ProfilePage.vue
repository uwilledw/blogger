<template>
    <div class="container-fluid">
        <section class="row m-5">
            <div class="col-10 d-flex justify-items-center">
                <h1>
                    <img class="mx-3 profile-img" :src="profile?.picture" :alt="profile?.name">
                    {{ profile?.name }}
                </h1>
            </div>
        </section>
        <section class="row">
            {{ blogs }}
        </section>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';

export default {
    setup() {

        const route = useRoute()

        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                await profilesService.getProfileById(profileId)
            } catch (error) {
                logger.log(error.message)
                Pop.error(error.message)
            }
        }

        async function getBlogsForProfile() {
            try {
                const profileId = route.params.profileId
                await blogsService.getBlogsForProfile(profileId)
            } catch (error) {
                logger.log(error.message)
                Pop.error(error.message)
            }
        }

        onMounted(() => {
            getProfileById()
            getBlogsForProfile()
        })

        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-img {
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
}
</style>