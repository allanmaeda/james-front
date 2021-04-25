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
      this.listEstablishments = data.body;
    });
  }

  goToDetails(establishment: Establishments): void {
    const id = establishment.id;

    this.router.navigate(['establishments/establishment-detail', id], { state: { data: { establishment } } });

  }
}