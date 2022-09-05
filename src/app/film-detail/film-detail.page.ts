
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {

  film:any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) {}

  ngOnInit() {

    let id=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/films/${id}`).subscribe(res=>{this.film=res});

  }

}
