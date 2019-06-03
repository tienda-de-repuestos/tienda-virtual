import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
