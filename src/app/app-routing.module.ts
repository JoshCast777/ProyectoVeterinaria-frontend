import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guards/auth.guard";

import { BlogIndexComponent } from "./blog/pages/blog-index/blog-index.component";
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
		loadChildren: () => import("./shop/shop.module").then(m => m.ShopModule),
	},

	{
		path: "user",
		loadChildren: () => import("./user/user.module").then(m => m.UserModule),
		canLoad: [AuthGuard],
		canActivate: [AuthGuard]
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
