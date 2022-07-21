import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AuthModule } from "./auth/auth.module";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";

import { MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import { UserModule } from "./user/user.module";
import { ShopModule } from "./shop/shop.module";
@NgModule({
	declarations: [AppComponent],
	imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, SharedModule, ShopModule, PagesModule, AuthModule, UserModule],
	providers: [
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackDrop: false
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
