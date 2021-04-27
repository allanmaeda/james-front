import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Establishments } from 'src/app/core/model/establishments.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-establishments-detail',
  templateUrl: './establishments-detail.component.html',
  styleUrls: ['./establishments-detail.component.scss']
})
export class EstablishmentsDetailComponent implements OnInit {

  establishment: Establishments;

  constructor(
    private router: Router, private fb: FormBuilder, private toastr: ToastrService,
    private cdref: ChangeDetectorRef
  ) { }

  establishmentForm = this.fb.group({
    address: ['', Validators.required],
    email: ['', Validators.required],
    guid: [''],
    id: [''],
    index: [''],
    latitude: [''],
    longitude: [''],
    name: ['', Validators.required],
    phone: ['', Validators.required],
    picture: ['', Validators.required],
    registered: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getEstablishmentDetail();
    this.cdref.detectChanges();

  }

  getEstablishmentDetail(): void {
    if (history.state.data !== undefined) {

      this.establishment = history.state.data?.establishment;
      this.setFormValue();

    } else {

      this.goToEstablishments();

    }
  }

  setFormValue() {
    return this.establishmentForm.patchValue(this.establishment);
  }

  goToEstablishments() {
    return this.router.navigate(['establishments']);
  }

  saveEstablishment() {
    this.establishmentForm.markAllAsTouched();

    if (this.establishmentForm.valid) {

      const establishments = JSON.parse(localStorage.getItem('establishments'));

      establishments.forEach((element: Establishments) => {

        if (element.id === this.establishmentForm.value.id) {
          Object.assign(element, this.establishmentForm.value)          
        }

      });

      localStorage.setItem('establishments', JSON.stringify(establishments));
      this.toastr.success('Seu registro foi salvo!', 'Sucesso!');
      this.goToEstablishments();

    } else {

      this.toastr.warning('O formulário está inválido!', 'Ops!');

    }

  }

}
