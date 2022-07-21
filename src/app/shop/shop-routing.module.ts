import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopCarritoComponent } from "./pages/shop-carrito/shop-carrito.component";
import { ShopExplorarComponent } from "./pages/shop-explorar/shop-explorar.component";
import { ShopFavoritosComponent } from "./pages/shop-favoritos/shop-favoritos.component";
import { ShopIndexComponent } from "./pages/shop-index/shop-index.component";

const routes: Routes = [
	{
		path: "",
		component: ShopIndexComponent,
		children: [
			{
				path: "",
				component: ShopExplorarComponent
			},
			{
				path: "carrito",
				component: ShopCarritoComponent
			},
			{
				path: "favoritos",
				component: ShopFavoritosComponent
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
export class ShopRoutingModule {}