import { Status } from '@/types/character'

export const getIconColor = (status: Status): string => {
  switch (status) {
    case Status.Alive:
      return 'light-green-6'
    case Status.Dead:
      return 'red'
    case Status.Unknown:
      return 'amber'
    default:
      return ''
  }
}
