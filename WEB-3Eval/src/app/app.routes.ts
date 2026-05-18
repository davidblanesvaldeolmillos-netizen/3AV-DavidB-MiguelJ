import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { CatalogoProductosComponent } from './components/catalogo-productos/catalogo-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'catalogo', component: CatalogoProductosComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: '**', component: NotFoundComponent }
];
