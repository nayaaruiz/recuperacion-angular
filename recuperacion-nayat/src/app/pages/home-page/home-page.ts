import { Component } from '@angular/core';
import { CharacterListPage } from '../character-list-page/character-list-page';
import { FormControl } from '@angular/forms';
import { FormComponent } from '../../components/form-component/form-component';

@Component({
  selector: 'app-home-page',
  imports: [CharacterListPage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage { 

  nombre = new FormControl('');
  
  mostrarFiltrado(): void {
    let dialogRef = dialog.open(FormComponent);
  }

}
