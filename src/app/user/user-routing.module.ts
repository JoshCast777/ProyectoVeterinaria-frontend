import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppointmentIndexComponent } from "../appointment/pages/appointment-index/appointment-index.component";
import { PetIndexComponent } from "../pet/pages/pet-index/pet-index.component";
import { UserFormComponent } from "./pages/user-form/user-form.component";
import { UserIndexComponent } from "./pages/user-index/user-index.component";

const routes: Routes = [
	{
		path: "",
		component: UserIndexComponent,
		children: [
			{
				path: "",
				component: UserFormComponent
			},
			{
				path: "pets",
				component: PetIndexComponent
			},
			{
				path: "appointments",
				component: AppointmentIndexComponent
			},
			{
				path: "**",
				redirectTo: ""
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule {}
