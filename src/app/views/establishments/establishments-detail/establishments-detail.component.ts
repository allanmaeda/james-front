import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Establishments } from 'src/app/core/model/establishments.model';

@Component({
  selector: 'app-establishments-detail',
  templateUrl: './establishments-detail.component.html',
  styleUrls: ['./establishments-detail.component.scss']
})
export class EstablishmentsDetailComponent implements OnInit {

  establishment: Establishments;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getEstablishmentDetail()
  }

  getEstablishmentDetail(): void {

    if (history.state.data !== undefined) {
      this.establishment = history.state.data?.establishment;
    } else {
      this.goToEstablishments();
    }
    console.log('this.establishment', this.establishment)
  }

  goToEstablishments() {
    return this.router.navigate(['establishments']);
  }

}
