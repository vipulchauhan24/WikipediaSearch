import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
