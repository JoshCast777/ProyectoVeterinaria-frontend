import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ServicesContentComponent } from './services/services-content/services-content.component';
import { HeaderHomeComponent } from "./home/header-home/header-home.component";
import { MainHomeComponent } from "./home/main-home/main-home.component";
import { HeaderAboutComponent } from './about/header-about/header-about.component';
import { MainAboutComponent } from './about/main-about/main-about.component';

@NgModule({
	declarations: [HomeComponent, AboutComponent, ServicesComponent, ServicesContentComponent, HeaderHomeComponent, MainHomeComponent, HeaderAboutComponent, MainAboutComponent],
	imports: [CommonModule, SharedModule]
})
export class PagesModule {}
