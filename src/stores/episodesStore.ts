import apiClient from '@/utils/requestsUtils'
import { defineStore } from 'pinia'
import { clearText } from '@/utils/stringUtils'
import { useCharacterStore } from './charactersStore'
import { IEpisode } from '@/types/episode'
import { IAPIResponse, IAPIResponseInfo } from '@/types/apiResponse'

export const useEpisodeStore = defineStore('episode', {
  state: () => ({
    episodes: [] as IEpisode[],
    multipleEpisodes: [] as IEpisode[],
    episode: {} as IEpisode,
    responseInfo: {} as IAPIResponseInfo,
    loading: false,
    loadingDetail: false,
    alertVisible: false,
    alertText: '',
    alertType: '' as 'error' | 'success' | 'warning' | 'info' | undefined,
    alertTitle: '',
  }),

  getters: {
    getEpisodes: state => (state.episodes),
    getMultipleEpisode: (state): IEpisode[] => (state.multipleEpisodes),
    getEpisode: (state): IEpisode => (state.episode),
    getResponseInfo: (state): IAPIResponseInfo => (state.responseInfo),
    getLoading: (state): boolean => (state.loading),
    getLoadingDetail: (state): boolean => (state.loadingDetail),
  },

  actions: {
    async fetchEpisodes (payload: { page?: number; params?: any }): Promise<void> {
      try {
        this.loading = true
        this.episodes = []

        const { data } = await apiClient.get<IAPIResponse>('/episode', {
          params: {
            page: payload.page || 1,
            ...payload.params,
          },
        })

        this.responseInfo = data.info as IAPIResponseInfo
        this.episodes = data.results as IEpisode[]
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Episodes not found'
      } finally {
        this.loading = false
      }
    },

    async fetchOneEpisode (episodeId: number): Promise<void> {
      try {
        this.loadingDetail = true
        this.episode = {}
        const characterStore = useCharacterStore()

        const { data } = await apiClient.get<IEpisode>(`/episode/${episodeId}`)
        const charactersIds = (data.characters || []).map((characterUrl: String) => clearText(characterUrl))

        await characterStore.fetchMultipleCharacters(charactersIds)

        this.episode = {
          ...data,
        } as IEpisode
        this.episode.episodeCharacters = characterStore.getMultipleCharacters
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Warning'
        this.alertType = 'warning'
        this.alertText = 'Episode not found'
      } finally {
        this.loading = false
      }
    },

    async fetchMultipleEpisodes (episodesIds: number[]): Promise<void> {
      try {
        const { data } = await apiClient.get(`/episode/${JSON.stringify(episodesIds)}`)

        this.multipleEpisodes = data as IEpisode[]
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Episodes not found'
      }
    },
  },
})
