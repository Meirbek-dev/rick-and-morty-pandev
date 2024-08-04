import { defineStore } from 'pinia'
import { clearText } from '@/utils/stringUtils'
import { ICharacter } from '@/types/character'
import { IAPIResponse, IAPIResponseInfo } from '@/types/apiResponse'
import apiClient from '@/utils/requestsUtils'
import { useEpisodeStore } from './episodesStore'
import { useLocationStore } from './locationsStore'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [] as ICharacter[],
    multipleCharacters: [] as ICharacter[],
    character: {} as ICharacter,
    responseInfo: {} as IAPIResponseInfo,
    loading: false,
    loadingDetail: false,
    alertVisible: false,
    alertText: '',
    alertType: '' as 'error' | 'success' | 'warning' | 'info' | undefined,
    alertTitle: '',
  }),

  getters: {
    getCharacters: state => state.characters,
    getMultipleCharacters: state => state.multipleCharacters,
    getCharacter: (state): ICharacter => state.character,
    getResponseInfo: (state): IAPIResponseInfo => state.responseInfo,
    getLoading: (state): boolean => state.loading,
    getLoadingDetail: (state): boolean => state.loadingDetail,
  },

  actions: {
    async fetchCharacters (payload: { page?: number, params?: any }): Promise<void> {
      this.loading = true
      try {
        this.characters = []

        const { data } = await apiClient.get<IAPIResponse>('/characters', {
          params: {
            page: payload.page || 1,
            ...payload.params,
          },
        })
        this.responseInfo = data.info as IAPIResponseInfo
        this.characters = data.results as ICharacter[]
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Characters not found'
      } finally {
        this.loading = false
      }
    },

    async fetchOneCharacter (characterId: number): Promise<void> {
      this.loadingDetail = true
      try {
        this.character = {}
        const episodeStore = useEpisodeStore()
        const locationStore = useLocationStore()

        const { data } = await apiClient.get<ICharacter>(`/character/${characterId}`)
        const episodesIds = data?.episode ? data?.episode.map(episode => (clearText(episode))) : []
        const locationId = data?.location ? clearText(String(data?.location?.url)) : 0
        const originId = data?.origin ? clearText(String(data?.origin?.url)) : 0

        await episodeStore.fetchMultipleEpisodes(episodesIds)
        await locationStore.fetchMultipleLocations([locationId, originId])

        this.character = {
          ...data,
        } as ICharacter
        this.character.episodes = episodeStore.getMultipleEpisode
        this.character.locationCharacter = locationStore.getMultipleLocations.find(location => location.id === locationId)
        this.character.originCharacter = locationStore.getMultipleLocations.find(location => location.id === originId)
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Character not found'
      } finally {
        this.loading = false
      }
    },

    async fetchMultipleCharacters (charactersIds: number[]): Promise<void> {
      try {
        const { data } = await apiClient.get(`/character/${JSON.stringify(charactersIds)}`)
        this.multipleCharacters = (data || []) as ICharacter[]
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Characters not found'
      } finally {
        this.loading = false
      }
    },

    hideAlert () {
      this.alertVisible = false
      this.alertText = ''
    },
  },
})
