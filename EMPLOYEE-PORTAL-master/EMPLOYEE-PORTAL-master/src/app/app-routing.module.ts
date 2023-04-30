import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleaveComponent } from './empleave/empleave.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PayslipPdfComponent } from './payslip-pdf/payslip-pdf.component';
import { PayslipComponent } from './payslip/payslip.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'',component:LoginComponent,title:'Login-Page'},
  {path:'profile',component:ProfileComponent,title:'Profile'},
  {path:'payslip',component:PayslipComponent,title:'Payslip'},
  {path:'pdf',component:PayslipPdfComponent,title:'Payslip-PDF'},
  {path:'empleave',component:EmpleaveComponent,title:'Employee-Leave'},
  {path:'**',component:ErrorComponent,title:'Error'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
