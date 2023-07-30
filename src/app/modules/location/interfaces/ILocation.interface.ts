export interface IResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface ILocation extends IResourceBase {
  type: string;
  dimension: string;
  residents: string[];
}
