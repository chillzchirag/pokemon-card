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
  types: any[] = [];
  color: any;

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
          this.types = data.types;
          this.color = this.getColor(data.types[0].type.name);
        }
      );
  }

  setMyStyle() {
    return { 'background': 'radial-gradient(circle at 50% 0%,' + this.color + ' 36%, #ffffff 36%)' };
  }

  getColor(typeName: any) {
    return typeColor[`${typeName}`];
  }

  getStyle() {
    return { 'background-color': this.color }
  }

}

const typeColor: { [key: string]: any } = {
  bug: "rgb(38, 222, 129)",
  dragon: "rgb(255, 234, 167)",
  electric: "rgb(254, 211, 48)",
  fairy: "rgb(255, 0, 105)",
  fighting: "rgb(48, 51, 107)",
  fire: "rgb(240, 147, 43)",
  flying: "rgb(129, 236, 236)",
  grass: "rgb(0, 184, 148)",
  ground: "rgb(239, 181, 73)",
  ghost: "rgb(165, 94, 234)",
  ice: "rgb(116, 185, 255)",
  normal: "rgb(149, 175, 192)",
  poison: "rgb(108, 92, 231)",
  psychic: "rgb(162, 155, 254)",
  rock: "rgb(45, 52, 54)",
  water: "rgb(1, 144, 255)"
};
