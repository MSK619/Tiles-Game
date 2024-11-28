import { Component, OnInit } from '@angular/core';
import { getRandomInt } from './common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rowCnt = 4;
  colCnt = 4;

  boxes:any = [];
  boxesId = 1;

  startId=1;
  endId = this.rowCnt * this.colCnt;

  score = 0;
  currentSelectedTile = 0;

  tilesInterval;

  timeLeft = 60;
  timeLeftInterval:any;

  constructor() { }

  ngOnInit(): void {
    this.populateData();
  }

  populateData() {
    for (let r = 0; r < this.rowCnt; r++) {
      let ot = [];
      for(let j =0;j< this.colCnt; j++ ){
        ot.push({
          id: this.boxesId,
          isSelected: false
        })
        this.boxesId++;
      }
      this.boxes.push(ot);
    }


    this.timeLeftInterval = setInterval(()=> {
      if(this.timeLeft > 0){ 
        this.timeLeft = this.timeLeft - 1;
      }else{
        clearInterval(this.timeLeftInterval)
      }
    },1000);

    this.generateTilesSelection();
    this.tilesInterval = setInterval(()=>{
      this.generateTilesSelection();
    },1000)
  }

  generateTilesSelection() {
    this.currentSelectedTile = getRandomInt(this.startId, this.endId);
  
    for (let r = 0; r < this.rowCnt; r++) {
      for (let c = 0; c < this.colCnt; c++) {
        if (this.boxes[r][c].id === this.currentSelectedTile) {
          this.boxes[r][c].isSelected = true;
          setTimeout(() => {
            this.boxes[r][c].isSelected = false;
          }, 2000);
          break; 
        }
      }
    }  
  }
  
  onTileClick( i,j){
    if (this.boxes[i][j].id === this.currentSelectedTile) {
      this.score++;
      this.boxes[i][j].isSelected = false;
      this.currentSelectedTile = null;
    }
  }

  restartGame(){
    location.reload();
  }
}
