import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn: 'root'
})
export class SearchAnimeService{

    constructor(private http: HttpClient){}

    getAnime(titleAnime: string): Observable<any>{
        const params = { q: titleAnime }

        return this.http.get<any>(`${environment.apiUrl}anime`, {params}).pipe(
            map(res => res.data)
        );
    }
}