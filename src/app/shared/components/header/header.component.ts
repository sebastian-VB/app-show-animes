import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Anime } from '../../interfaces/anime.interface';
import { Genre } from '../../interfaces/genre.interface';
import { GenreService } from '../../services/genre.service';
import { SearchAnimeService } from '../../services/searchAnime.service';

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

  @Output() zIndexCards = new EventEmitter<Boolean>();
  @Output() anime = new EventEmitter<Anime[]>();
  //anime: Anime[] = [];

  constructor(
    private genreSVC: GenreService,
    private searchASvc: SearchAnimeService,
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

  //realizar la accion de buscar - obtener el anime
  getAnimeSearch(): void{
    console.log(this.valorInput);
    if(this.valorInput !== ''){
      this.searchASvc.getAnime(this.valorInput)
      .pipe(
        tap((anime: Anime[]) => this.anime.emit(anime))
      )
      .subscribe();
      this.valorInput = '';
    }
  }

  
}
