import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Documentacao } from './pages/documentacao/documentacao';
import { Sobre } from './pages/sobre/sobre';
import { Tuturiais } from './pages/tuturiais/tuturiais';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,Home,Documentacao,Sobre,Tuturiais,Header,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portal');
}
