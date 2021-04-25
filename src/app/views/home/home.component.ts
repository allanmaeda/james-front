import { Component, OnInit } from '@angular/core';
import { Establishments } from 'src/app/core/model/establishments.model';
import { ApiService } from 'src/app/core/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) { }

  listEstablishments: Establishments[] = [];

  ngOnInit(): void {
    this.getRequest();
  }

  getRequest(): void {
    this.apiService.get().subscribe((data) => {
      this.listEstablishments = data.body;
      console.log('this.listEstablishments', this.listEstablishments)
    });
  }
  
}