import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  pagesNumber: Array<number> = [1,2,3,4,5];

  //mostrar 5 paginas siguientes
  nextPages(): void{
    console.log('siguiente');
  }
  
  //mostrar 5 paginas posteriores
  previousPages(): void{
    console.log('anterior');
  }

  //emitir el valor (pagina) seleccionado
  selectedPage(page: number): void{
    console.log(`Pagina seleccionada: ${page}`);
  }

}
