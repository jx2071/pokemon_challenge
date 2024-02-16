import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PokemonDetail} from "../../type/pokemon.interface";
import {ModalComponent} from "../modal/modal.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class Pokemon {
  @Input()
  pokemon!: PokemonDetail;

  @Output()
  selectPokemon = new EventEmitter();

  constructor( public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {name: this.pokemon.name, image:this.pokemon.image},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.update) {
        this.selectPokemon.emit(this.pokemon);
      }
    });
  }
}
