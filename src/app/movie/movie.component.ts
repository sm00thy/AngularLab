import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() title:string;
  likes = 3;
  dislikes = 1;

  onAddUpVote(){
    this.likes++;
  }

  onAddDownVote(){
    this.dislikes--;
  }

  constructor() { }

  ngOnInit() {
  }

}
