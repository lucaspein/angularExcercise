import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router) { }
  customer: Customer;
  id: number;

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.customerService.getCustomerById(this.id).then((customer: Customer) => {
        this.customer = customer;
      }); // this should return an Observable, but im mocking the data
    });
  }

  goBack(): void{
    this.router.navigateByUrl('contacts');
  }

}
