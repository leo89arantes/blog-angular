import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://melhoreseusresultados.com.br/wp-content/uploads/2023/04/Tony-Stark-Substituto-1024x576-1.jpg"
  contentTitle:string = "NOTÍCIA"
  contentDescription: string = "Bla bla bla blaaa"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
