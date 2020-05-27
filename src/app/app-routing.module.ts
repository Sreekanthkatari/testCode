import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path : '', redirectTo : 'login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
    
      { path: 'add-user', component: AddUserComponent },
      { path: 'edit-user', component: EditUserComponent },
     
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
