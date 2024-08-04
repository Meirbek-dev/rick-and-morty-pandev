import { ICharacter } from './character'
import { IEpisode } from './episode'
import { ILocation } from './location'

export type IAPIResponseInfo = {
  count?: number
  pages?: number
  next?: string
  prev?: null
}

export type IAPIResponse = {
  info?: IAPIResponseInfo
  results?: ICharacter[] | IEpisode[] | ILocation[]
}
