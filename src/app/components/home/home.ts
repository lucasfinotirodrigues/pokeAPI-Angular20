import { Component, inject } from '@angular/core';
import { PokeApiService } from '../../services/poke-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  listaPokemons: any[] = [];
  private readonly pokeApiService = inject(PokeApiService);

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokeApiService.getPokemon().subscribe(response => {
      this.listaPokemons = response.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1
      }));
      console.warn("Lista de Pokémons => ", this.listaPokemons);
    });
  }
}
