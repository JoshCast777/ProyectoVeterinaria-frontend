import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "./modules/material.module";

import { ImagePipe } from "./pipes/image.pipe";

import { AccordionComponent } from "./components/accordion/accordion.component";
import { ButtonComponent } from "./components/button/button.component";
import { CardComponent } from "./components/card/card.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GridCardComponent } from "./components/grid-card/grid-card.component";
import { HeaderComponent } from "./components/header/header.component";
import { HeaderPagesComponent } from "./components/header-pages/header-pages.component";
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { SocialLinksComponent } from "./components/social-links/social-links.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { TextButtonComponent } from "./components/text-button/text-button.component";
import { TitleComponent } from "./components/title/title.component";
import { SearchComponent } from "./components/search/search.component";


@NgModule({
	declarations: [ImagePipe, AccordionComponent, ButtonComponent, CardComponent, FooterComponent, GridCardComponent, HeaderComponent, HeaderPagesComponent, MobileHeaderComponent, SocialLinksComponent, TabsComponent, TextButtonComponent, TitleComponent, SearchComponent],
	imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
	exports: [ReactiveFormsModule, RouterModule, MaterialModule, ImagePipe, AccordionComponent, ButtonComponent, CardComponent, FooterComponent, GridCardComponent, HeaderComponent, HeaderPagesComponent, MobileHeaderComponent, SocialLinksComponent, TabsComponent, TextButtonComponent, TitleComponent,SearchComponent]
})
export class SharedModule {}
