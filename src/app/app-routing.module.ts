import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './clinet/pages/home/home.component';
import { PortfolioPageComponent } from './clinet/pages/portfolio-page/portfolio-page.component';

const routes: Routes = [
  {path: '', component: PortfolioPageComponent},
  {path: 'list', component: PortfolioPageComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/admin/admin.module').then((m) => m.AdminModule)
    },
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
