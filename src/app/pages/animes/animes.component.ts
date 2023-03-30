import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Anime } from 'src/app/shared/interfaces/anime.interface';
import { ListAnimeService } from './services/list-anime.service';

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

  constructor(private listAnimeSvc: ListAnimeService){
    this.listAnimeSvc.getListAnime()
    .pipe(
      tap((listAnime: Anime[]) => this.listAnime = listAnime)
    )
    .subscribe();
  }

  zIndex(value: Boolean): void{
    this.zIndexCard = value;
  }

  showAnimeSearch(animes: Anime[]): void{
    console.log(animes);
    if(animes.length !== 0){
      this.listAnimeSearch = animes;
      this.showConteninerAnimes = !this.showConteninerAnimes;
    }
  }

}
