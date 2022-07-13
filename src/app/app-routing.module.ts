import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BlogIndexComponent } from "./blog/pages/blog-index/blog-index.component";
import { LoginIndexComponent } from "./login/pages/login-index/login-index.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ShopIndexComponent } from "./shop/pages/shop-index/shop-index.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "about",
		component: AboutComponent
	},
	{
		path: "services",
		component: ServicesComponent
	},
	{
		path: "blog",
		component: BlogIndexComponent
	},
	{
		path: "store",
		component: ShopIndexComponent
	},
	{
		path: "",
		redirectTo: "",
		pathMatch: "full"
	},
	{
		path: "**",
		redirectTo: ""
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
