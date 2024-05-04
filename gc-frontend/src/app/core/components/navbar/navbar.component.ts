import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <header>
      <nav class="pico-background-blue-50">
        <div class="container">
          <ul>
            <li><strong>Go Counter App</strong></li>
          </ul>
        </div>
      </nav>
    </header>
  `,
})
export class NavbarComponent {}
