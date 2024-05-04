import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = "http://localhost:8000"

  http = inject(HttpClient);

  get<T>(route: string) {
    return this.http.get<T>(`${this.baseUrl}/${route}`);
  }
}
