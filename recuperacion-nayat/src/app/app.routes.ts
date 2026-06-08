import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CharacterListPage } from './pages/character-list-page/character-list-page';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomePage },

    { path: 'characters', component: CharacterListPage },

    { path: 'character/:id', component: CharacterDetailPage }

];
