import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() gridData!: {name: string, power: number}[];
  @Output() byName = new EventEmitter<typeof this.gridData>();
  @Output() byPower = new EventEmitter<typeof this.gridData>();
  nameAscending: boolean = true;
  nIcon: string = "»"
  powerAscending: boolean = true;
  pIcon: string = "»"
  orderByName(){
    if(this.nameAscending){
      this.nIcon = "»"
      this.gridData.sort((a,b) => {
        return a.name < b.name ? 1: -1;
      })
    } else {
      this.nIcon="«"
      this.gridData.sort((a,b) => {
        return a.name > b.name ? 1: -1;
      })
    }
    this.byName.emit(this.gridData)
    this.nameAscending = !this.nameAscending;
  }
  orderByPower(){
    if(this.powerAscending){
      this.pIcon="»"
      this.gridData.sort((a,b) => {
        return a.power < b.power ? 1: -1;
      })
    } else {
      this.pIcon="«"
      this.gridData.sort((a,b) => {
        return a.power > b.power ? 1: -1;
      })
    }
    this.byPower.emit(this.gridData)
    this.powerAscending = !this.powerAscending;
  }
}
