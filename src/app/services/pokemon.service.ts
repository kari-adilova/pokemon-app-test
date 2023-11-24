import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { ErrorService } from "./error.service";
import { IPokemonDetails, IPokemonListResponse, IPokemonResponse } from "../models/types";
import { getPokemonURL } from "../models/constants";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  public getAllPokemons(url:string): Observable<IPokemonListResponse> {
    return this.http.get<IPokemonListResponse>(url).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  public getPokemon(url: string): Observable<IPokemonResponse> {
    return this.http.get<IPokemonResponse>(url);
  }

  public getPokemonById(id: string) {
    return this.http.get<IPokemonDetails>(getPokemonURL + id);
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => { error.message }
    )
  }
}