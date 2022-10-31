import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pokemons list';
  pokemonList = POKEMONS;
  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }
}
