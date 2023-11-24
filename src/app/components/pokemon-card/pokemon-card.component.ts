import { Component, Input } from '@angular/core';
import { IPokemonResponse } from 'src/app/models/types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon: IPokemonResponse
}
