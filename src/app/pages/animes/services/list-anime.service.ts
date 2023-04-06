import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Anime } from "src/app/shared/interfaces/anime.interface";
import { environment } from "src/environment/environment";

interface ResponseListAnime{
    data: Anime[]
}

@Injectable({
    providedIn: 'root'
})
export class ListAnimeService{

    constructor(private http: HttpClient){}

    getListAnime(page: number): Observable<Anime[]>{

        const params = {page}

        return this.http.get<ResponseListAnime>(`${environment.apiUrl}anime/`, {params}).pipe(
            map(res => res.data)
        );
    }
}