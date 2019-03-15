import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: string[] = [
    'Star Trek',
    'Shrek',
    'Silent Hill',
    'A star is born',
    'Green Book'
  ];



}
