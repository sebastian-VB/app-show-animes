import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Manga } from '../../../shared/interfaces/manga.interface';

interface ResponseData {
    data: Manga[]
}

@Injectable({
    providedIn: 'root'
})
export class SearchMangaService{

    constructor(private http: HttpClient){}

    getManga(titleManga: string): Observable<Manga[]>{
        const params = { q: titleManga }

        return this.http.get<ResponseData>(`${environment.apiUrl}manga`, {params}).pipe(
            map(res => res.data)
        );
    }
}