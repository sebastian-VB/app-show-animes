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
  listManga!: Manga[];
  // listAnimeSearch!: Manga[];

  constructor(private listMangaSvc: ListMangaService){
    this.listMangaSvc.getListManga()
    .pipe(
      tap((mangas: Manga[]) => this.listManga = mangas)
    )
    .subscribe();
  }

  zIndex(value: Boolean): void{
    this.zIndexCard = value;
  }

}
