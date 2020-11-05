import { Component } from '@angular/core';
import { WikepediaService } from './wikepedia.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor(private wikepedia: WikepediaService){

  }

  onTerm(value: string) {
    this.wikepedia.search(value).subscribe((pages) =>{
      this.pages = pages;
    });
  }
}
