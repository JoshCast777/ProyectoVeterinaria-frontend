import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from "@angular/material/card";
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table' 
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { HeaderPagesComponent } from './header-pages/header-pages.component';
import { CardComponent } from "./card/card.component";
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
	declarations: [HeaderComponent, FooterComponent, SocialLinksComponent, HeaderPagesComponent, CardComponent, ButtonComponent],
	imports: [MatTableModule,MatNativeDateModule,MatDatepickerModule,FormsModule,BrowserAnimationsModule,CommonModule, RouterModule, MatCheckboxModule,MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCardModule, MatTabsModule, MatFormFieldModule,MatInputModule, MatDialogModule, ReactiveFormsModule, MatSnackBarModule],
	exports: [FormsModule,MatNativeDateModule,MatDatepickerModule,MatTableModule,MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, HeaderComponent, FooterComponent, HeaderPagesComponent, SocialLinksComponent, CardComponent, ButtonComponent, ReactiveFormsModule,MatCheckboxModule,MatDialogModule, MatSnackBarModule]
})
export class SharedModule {}
