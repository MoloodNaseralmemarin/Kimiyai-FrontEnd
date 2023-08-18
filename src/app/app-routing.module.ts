import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/account/login/login.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';


const appRoutes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'AdminPanel', component: AdminPanelComponent },

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
