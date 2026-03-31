import { Routes } from '@angular/router';
import { Tuturiais } from './pages/tuturiais/tuturiais';
import { Documentacao } from './pages/documentacao/documentacao';
import { Sobre } from './pages/sobre/sobre';
import { Home } from './pages/home/home';


export const routes: Routes = [
     {path:'',component:Home},
    {path:'tutoriais',component:Tuturiais},
    {path:'documentacao',component:Documentacao},
    {path:'sobre',component:Sobre},
];
