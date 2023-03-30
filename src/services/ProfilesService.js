import { Profile } from "../models/Account.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"


class ProfilesService {

    async getProfileById(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log(res.data, 'profile')
        AppState.activeProfile = new Profile(res.data)

    }

}

export const profilesService = new ProfilesService()