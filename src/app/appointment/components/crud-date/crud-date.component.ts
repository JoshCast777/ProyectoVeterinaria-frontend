import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeriodicElement } from '../../pages/appointment-index/appointment-index.component';

@Component({
  selector: 'app-crud-date',
  templateUrl: './crud-date.component.html',
  styleUrls: ['./crud-date.component.css']
})
export class CRUDDATEComponent implements OnInit {

  element!: PeriodicElement;
  isChange!: boolean;

  cita = new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    fecha: new FormControl('', Validators.required),
    mascota: new FormControl('', Validators.required),
    motivo: new FormControl('', Validators.required)
  })

  constructor(@Inject(MAT_DIALOG_DATA)
  public data: PeriodicElement,
  public dialogRef: MatDialogRef<CRUDDATEComponent>,) { }

  
  ngOnInit(): void {
    if (this.data.position != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
