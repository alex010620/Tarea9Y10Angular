import {RouterModule, Routes} from '@angular/router'
import { HomeComponent } from '../app/componentes/home/home.component';
import { ProductosComponent } from '../app/componentes/productos/productos.component';
import { RegClientesComponent } from '../app/componentes/reg-clientes/reg-clientes.component';
import { VentasComponent } from '../app/componentes/ventas/ventas.component';

const app_routes: Routes= [
  {path: 'home', component: HomeComponent },
  {path: 'ventas', component: VentasComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'reg-clientes', component: RegClientesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
]

export const app_routing = RouterModule.forRoot(app_routes);
