import { inject, Injectable } from '@angular/core';
import { Counter } from './counter.model';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  api = inject(ApiService)
  path = 'counters'

  getCounters$(): Observable<Counter[]> {
    return this.api.get<Counter[]>(this.path);
  }
}
