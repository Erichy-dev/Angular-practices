import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  history: string = "Parent provides value. Child updates the value. Using @input & @Output";
  $event!: Event;

  emitParentHistory(value: string){
    this.history = value;
  }
}