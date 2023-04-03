import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { Manga } from 'src/app/shared/interfaces/manga.interface';
import { ListMangaService } from './services/list-manga.service';
import { SearchMangaService } from './services/searchManga.service';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent {

  zIndexCard: Boolean = false;
  showConteninerMangas: Boolean = false;
  listManga!: Manga[];
  listMangaSearch!: Manga[];

  constructor(private listMangaSvc: ListMangaService, private searchMangaSvc: SearchMangaService){
    this.listMangaSvc.getListManga()
    .pipe(
      tap((listMangas: Manga[]) => this.listManga = listMangas)
    )
    .subscribe();
  }

  zIndex(value: Boolean): void{
    this.zIndexCard = value;
  }

  showMangaSearch(manga: string): void{
    console.log(manga);
    if(manga !== null){
      this.showConteninerMangas = true;
      this.searchMangaSvc.getManga(manga)
      .pipe(
        tap((listManga: Manga[]) => {
          this.listMangaSearch = listManga;
          console.log(this.listMangaSearch);
        })
      )
      .subscribe()
    }
    
  }

}
