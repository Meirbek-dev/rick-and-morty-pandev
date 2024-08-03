// import { ILocation } from '@/types/location'
// import { IAPIResponse, IAPIResponseInfo } from '@/types/apiResponse'
// import apiClient from '@/utils/requestsUtils'
// import { defineStore } from 'pinia'
// import { clearText } from '@/utils/stringUtils'
// import { useCharacterStore } from './charactersStore'

// export const useLocationStore = defineStore('location', {
//   state: () => ({
//     locations: [] as ILocation[],
//     multipleLocations: [] as ILocation[],
//     location: {} as ILocation,
//     responseInfo: {} as IAPIResponseInfo,
//     loading: false,
//     loadingDetail: false,
//   }),

//   getters: {
//     getLocations: (state): ILocation[] => (state.locations),
//     getMultipleLocations: (state): ILocation[] => (state.multipleLocations),
//     getLocation: (state): ILocation => (state.location),
//     getResponseInfo: (state): IAPIResponseInfo => (state.responseInfo),
//     getLoading: (state): boolean => (state.loading),
//     getLoadingDetail: (state): boolean => (state.loadingDetail),
//   },

//   actions: {
//     async fetchLocations (payload: { page?: number, params?: any }): Promise<void> {
//       this.loading = true
//       try {
//         this.locations = []

//         const { data } = await apiClient.get<IAPIResponse>('/location', {
//           params: {
//             page: payload.page || 1,
//             ...payload.params,
//           },
//         })

//         this.responseInfo = data.info as IAPIResponseInfo
//       } catch (error) {
//         // showAlert('Locations not found', 'negative')
//         console.log(error)
//       } finally {
//         this.loading = false
//       }
//     },

//     async fetchLocation (locationId: number): Promise<void> {
//       this.loadingDetail = true
//       try {
//         this.location = {}
//         const characterStore = useCharacterStore()

//         const { data } = await apiClient.get<ILocation>(`/location/${locationId}`)
//         const charactersIds = (data.residents || []).map(characterUrl => clearText(characterUrl))

//         if (charactersIds.length) {
//           await characterStore.fetchMultipleCharacters(charactersIds)
//         }

//         this.location = {
//           ...data,
//         } as ILocation
//         this.location.locationResidents = characterStore.getMultipleCharacters
//       } catch (error) {
//         showAlert('Location not found', 'warning')
//       } finally {
//         this.loadingDetail = false
//       }
//     },

//     async fetchMultipleLocations (locationsIds: number[]): Promise<void> {
//       try {
//         const { data } = await apiClient.get<ILocation[]>(`/location/${JSON.stringify(locationsIds)}`)
//         console.log(data)
//       } catch (error) {
//         showAlert('Locations not found', 'negative')
//       }
//     },
//   },
// })
