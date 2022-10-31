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
  pokemonList : Pokemon[]= POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  clickPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    
    if(pokemon){
      console.log(`Vous avez choisi le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else  {
      console.log(`Vous avez choisi un pokemon qui n'existe pas!`);
      this.pokemonSelected = pokemon;
    }
  }
}
