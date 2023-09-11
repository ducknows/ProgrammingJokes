import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';

  // Needed only for implementation with BehaviorSubject
  jokeList: Joke[] = [];
  $jokeStream = new BehaviorSubject(this.jokeList);
  // ------------
  constructor(private http: HttpClient) { }

  getRandomJoke(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  // For implementation with BehaviorSubject
  addToJokeList (joke: Joke) {
    this.jokeList.push(joke);
    this.$jokeStream.next(this.jokeList);
  }
  // ------------------------
}
