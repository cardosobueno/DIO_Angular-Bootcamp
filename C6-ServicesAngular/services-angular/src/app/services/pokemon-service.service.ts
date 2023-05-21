import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private baseURL: string = "";
  private pokeData: PokemonData | any;
  constructor(private http: HttpClient) {
    this.baseURL = 'https://pokeapi.co/api/v2/pokemon/'
  }


  getPokemon(pokemonName: string): Observable<PokemonData> {
    this.pokeData = this
                      .http
                      .get<PokemonData>
                      (`${this.baseURL}${pokemonName}`)
    return this.pokeData;
  }
}
