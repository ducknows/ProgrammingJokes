import { Component, Input, OnInit } from '@angular/core';
import { Joke } from '../interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  // @Input()
  // favoriteJokes?: Joke[]

  // With BehaviorSubject
  favoriteJokes?: Joke[]

  constructor (private api:ApiService){}

  ngOnInit (){
    this.api.$jokeStream.subscribe((jokeList: Joke[])=> this.favoriteJokes = jokeList)
  }


}
