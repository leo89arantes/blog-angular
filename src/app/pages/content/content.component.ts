import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://melhoreseusresultados.com.br/wp-content/uploads/2023/04/Tony-Stark-Substituto-1024x576-1.jpg"
  contentTitle:string = "NOTÍCIA"
  contentDescription: string = "Bla bla bla blaaa"

  constructor() { }

  ngOnInit(): void {
  }

}
