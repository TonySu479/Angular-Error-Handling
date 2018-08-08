import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home.component';
import { PageComponent } from './features/page/page.component';

import { PageResolver } from './core/resolvers/page.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'page',
    component: PageComponent,
    resolve: {
      data: PageResolver,
    }
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
