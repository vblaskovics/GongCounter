import { Component, inject, Signal } from '@angular/core';
import { CounterService } from './counter.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Counter } from './counter.model';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counterService = inject(CounterService);

  counters: Signal<Counter[] | undefined> = toSignal(this.counterService.getCounters$());
}
