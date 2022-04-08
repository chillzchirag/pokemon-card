import { Component } from '@angular/core';
import { GetPokemonService } from './get-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-card';

  hp: any;
  pokemonName: any;
  statAttack: any;
  statDefense: any;
  statSpeed: any;
  imgSrc: any;

  constructor(private getPokemonService: GetPokemonService) { }

  ngOnInit() {
    this.getNextPokemon();
  }


  getNextPokemon() {
    this.getPokemonService.getPokemonData()
      .subscribe(
        (data: any) => {
          this.hp = data.stats[0].base_stat;
          this.imgSrc = data.sprites.other.dream_world.front_default;
          this.pokemonName = data.name[0].toUpperCase() + data.name.slice(1);
          this.statAttack = data.stats[1].base_stat;
          this.statDefense = data.stats[2].base_stat;
          this.statSpeed = data.stats[5].base_stat;
        }
      );
  }

}
