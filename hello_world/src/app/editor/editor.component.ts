import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() ChildChangesHistory = new EventEmitter<string>();
  emitHistory(event: any){
    this.ChildChangesHistory.emit(event.target.value)
  }
}
