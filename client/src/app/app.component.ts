import { Component } from '@angular/core';
import { Joke } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dad Jokes';

  // With @Input/@Output
  // favoriteJokes: Joke[] = [{id: 'bla', joke: 'This is a joke', status:200}];

  // addFavoriteJoke(joke: Joke) {
  //   this.favoriteJokes.push(joke);
  // }
}
