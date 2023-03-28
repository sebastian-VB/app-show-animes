import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { map, Observable, tap } from 'rxjs'
import { environment } from 'src/environment/environment'
import { Genre } from '../interfaces/genre.interface';

interface ResponseData{
    data: Genre[]
}

@Injectable({
    providedIn: 'root'
})
export class GenreService{

    constructor(private http: HttpClient){}

    getGenres(): Observable<Genre[]>{
        return this.http.get<ResponseData>(`${environment.apiUrl}genres/manga`).pipe(
            map(res => res.data),
        );
    };

}
