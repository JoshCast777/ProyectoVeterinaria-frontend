import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthIndexComponent } from "./pages/auth-index/auth-index.component";
import { RegisterComponent } from "./pages/register/register.component";
import { SharedModule } from "../shared/shared.module";
import { LoginComponent } from "./pages/login/login.component";
import { LogoComponent } from "./components/logo/logo.component";

@NgModule({
	declarations: [AuthIndexComponent, LoginComponent, RegisterComponent, LogoComponent],
	imports: [CommonModule, SharedModule]
})
export class AuthModule {}
