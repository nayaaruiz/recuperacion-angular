import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './character-list-page.html',
  styleUrl: './character-list-page.css',
})
export class CharacterListPage implements OnInit{

  characters: Character[] = [];

  constructor ( private service: CharacterService ) {}

  ngOnInit(): void {
    this.service.getCharacterList().subscribe(
      (response) => {this.characters = response.results}
    );
  }

}
