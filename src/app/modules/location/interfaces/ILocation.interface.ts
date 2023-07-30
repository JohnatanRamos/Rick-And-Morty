import { IResourceBase } from "src/app/core/interfaces/IResourceBase.interface";

export interface ILocation extends IResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}
