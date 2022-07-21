import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataCards } from 'src/app/interfaces/app.intefaces';

@Component({
  selector: 'app-header-about',
  templateUrl: './header-about.component.html',
  styleUrls: ['./header-about.component.css']
})
export class HeaderAboutComponent implements OnInit {
  data_cards: DataCards[]=[ 
    {
      img:{
        name: "img_nosotros1"
      },
      title: "Vision",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada et nunc sed bibendum. Mauris dolor dui, pellentesque eu dictum non, molestie in eros. Mauris ut blandit ex. Duis luctus iaculis tellus in viverra. Phasellus ac tincidunt nisl, sit amet luctus sapien. In hac habitasse"
    },
    {
      img:{
        name: "img2"
      },
      title: "Misión",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada et nunc sed bibendum. Mauris dolor dui, pellentesque eu dictum non, molestie in eros. Mauris ut blandit ex. Duis luctus iaculis tellus in viverra. Phasellus ac tincidunt nisl, sit amet luctus sapien. In hac habitasse"
    },
    {
      img:{
        name: "img_nosotros3"
      },
      title: "objetivos",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada et nunc sed bibendum. Mauris dolor dui, pellentesque eu dictum non, molestie in eros. Mauris ut blandit ex. Duis luctus iaculis tellus in viverra. Phasellus ac tincidunt nisl, sit amet luctus sapien. In hac habitasse"
    },
    {
      img:{
        name: "img_nosotros3"
      },
      title: "Profecion",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada et nunc sed bibendum. Mauris dolor dui, pellentesque eu dictum non, molestie in eros. Mauris ut blandit ex. Duis luctus iaculis tellus in viverra. Phasellus ac tincidunt nisl, sit amet luctus sapien. In hac habitasse"
    },
    {
      img:{
        name: "img_nosotros3"
      },
      title: "Horario",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada et nunc sed bibendum. Mauris dolor dui, pellentesque eu dictum non, molestie in eros. Mauris ut blandit ex. Duis luctus iaculis tellus in viverra. Phasellus ac tincidunt nisl, sit amet luctus sapien. In hac habitasse"
    }
  ]
    

  constructor() { }

  ngOnInit(): void {
  }

}
