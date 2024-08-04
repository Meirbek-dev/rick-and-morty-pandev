import apiClient from '@/utils/requestsUtils'
import { defineStore } from 'pinia'
import { IAPIResponse, IAPIResponseInfo } from '@/types/apiResponse'
import { ILocation } from '@/types/location'
import { clearText } from '@/utils/stringUtils'
import { useCharacterStore } from './charactersStore'

export const useLocationStore = defineStore('location', {
  state: () => ({
    locations: [] as ILocation[],
    multipleLocations: [] as ILocation[],
    location: {} as ILocation,
    responseInfo: {} as IAPIResponseInfo,
    loading: false,
    loadingDetail: false,
    alertVisible: false,
    alertText: '',
    alertType: '' as 'error' | 'success' | 'warning' | 'info' | undefined,
    alertTitle: '',
  }),

  getters: {
    getLocations: (state): ILocation[] => (state.locations),
    getMultipleLocations: (state): ILocation[] => (state.multipleLocations),
    getLocation: (state): ILocation => (state.location),
    getResponseInfo: (state): IAPIResponseInfo => (state.responseInfo),
    getLoading: (state): boolean => (state.loading),
    getLoadingDetail: (state): boolean => (state.loadingDetail),
  },

  actions: {
    async fetchLocations (payload: { page?: number, params?: any }): Promise<void> {
      try {
        this.loading = true
        this.locations = []

        const { data } = await apiClient.get<IAPIResponse>('/location', {
          params: {
            page: payload.page || 1,
            ...payload.params,
          },
        })

        this.responseInfo = data.info as IAPIResponseInfo
        this.locations = data.results as ILocation[]
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Locations not found'
      } finally {
        this.loading = false
      }
    },

    async fetchOneLocation (locationId: number): Promise<void> {
      try {
        this.loadingDetail = true
        this.location = {}
        const characterStore = useCharacterStore()

        const { data } = await apiClient.get<ILocation>(`/location/${locationId}`)
        const charactersIds = (data.residents || []).map(characterUrl => clearText(characterUrl))

        if (charactersIds.length) {
          await characterStore.fetchMultipleCharacters(charactersIds)
        }

        this.location = {
          ...data,
        } as ILocation
        this.location.locationResidents = characterStore.getMultipleCharacters
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Location not found'
      } finally {
        this.loadingDetail = false
      }
    },

    async fetchMultipleLocations (locationsIds: number[]): Promise<void> {
      try {
        const { data } = await apiClient.get<ILocation[]>(`/location/${JSON.stringify(locationsIds)}`)

        this.multipleLocations = data
      } catch (error) {
        this.alertVisible = true
        this.alertTitle = 'Error'
        this.alertType = 'error'
        this.alertText = 'Locations not found'
      }
    },
  },
})
