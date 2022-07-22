import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShopIndexComponent } from './pages/shop-index/shop-index.component';
import { SharedModule } from "../shared/shared.module";
import { ProductContentComponent } from './components/card_product/card-product.component';
import { ShopCarritoComponent } from './pages/shop-carrito/shop-carrito.component';
import { ShopExplorarComponent } from './pages/shop-explorar/shop-explorar.component';
import { ShopFavoritosComponent } from './pages/shop-favoritos/shop-favoritos.component';
import { NavTiendaContentComponent } from './components/nav_tienda/nav-tienda.componente';
import { ContadorComponent } from './components/button_contador/button-contador.componente';
import { CardCarritoComponent } from './components/card_carrito.component/card-carrito.component';
import { RouterModule } from '@angular/router';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [
    ShopIndexComponent, ProductContentComponent, ShopCarritoComponent,ShopExplorarComponent,ShopFavoritosComponent,NavTiendaContentComponent, ContadorComponent, CardCarritoComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule,RouterModule,ShopRoutingModule
  ]
})
export class ShopModule { }
