import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getPokemonsInitialURL } from 'src/app/models/constants';
import { IPokemonResponse } from 'src/app/models/types';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemons: IPokemonResponse[] = [];

  private nextURL: string = '';

  ngOnInit(): void {
    this.drawPokemons(getPokemonsInitialURL);
  }

  public showMore() {
    this.drawPokemons(this.nextURL);
  }

  private drawPokemons(url: string) {
    this.pokemonService.getAllPokemons(url).subscribe(pokemonsResponse => {
      this.nextURL = pokemonsResponse.next;
      pokemonsResponse.results.forEach((pokemonResponse) => {
        this.pokemonService.getPokemon(pokemonResponse.url).subscribe(pokemon => {
          this.pokemons.push(pokemon);
        })
      })
    })
  }

  constructor (private pokemonService: PokemonService, private router: Router) {
  }
}
