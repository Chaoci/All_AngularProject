import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>;
  @Output('bpcreate') bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string}>;
  // newServerName = '';
  // newServerContent = '';

  // 使用ViewChild方式來讀取範本上的 #serverContentInput
  // ElementRef可以使用nativeElement的API來讀取指定的值
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value,
    })
  }
}
