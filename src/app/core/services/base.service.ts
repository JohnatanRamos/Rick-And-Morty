import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  http = inject(HttpClient);

  apiUrl = 'https://rickandmortyapi.com/api/';

  getMethod(methodName: string, page: number, options: {}) {
    if (Object.keys(options).length === 0) {
      return this.http.get(this.apiUrl + methodName + `/?page=${page}`);
    }
    const query = new URLSearchParams(options).toString();
    return this.http.get(this.apiUrl + methodName + `/?page=${page}&${query}`);
  }
}
