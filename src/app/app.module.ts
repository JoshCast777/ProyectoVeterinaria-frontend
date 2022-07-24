import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from "./pages/pages.module";
import { LoginModule } from "./login/login.module";
import { AppointmentModule } from "./appointment/appointment.module";


@NgModule({
	declarations: [AppComponent],
	imports: [AppointmentModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, PagesModule, LoginModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
