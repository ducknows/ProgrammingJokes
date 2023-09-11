import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Joke } from '../interfaces';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  joke?: Joke

  constructor (private api: ApiService){}

  @Output()
  newFavoriteJokeEvent = new EventEmitter<Joke>()

  getJoke () {
    this.api.getRandomJoke().subscribe(joke => this.joke = joke[0]);
  }

  // With BehaviorSubject
  handleYes() {
      console.log("It's a yes")
      if (typeof this.joke !== "undefined") {
        this.api.addToJokeList(this.joke)
      }
      this.getJoke();
    }

  // With @Input/@Output
  // handleYes() {
  //   console.log("It's a yes")
  //   this.newFavoriteJokeEvent.emit(this.joke);
  //   this.getJoke();
  // }

  handleNo() {
    console.log("It's a no")
    this.getJoke();
  }

  ngOnInit(){
    this.getJoke();
  }

}
