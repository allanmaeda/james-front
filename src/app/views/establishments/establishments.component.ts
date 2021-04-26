import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Establishments } from 'src/app/core/model/establishments.model';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.scss']
})
export class EstablishmentsComponent implements OnInit {

  constructor(
    private apiService: ApiService, private router: Router
  ) { }

  listEstablishments: Establishments[] = [];

  ngOnInit(): void {
    this.getEstablishments();
  }

  getEstablishments(): void {
    this.apiService.get().subscribe((data) => {

      if (data.body != undefined) {
        this.setListEstablishments(data?.body);
      }

    });
  }

  setListEstablishments(establishments: Establishments[]): void {
    if (localStorage.getItem('establishments') == undefined) {

      localStorage.setItem('establishments', JSON.stringify(establishments));
      this.listEstablishments = establishments;

    } else {

      this.listEstablishments = JSON.parse(localStorage.getItem('establishments'));

    }
  }

  goToDetails(establishment: Establishments) {
    const id = establishment.id;

    return this.router.navigate(['establishments/establishment-detail', id], { state: { data: { establishment } } });
  }
}
