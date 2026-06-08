import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../interfaces/character.interface';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  
  private readonly apiUrl = 'https://rickandmortyapi.com/api';

  constructor ( private http: HttpClient ) {}

  getCharacterList(): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(this.apiUrl);
  }

  getCharacter(id: number): Observable<Character> {  
    return this.http.get<Character>(`${this.apiUrl}${id}`);
  }

}
