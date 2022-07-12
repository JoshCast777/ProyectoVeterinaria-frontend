import { Component} from '@angular/core';
import { DataCards } from 'src/app/interfaces/app.intefaces';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {

  cards : DataCards[]=[
    {
      img: "img2",
      title: "Consultas médicas",
      text: "Clínica Veterinaria Guayaquil cuenta con excelentes especialistas con herramientas y equipos de última generación, podemos diagnosticar y tratar las enfermedades de las mascotas con mayor precisión y rapidez."
    },
    {
      img: "img5",
      title: "Vacunación",
      text: "Para consultar nuestros servicios puede contactarnos enviando un correo o vía telefónica. Se aplican a partir de las 12 semanas de edad. Revacunación anual de séxtuple y rabia"
    },
    {
      img: "img6",
      title: "Cirugías",
      text: "Es una de las principales herramientas terapéuticas dentro de la sanidad veterinaria. Nuestro equipo de especialistas destaca por su capacidad profesional así también como de su formación continua los que nos permite situarnos en la vanguardia de la cirugía veterinaria."
    },
    {
      img: "img6",
      title: "Cirugías",
      text: "Es una de las principales herramientas terapéuticas dentro de la sanidad veterinaria. Nuestro equipo de especialistas destaca por su capacidad profesional así también como de su formación continua los que nos permite situarnos en la vanguardia de la cirugía veterinaria."
    },
    {
      img: "img6",
      title: "Cirugías",
      text: "Es una de las principales herramientas terapéuticas dentro de la sanidad veterinaria. Nuestro equipo de especialistas destaca por su capacidad profesional así también como de su formación continua los que nos permite situarnos en la vanguardia de la cirugía veterinaria."
    },
    {
      img: "img6",
      title: "Cirugías",
      text: "Es una de las principales herramientas terapéuticas dentro de la sanidad veterinaria. Nuestro equipo de especialistas destaca por su capacidad profesional así también como de su formación continua los que nos permite situarnos en la vanguardia de la cirugía veterinaria."
    }
]

  
}
