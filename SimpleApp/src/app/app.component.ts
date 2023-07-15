import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SimpleApp';
  inputValue!: string;
  
  onSearch(){
    const googleURL= `https://www.google.com/search?q=${encodeURIComponent(this.inputValue)}`;
    window.open(googleURL, '_blank');
  }
}