import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  private getPokemonUrl = " https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }

  getPokemonData() {
    let id = Math.floor(Math.random() * 150) + 1;
    return this.http.get(`${this.getPokemonUrl}${id}`);
  }

}
