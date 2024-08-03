import { ICharacter } from './character'
import { IEpisode } from './episode'
import { ILocation } from './location'

export interface IAPIResponseInfo {
  count?: number
  pages?: number
  next?: string
  prev?: null
}

export interface IAPIResponse {
  info?: IAPIResponseInfo
  results?: ICharacter[] | IEpisode[] | ILocation[]
}
