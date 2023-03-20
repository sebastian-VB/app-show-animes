import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router){}

  goToPageAnimes():void{
    // console.log('Ir a animes');
    this.router.navigate(['/animes']);
  }
  
  goToPageMangas():void{
    // console.log('Ir a mangas');
    this.router.navigate(['/mangas']);
  }

}
