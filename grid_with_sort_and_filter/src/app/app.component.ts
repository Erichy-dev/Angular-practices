import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gridData = [
    {name: "Chuck Norris", power: Infinity},
    {name: "Bruce Lee", power: 9000},
    {name: "Jackie Chan", power: 7000},
    {name: "Jet Li", power: 8000}
  ]
  recordedGrid = new Array().concat(this.gridData)
  str: string="";
  Search(event: Event){
    this.str = (event.target as HTMLInputElement).value;
    this.gridData = this.recordedGrid;
    let newElements = []
    for (let i = 0; i < this.gridData.length; i++) {
      let element = this.gridData[i]
      let nameProof: boolean = element.name.toLowerCase().includes(this.str)
      let tekProof: boolean = element.power.toString().toLowerCase().includes(this.str)
      if(nameProof || tekProof){
        newElements.push(element)
      }
    }
    this.gridData =newElements;
  }
}