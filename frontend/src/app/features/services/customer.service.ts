import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
	providedIn: 'root'
})

export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomers(): Observable<Customer[]> {
        const file = `/assets/DATA.json`;
        return this.http.get<Customer[]>(file);
    }

    getCustomerById(id: number): Promise<Customer>{
        return new Promise((resolve) => {
        this.getCustomers().toPromise().then((customers: Customer[]) => {
            const found = customers.find(f => f.id === id);
            resolve(found ? found : null);
        });
    });
    }

}
