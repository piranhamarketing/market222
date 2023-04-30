import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PayslipComponent } from './payslip/payslip.component';
import { EmpleaveComponent } from './empleave/empleave.component';
import { PayslipPdfComponent } from './payslip-pdf/payslip-pdf.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';          
import { FilterPipe } from './empleave/filter.pipe';
import {MatCardModule} from '@angular/material/card';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PayslipComponent,
    EmpleaveComponent,
    PayslipPdfComponent,
    ErrorComponent,
    FilterPipe
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
