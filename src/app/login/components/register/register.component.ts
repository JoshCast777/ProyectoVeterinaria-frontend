import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      email: ['', Validators.required],
      fechaNac: ['', Validators.required],
      telefono: ['', Validators.required],
      password: ['', Validators.required],
      terminos: ['', Validators.required],

    });
  }
  
  Registrar(){
    
  }
  ngOnInit(): void {
  }

}
