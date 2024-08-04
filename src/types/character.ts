type ILocationInfo = {
  name: string;
  url: string;
}

export type ICharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ILocationInfo;
  location: ILocationInfo;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'Unknown'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Genderless = 'Genderless',
  Unknown = 'Unknown'
}
