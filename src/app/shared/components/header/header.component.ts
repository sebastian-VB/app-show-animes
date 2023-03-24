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

  showCont:boolean = false;
  showContcategories: Boolean = false;

  whidthBrow: number = 0;
  idAfter: number = 0;

  listGenre: Genre[] = [];

  constructor(private genreSVC: GenreService){
    this.genreSVC.getGenres()
    .pipe(
      tap((genres: Genre[]) => {
        this.listGenre = genres
        console.log(genres.length)
      }),    
    ).subscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.whidthBrow = event.target.innerWidth;
    this.whidthBrow > 950 ? this.showCont = false : this.showCont
  }

  showContainer():void{
    this.showCont = !this.showCont;
  }

  showContainerCat(): void{
    this.showContcategories = !this.showContcategories;
  }

  getAnimesCategories(id: number): void{
    if(id != this.idAfter){
      console.log(id);
    }
    this.idAfter = id;
  }

  
}
