import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  displayedColumns = ['salutation', 'firstName', 'lastName'];
  customersDataSource: MatTableDataSource<Customer>;
  customers: Customer[];
	@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private customerService: CustomerService, private router: Router) { }
  ngAfterViewInit(): void {
    this.getCustomerData();
  }

  ngOnInit(): void {

  }
  getCustomerData(): void {
    // tslint:disable-next-line: deprecation
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customersDataSource = new MatTableDataSource(customers);
      this.customers = customers;
      this.customersDataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.customersDataSource.filter = filterValue.trim().toLowerCase();

    if (this.customersDataSource.paginator) {
      this.customersDataSource.paginator.firstPage();
    }
  }

  goToDetail(row: Customer): void{
    this.router.navigateByUrl(`/detail/${row.id}`);
  }

}
