import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Anime } from 'src/app/shared/interfaces/anime.interface';
import { ListAnimeService } from './services/list-anime.service';
import { SearchAnimeService } from './services/searchAnime.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent {

  zIndexCard: Boolean = false;
  showConteninerAnimes: Boolean = false;
  listAnime!: Anime[];
  listAnimeSearch!: Anime[];

  constructor(private listAnimeSvc: ListAnimeService, private searchAnimeSvc: SearchAnimeService){
    this.listAnimeSvc.getListAnime()
    .pipe(
      tap((listAnime: Anime[]) => this.listAnime = listAnime)
    )
    .subscribe();
  }

  zIndex(value: Boolean): void{
    this.zIndexCard = value;
  }

  showAnimeSearch(anime: string): void{
    console.log(anime);
    if(anime !== null){
      this.searchAnimeSvc.getAnime(anime)
      .pipe(
        tap((listAnime: Anime[]) => {
          this.listAnimeSearch = listAnime;
          console.log(this.listAnimeSearch);
        })
        )
      .subscribe()
      this.showConteninerAnimes = true;
      }
  }

}
