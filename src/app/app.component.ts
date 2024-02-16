import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from "./service/pokemon.service";
import {Subscription} from "rxjs";
import {PokemonDetail} from "./type/pokemon.interface";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "./component/modal/modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Pokemon';
  starterPokemon = [ "Bulbasaur", "Squirtle", "Charmander" ];
  names:string[]=[];
  pokemons:PokemonDetail[] = [];
  sbp = new Subscription();

  setPokemon(data:PokemonDetail){
    this.pokemons = [data];
  }
  constructor(private pokemonService:PokemonService) {}

  ngOnInit() {
    this.pokemonService.initNames().subscribe({next:(val=> {
        this.starterPokemon = val;
        this.fetchPokemonDetails();
      })});
  }
  ngOnDestroy() {
    this.sbp.unsubscribe(); // Cleanup on component destroy
  }

  fetchPokemonDetails(){
    for (const name of this.starterPokemon) {
      this.sbp.add(this.pokemonService.getPokemon(name).subscribe({
        next:(pokemon:PokemonDetail)=>{
          this.pokemons.push(pokemon);
        },
        error: (err) => {
          console.error('Failed to fetch pokemon', err);
        }
      }));
    }
  }

  reset(){
    this.pokemons = [];
    this.fetchPokemonDetails();
  }
}
