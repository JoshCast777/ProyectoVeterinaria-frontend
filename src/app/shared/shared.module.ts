import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from './button/button.component';

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SocialLinksComponent, HeaderPagesComponent, CardComponent, ButtonComponent],
	imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCardModule],
	exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCardModule, HeaderComponent, FooterComponent, HeaderPagesComponent, SocialLinksComponent, CardComponent, ButtonComponent]
})
export class SharedModule {}
