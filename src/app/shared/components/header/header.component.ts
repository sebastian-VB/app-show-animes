import { Component, HostListener } from '@angular/core';
import { delay, map, tap } from 'rxjs';
import { Genre } from '../../interfaces/genre.interface';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showCont:boolean = true;
  whidthBrow: number = 0;

  lisGenre: Genre[] = [];

  constructor(private genreSVC: GenreService){
    this.genreSVC.getGenres()
    .pipe(
      tap((genres: Genre[]) => {
        this.lisGenre = genres
      }),    
    ).subscribe();
  }

  showContainer():void{
    this.showCont = !this.showCont;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.whidthBrow = event.target.innerWidth
  }
  
}
