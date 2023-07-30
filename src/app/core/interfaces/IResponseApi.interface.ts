export interface IResponseApi {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: any[];
}
