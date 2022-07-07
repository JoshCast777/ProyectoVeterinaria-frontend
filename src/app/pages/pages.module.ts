import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";

@NgModule({
	declarations: [HomeComponent, AboutComponent, ServicesComponent],
	imports: [CommonModule, SharedModule]
})
export class PagesModule {}
