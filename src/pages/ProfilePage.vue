<template>
    <div class="container-fluid">
        <div>
            <img :src="profile?.picture" :alt="profile?.name">
            <h1>{{ profile?.name }}</h1>
        </div>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js'
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
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

        onMounted(() => {
            getProfileById()
        })

        return {
            profile: computed(() => AppState.activeProfile)
        }
    }
}
</script>


<style lang="scss" scoped></style>