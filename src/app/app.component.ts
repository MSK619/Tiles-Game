import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rows = 4;
  cols = 4;

  boxes = [];

  boxesId = 0;
  constructor() { }

  ngOnInit(): void {
    this.populateData();
  }

  populateData() {

    for (let r = 0; r < this.rows; r++) {
      console.log(r);
      console.log(r);
      console.log(r);
    }
    console.log('fdsfs');
  }
}
