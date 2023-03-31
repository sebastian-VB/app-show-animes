import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Manga } from "src/app/shared/interfaces/manga.interface";
import { environment } from "src/environment/environment";

interface ResponseManga{
    data: Manga[]
}

@Injectable({
    providedIn: 'root'
})
export class ListMangaService{

    constructor(private http: HttpClient){}

    getListManga(): Observable<Manga[]>{
        return this.http.get<ResponseManga>(`${environment.apiUrl}manga/`).pipe(
            map(res => res.data)
        );
    }
}