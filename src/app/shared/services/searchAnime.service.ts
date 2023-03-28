import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Anime } from '../interfaces/anime.interface';

interface ResponseData {
    data: Anime[]
}

@Injectable({
    providedIn: 'root'
})
export class SearchAnimeService{

    constructor(private http: HttpClient){}

    getAnime(titleAnime: string): Observable<Anime[]>{
        const params = { q: titleAnime }

        return this.http.get<ResponseData>(`${environment.apiUrl}anime`, {params}).pipe(
            map(res => res.data)
        );
    }
}