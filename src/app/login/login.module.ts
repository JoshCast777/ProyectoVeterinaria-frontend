import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginIndexComponent } from './pages/login-index/login-index.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    LoginIndexComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule, SharedModule
  ]
})
export class LoginModule { }
