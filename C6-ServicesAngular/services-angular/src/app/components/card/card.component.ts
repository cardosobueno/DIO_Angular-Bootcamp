import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id: 0,
    name: "",
    sprites: {
      front_default: ""
    },
    types: []

  }


  constructor(private service: PokemonServiceService) {

  }
  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchname: string) {
    this.service.getPokemon(searchname).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types

          }
          console.log(res)
          console.log(res.id)
          console.log(res.name)
          console.log(res.sprites.front_default)
          console.log(res.types)
        },


        error: (err) => console.log(err)
      }
    );
  }



}
