import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserIndexComponent } from "./pages/user-index/user-index.component";
import { SharedModule } from "../shared/shared.module";
import { UserFormComponent } from './pages/user-form/user-form.component';
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [UserIndexComponent, UserFormComponent],
	imports: [CommonModule, RouterModule, SharedModule, UserRoutingModule]
})
export class UserModule {}
