import { Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnDestroy {
  @Input() element:{type: string, name:string,content:string};
  ServerElements: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy():void{
    console.log('activated!')
  }

}
