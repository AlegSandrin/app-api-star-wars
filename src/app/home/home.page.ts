/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  films: Observable<any>;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
  }

  abrirDetalhes(film) {
    let split = film.url.split('/');
    console.log(split);
    let filmId = split[5];
    this.router.navigateByUrl(`/film-detail/${filmId}`);
  }

}
