import { IResourceBase } from 'src/app/core/interfaces/IResourceBase.interface';

export interface ICharacter extends IResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
}

export interface ICharacterLocation {
  name: string;
  url: string;
}
