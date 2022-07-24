import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import { CRUDDATEComponent } from '../../components/crud-date/crud-date.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
	position: number;
	nombre: string;
	apellido: string;
	fecha: string;  
	tipo: string;
	motivo: string;  
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
	{position: 1, nombre: 'jose', apellido: 'lema', fecha: '06-07-2022' ,tipo: 'perro', motivo: 'Cosulta medica'},
	{position: 2, nombre: 'juan', apellido: 'lema', fecha: '01-01-2012' ,tipo: 'gato', motivo: 'Cosulta medica'},
	{position: 3, nombre: 'roberto', apellido: 'lema', fecha: '08-07-2022' ,tipo: 'perro' , motivo: 'Cosulta medica'},
	
  ];

@Component({
	selector: "app-appointment-index",
	templateUrl: "./appointment-index.component.html",
	styleUrls: ["./appointment-index.component.css"]
})

export class AppointmentIndexComponent implements OnInit {	
	
	@ViewChild(MatTable)
	table!: MatTable<any>;
	displayedColumns: string[] = ['position', 'nombre', 'apellido', 'fecha', 'tipo-mascota', 'motivo','actions'];
	dataSource = ELEMENT_DATA;	
	constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}
   
	ngOnInit(): void {     
	}
  
	openDialog(element: PeriodicElement | null): void {
	  const dialogRef = this.dialog.open(CRUDDATEComponent, {
		
		data: element === null ? {
		  position: null,
		  nombre: '',
		  apellido: '',
		  fecha: '',  
		  tipo: '',
		  motivo: ''
		} : { 
		  position: element.position,
		  nombre: element.nombre,
		  apellido: element.apellido,
		  fecha: element.fecha,
		  tipo: element.tipo,
		  motivo: element.motivo
		}
	  });
  
	  dialogRef.afterClosed().subscribe(result => {
		if (result !== undefined) {
		  if (this.dataSource.map(p => p.position).includes(result.position)) {
			this.dataSource[result.position -1] = result;
			this.table.renderRows();
			
		  }else{
			this.dataSource.push(result);
			this.table.renderRows(); 
			this.confirmacion();
		  }

		}
	 });
   } 
   
	  deleteElement(position: number): void { 
		this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
			this.dataSource = this.dataSource.filter(p => p.position != position);
			this.error();
        }
      });

		    
	  }   
	  editElement(element: PeriodicElement): void {
		this.openDialog(element);
	  }    

	  error():void{
		this._snackBar.open('Registro Eliminado :3', 'ok', {
		  horizontalPosition: "center",
		  verticalPosition: "top",
		});
	  }
	  confirmacion():void{
		this._snackBar.open('Cita Registrada :3', 'ok', {
		  horizontalPosition: "center",
		  verticalPosition: "top",
		});
	  }
  
}
