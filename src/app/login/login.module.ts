import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginIndexComponent } from "./pages/login-index/login-index.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule } from "@angular/forms";
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
	declarations: [LoginIndexComponent, LoginComponent, RegisterComponent, LogoComponent],
	imports: [CommonModule, SharedModule, FormsModule]
})
export class LoginModule {}
