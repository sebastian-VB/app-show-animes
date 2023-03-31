import { Component, Input } from '@angular/core';
import { Anime } from '../../interfaces/anime.interface';
import { Manga } from '../../interfaces/manga.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() anime!: Anime;
  @Input() manga!: Manga;
  @Input() showContainerCard!: Boolean;

}
