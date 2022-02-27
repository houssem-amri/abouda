import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { DashboardDoctorComponent } from './components/dashboard-doctor/dashboard-doctor.component';
import { EditDoctorComponent } from './components/edit-doctor/edit-doctor.component';
import { DisplayDoctorComponent } from './components/display-doctor/display-doctor.component';


const routes: Routes = [
  {path : "",component :HomeComponent},
  {path : "signup",component :SignupComponent},
  {path : "admin/signup",component :SignupComponent},
  {path : "login",component :LoginComponent}, 
  {path : "doctors",component: DoctorsComponent},
  {path : "addAdmin",component:AddAdminComponent},
  {path : "dashboardAdmin",component:DashboardAdminComponent},
  {path : "doctor",component:DoctorComponent},
  {path : "addDoctor",component:AddDoctorComponent},
  {path : "dashboardDoctor",component:DashboardDoctorComponent},
  {path : 'editDoctor/:id' , component : EditDoctorComponent},
  {path : 'displayDoctor/:id' , component : DisplayDoctorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
