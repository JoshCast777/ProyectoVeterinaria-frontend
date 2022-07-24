import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentIndexComponent } from './pages/appointment-index/appointment-index.component';
import { SharedModule } from '../shared/shared.module';
import { CRUDDATEComponent } from './components/crud-date/crud-date.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppointmentIndexComponent,
    CRUDDATEComponent,ConfirmDialogComponent
  ],
  imports: [
    CommonModule,SharedModule
  ]
})
export class AppointmentModule { }
