import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Manga } from 'src/app/shared/interfaces/manga.interface';
import { ListMangaService } from './services/list-manga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent {

  zIndexCard: Boolean = false;
  showConteninerMangas: Boolean = false;
  listAnime!: Manga[];
  // listAnimeSearch!: Manga[];

  constructor(private listMangaSvc: ListMangaService){
    this.listMangaSvc.getListManga()
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe();
  }

}
