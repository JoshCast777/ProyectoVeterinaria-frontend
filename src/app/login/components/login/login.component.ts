import { Dialog } from '@angular/cdk/dialog';
import { Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Auth } from 'src/app/interfaces/app.intefaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  form: FormGroup;
  user_data: Auth={
    email:"kevin@gmail.com",
    password: "kevin123"
  };
  constructor(private dialogRef: MatDialogRef<LoginComponent>,private fb: FormBuilder, private _snackBar: MatSnackBar){
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  ingresar(): void{
    const email = this.form.value.email;
    const password = this.form.value.password;
    if(email == this.user_data.email && password== this.user_data.password){
      console.log(email," ",password);
      this.dialogRef.close();
    }else{
      // mostrar un error 
      this.error();
    }

  }
  error():void{
    this._snackBar.open('El email o la contraseña ingresados son invalidos', 'ok', {
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}


