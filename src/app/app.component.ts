import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuerpoRecetaComponent } from './cuerpo-receta/cuerpo-receta.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CuerpoRecetaComponent,EncabezadoComponent,PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecetaApp';
}
