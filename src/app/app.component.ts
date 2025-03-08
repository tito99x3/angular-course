import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cambio de titulo desde el componente';

  numero = 0

  sumar() {
    this.numero += 1 
  }

  restar() {
    this.numero -=1
  }
}
