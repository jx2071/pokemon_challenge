import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pokemon } from "./component/pokemon/pokemon.component";
import {ModalComponent} from "./component/modal/modal.component";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { PokemonService } from "./service/pokemon.service";
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    Pokemon,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButton
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
