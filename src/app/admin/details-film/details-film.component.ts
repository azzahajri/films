import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {
  nomFilm :string='' ;
  descFilm :string='';
  constructor(private route:ActivatedRoute, private filmsService : FilmsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']-1;
    this.nomFilm= this.filmsService.getFilmParId(+id).nom+this.nomFilm;
    this.descFilm =this.filmsService.getFilmParId(+id).description+this.descFilm;
  }

}
