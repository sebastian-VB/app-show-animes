import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showCont:boolean = false;
  showCont2:boolean = true;
  whidthBrow: number = 0;

  showContainer():void{
    this.showCont = !this.showCont;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.whidthBrow = event.target.innerWidth
  }
  
}
