import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LoginModule } from "./login/login.module";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";
import { ShopModule } from "./shop/shop.module";


@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, PagesModule, LoginModule, ShopModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
