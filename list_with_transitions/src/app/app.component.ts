import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rowsArray = [1, 2, 3, 4, 5]
  sortedRows = [1, 2, 3, 4, 5]
  insertAtRandomIndex(){
    let arr = this.sortedRows;
    let num = arr.length;
    let randomIndex = Math.floor(Math.random()*num);
    let newElement = arr[num-1] + 1;
    this.sortedRows.push(newElement)
    this.rowsArray.splice(randomIndex, 0, newElement);
  }
  reset(){
    let num = this.rowsArray.length;
    this.rowsArray.splice(0, num, ...this.sortedRows)
  }
}
