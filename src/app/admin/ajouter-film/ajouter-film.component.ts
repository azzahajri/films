import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent implements OnInit {

  constructor(private filmsService : FilmsService, private route: Router) { }

  ngOnInit(): void {
  }
  ajouterFilm(nom :string, desc:string){
    this.filmsService.ajouterFilm(nom,desc);
    alert('Film Ajouté avec succès');
  this.route.navigate(['admin/lister-films']);
}
}
