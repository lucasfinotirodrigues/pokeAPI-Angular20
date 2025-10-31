import { inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  private readonly http = inject(HttpClient);

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}