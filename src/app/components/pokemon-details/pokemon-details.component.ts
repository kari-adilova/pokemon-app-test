import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetails } from 'src/app/models/types';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  private id: string;
  public pokemonDetails: IPokemonDetails;

  constructor(private activateRoute: ActivatedRoute, private pokemonService: PokemonService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  public drawPokemon() {
    this.pokemonService.getPokemonById(this.id).subscribe(pokemonResponse => {
      this.pokemonDetails = pokemonResponse;
      console.log(pokemonResponse);
    })
  }

  ngOnInit(): void {
    this.drawPokemon();
  }
}
