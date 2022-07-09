import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ServicesContentComponent } from './services/services-content/services-content.component';
import { TextButtonComponent } from '../shared/text-button/text-button.component';

@NgModule({
	declarations: [HomeComponent, AboutComponent, ServicesComponent, ServicesContentComponent, TextButtonComponent],
	imports: [CommonModule, SharedModule]
})
export class PagesModule {}