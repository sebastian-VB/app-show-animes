import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
// import { Anime } from '../../interfaces/anime.interface';
import { Genre } from '../../interfaces/genre.interface';
// import { Manga } from '../../interfaces/manga.interface';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showCont:boolean = false;
  showContcategories: Boolean = false;

  whidthBrow: number = 0;
  idAfter: number = 0;

  valorInput: string = '';

  listGenre: Genre[] = [];

  @Input() animeOrManga = true;

  @Output() zIndexCards = new EventEmitter<Boolean>();
  @Output() anime = new EventEmitter<string>();
  @Output() manga = new EventEmitter<string>();

  constructor(
    private genreSVC: GenreService,
    private elRef: ElementRef,
    private router: Router
  ){
    this.genreSVC.getGenres()
    .pipe(
      tap((genres: Genre[]) => {
        this.listGenre = genres
      }),    
    ).subscribe();
  }
  ngOnInit(): void {
    //obtener el tamaño inicial del elemento html 'container-header'
    const element = this.elRef.nativeElement.querySelector('#container-header');
    const initialSize = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    initialSize.width > 950 ? this.showCont = true : this.showCont;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.whidthBrow = event.target.innerWidth;
    this.whidthBrow > 950 ? this.showCont = true : this.showCont;
  }

  //mostrar contenedor con el boton hamburguesa
  showContainer():void{
    this.showCont = !this.showCont;
  }

  //mostrar el contenedor con las categorias
  showContainerCat(): void{
    this.showContcategories = !this.showContcategories;
    this.zIndexCards.emit(this.showContcategories);
  }

  //ir a la pagina home
  navigateHomePage(): void{
    this.router.navigate(['/home']);
  }

  //obetner lista de animes por id de categoria
  getAnimesCategories(id: number): void{
    if(id != this.idAfter){
      console.log(id);
    }
    this.idAfter = id;
  }

  //realizar la accion de buscar - obtener el anime y manga
  getAnimeSearch(): void{
    if(this.valorInput !== ''){
      this.anime.emit(this.valorInput);
    }
    this.valorInput = '';
  }

  getMangaSearch(): void{
    if(this.valorInput !== ''){
      this.manga.emit(this.valorInput);
    }
    this.valorInput = '';
  }


  
}
