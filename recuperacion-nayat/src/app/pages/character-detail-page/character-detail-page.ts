import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../interfaces/character.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './character-detail-page.html',
  styleUrl: './character-detail-page.css',
})
export class CharacterDetailPage implements OnInit {
  
  character?: Character;

  constructor ( 
    private service: CharacterService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get);
    this.service.getCharacter(id).subscribe(
      (response) => { this.character = response }
    )
  }

}
