import { IResourceBase } from 'src/app/core/interfaces/IResourceBase.interface';

export interface IEpisode extends IResourceBase {
  air_date: string;
  episode: string;
  characters: string[];
}
