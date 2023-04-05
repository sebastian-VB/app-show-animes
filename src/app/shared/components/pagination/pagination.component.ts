import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  pagesNumber: Array<number> = [1,2,3,4,5];
  totalPageNumber: Array<number> = this.pagesNumber;

  //mostrar 5 paginas siguientes
  nextPages(): void{
    let last = this.totalPageNumber[this.totalPageNumber.length - 1];
    this.pagesNumber.splice(0, last);
    for (let index = last + 1; index <= last + 5; index++) { this.pagesNumber.push(index); }
  }
  
  //mostrar 5 paginas posteriores
  previousPages(): void{
    let first = this.totalPageNumber[0];
    if(first > 1){
      this.pagesNumber.splice(0, 5);
      for (let index = first - 5 ; index < first; index++) { this.pagesNumber.push(index); }
    }
  }

  //emitir el valor (pagina) seleccionado
  selectedPage(page: number): void{
    console.log(`Pagina seleccionada: ${page}`);
  }

}
