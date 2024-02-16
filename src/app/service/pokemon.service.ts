import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PokemonDetail, PokemonResponse} from "../type/pokemon.interface";
import {BehaviorSubject, map, Subject, tap} from "rxjs";


@Injectable({
  providedIn:"root"
})
export class PokemonService{

  private readonly baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http:HttpClient) {}
  getPokemon(name:string){
    return this.http.get(this.baseUrl+name.toLowerCase()).pipe(
      map((value:any):PokemonDetail=> {
      return value ?
        {
          name:value.name,
          id:value.id,
          weight:value.weight,
          height:value.height,
          types:value.types,
          image:value.sprites["other"]["official-artwork"]["front_default"]
        } :
        {} as PokemonDetail;
    }))
  }

  initNames(){
    return this.http.get(this.baseUrl).pipe(map((value:any)=> value?.results?.map((result:any)=> {
      return result.name;
    })))
  }
}

